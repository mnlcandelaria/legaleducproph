import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "./actions/database.action";
import UserModel from "../models/User";
import { IUser } from "@/types";

const client = new MongoClient(process.env.MONGODB_URI!);
const clientPromise = client.connect();

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        try {
          await connectToDatabase();

          // Find user by email
          const user = await UserModel.findOne({ email: credentials.email });

          if (!user || !user.password) {
            throw new Error("Invalid credentials");
          }

          // Check password
          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid credentials");
          }

          // Return user object
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw new Error("Authentication failed");
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectToDatabase();

          const existingUser: IUser | null = await UserModel.findOne({ email: user.email });

          if (!existingUser) {
            await UserModel.create({
              name: user.name,
              email: user.email,
              image: user.image,
              googleId: account.providerAccountId,
              // emailVerified: profile?.email_verified ? new Date() : null,
            });
          } else {
            // Update existing user
            await UserModel.findOneAndUpdate(
              { email: user.email },
              {
                name: user.name,
                image: user.image,
                googleId: account.providerAccountId,
                lastLoginAt: new Date(),
                updatedAt: new Date(),
              }
            );
          }

          return true;
        } catch (error) {
          console.error("Error saving user to database:", error);
          return false;
        }
      }

      return true;
    },
    async session({ session }) {
      if (session.user?.email) {
        try {
          await connectToDatabase();
          const dbUser: IUser | null = await UserModel.findOne({ email: session.user.email });

          if (dbUser) {
            session.user.id = dbUser._id.toString();
            session.user.googleId = dbUser.googleId;
          }
        } catch (error) {
          console.error("Error fetching user from database:", error);
        }
      }

      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        if (account?.provider === "google") {
          token.googleId = account.providerAccountId;
        }
      }

      return token;
    },
  },
  pages: {
    signIn: '/login', // Optional: custom sign-in page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
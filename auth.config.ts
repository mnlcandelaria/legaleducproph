// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
//
// export const authConfig: NextAuthOptions = {
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID!,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//         }),
//     ],
//     pages: {
//         signIn: "/login", // Optional custom login page
//     },
//     secret: process.env.NEXTAUTH_SECRET,
//     callbacks: {
//         async session({ session, token }) {
//             if (session.user) {
//                 session.user.id = token.sub!;
//             }
//             return session;
//         },
//     },
// };

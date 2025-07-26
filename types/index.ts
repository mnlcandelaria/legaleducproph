// types/index.ts
import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
  googleId?: string;
  provider?:string;
  emailVerified?: Date | null;
  lastLoginAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserData {
  name: string;
  email: string;
  password?: string;
  image?: string;
  googleId?: string;
  provider?:string;
  emailVerified?: Date | null;
  lastLoginAt?: Date | null;
}

// Registration form data
export interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Login form data
export interface LoginData {
  email: string;
  password: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      googleId?: string;
      provider?: string;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    googleId?: string;
    provider?: string;
  }
}
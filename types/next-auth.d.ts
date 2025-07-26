// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's unique id. */
      id: string
      /** The user's Google ID */
      googleId?: string
    } & DefaultSession["user"]
  }

  interface User {
    /** The user's unique id. */
    id: string
    /** The user's Google ID */
    googleId?: string
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The user's unique id. */
    id: string
    /** The user's Google ID */
    googleId?: string
  }
}
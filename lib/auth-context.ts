// lib/auth-context.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";

export async function getServerAuthSession() {
  return await getServerSession(authOptions);
}

// Server action for signing in (optional)
export async function signInAction() {
  "use server";
  const { signIn } = await import("next-auth/react");
  return signIn;
}

// Server action for signing out (optional)
export async function signOutAction() {
  "use server";
  const { signOut } = await import("next-auth/react");
  return signOut;
}
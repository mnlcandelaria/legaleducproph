// hooks/useAuth.ts
"use client";

import { useSession } from "next-auth/react";
import { Session } from "next-auth";

interface UseAuthReturn {
  session: Session | null;
  loading: boolean;
  isAuthenticated: boolean;
  user: Session['user'] | undefined;
  status: "loading" | "authenticated" | "unauthenticated";
}

export const useAuth = (): UseAuthReturn => {
  const { data: session, status } = useSession();

  return {
    session,
    loading: status === "loading",
    isAuthenticated: status === "authenticated",
    user: session?.user,
    status,
  };
};
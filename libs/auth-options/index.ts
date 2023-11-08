import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { toast } from "react-toastify";
import { compare } from "bcryptjs";

import { prisma } from "@/libs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile(profile: GoogleProfile) {
        return {
          ...profile,
          role: profile.role ?? "USER",
          id: profile.aud.toString(),
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Weiter",
      credentials: {
        email: {
          label: "Ihre E-Mail-Adresse",
          type: "text",
          placeholder: "name@caritabox.de",
        },
        password: {
          label: "Ihr Passwort",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          toast.error("Ungültige E-Mail oder Passwort");
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.password) {
          toast.error("Ungültige E-Mail oder Passwort");
          return null;
        }
        const verifiyPass = await compare(credentials.password, user.password);
        if (!verifiyPass) {
          toast.error("Ungültige E-Mail oder Passwort");
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, trigger, session, user }) {
      if (user) token.role = user.role;
      if (trigger === "update" && session?.name) token.name = session.name;
      return token;
    },
    async session({ session, token, trigger, newSession }) {
      if (session?.user) session.user.role = token.role;
      if (trigger === "update" && newSession?.name)
        session.user = newSession.user;
      return session;
    },
  },
};

"use client";

import { useSession } from "next-auth/react";

const ClientSession = () => {
  const { data: session } = useSession();
  return session;
};

export default ClientSession;

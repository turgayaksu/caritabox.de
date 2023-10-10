import "@/assets/css/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/providers";
import { Footer, Header } from "@/components";
import { getCurrentUser } from "@/libs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caritabox | Pflegehilfsmittel und Notrufgeräte",
  description:
    "Kostenlose Pflegehilfsmittel: Für Personen mit einem Pflegegrad im Wert von 40 pro Monat Einmal beantragen, immer erhalten",
};

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html suppressHydrationWarning lang="de" className={inter.className}>
      <link rel="icon" href="/favicon.png" />
      <body>
        <Providers>
          <Header currentUser={currentUser} />
          <main className="mt-40">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

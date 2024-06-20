import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "~/components/Header";
import Footer from "~/components/blocks/Footer";
import Script from "next/script";

export const metadata = {
  title: "Mentoria Fullstack",
  description: "Mentoria para Desenvolvedores Fullstack",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-base text-white dark:bg-base-dark">
        <TRPCReactProvider>
          <Header />
          {children}
          <Footer />
        </TRPCReactProvider>
      </body>
      {process.env.NODE_ENV === "production" && (
        <Script
          defer
          src="https://mentoria-analytics.vercel.app/script.js"
          data-website-id="b78fafaa-5d11-4511-9b8f-1b4a46ac7399"
        />
      )}
    </html>
  );
}

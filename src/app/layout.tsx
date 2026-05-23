import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { AppProviders } from "@/components/providers/app-providers";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inicio - Coca Cola",
  description: "Coca Cola - Disfruta del sabor auténtico",
  keywords: ["bebida", "gaseosa", "cola", "refresco"],
  icons: {
    icon: "/img/favicon.png",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="es" className={roboto.variable}>
      <body className={roboto.className}>
        <AppProviders>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;

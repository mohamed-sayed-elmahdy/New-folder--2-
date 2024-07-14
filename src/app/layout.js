import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dlicom",
  description: "Decentralized Social Media Platform",
  icon: "/favicon.ico",
  ogImage: "/favicon.ico",
  openGraph: {
    title: 'Dlicom',
    description: 'Decentralized Social Media Platform'
}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icon} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

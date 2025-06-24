import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Oussama Mehiri Portfolio",
  description: "Oussama Mehiri Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased ">
      <body>
        <Navbar/>
        <main >{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

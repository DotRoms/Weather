import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
title: "Météodou - Votre météo en un clic",
description: "Météodou, votre météo en un clic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header>
          <Header></Header>
        </header>

        <main>
        {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>


    </html>
  );
}

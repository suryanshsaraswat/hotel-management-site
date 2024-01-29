import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const poppins = Poppins({ subsets: ["latin"], 
weight:['400','500','700','900'],
style:['italic','normal']
 });

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Explore the best in class hotels across the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <ThemeProvider>
      <main className="font-normal">
          <Header />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better",
  description: "Created by Arnab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 right-0 left-0 z-50">
          <Header />
        </div>
        <div className="mt-20">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}

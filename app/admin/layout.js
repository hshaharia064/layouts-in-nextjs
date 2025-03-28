import { Geist, Geist_Mono } from "next/font/google";

import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin page",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
   
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      <div>

        {children}
      </div>
      

  );
}

import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from 'geist/font/sans';

import './globals.css';
import { Navbar } from "./navbar";


export const metadata: Metadata = {
  title: "Union of High School Students of Macedonia",
  description: "The official website of the Union of High School Students of Macedonia. Stay up to date with the latest news, events, projects, and activities. Find out more about the Union and how you can get involved. Join us in our mission to improve the quality of education in Macedonia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${GeistSans.variable} font-sans antialiased min-w-full min-h-dvh h-dvh w-full !pt-navbar`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "Welcome to my MERN stack portfolio powered by React Native and Next.js. Explore innovative projects showcasing my expertise in MongoDB, Express.js, React, and Node.js. From dynamic UIs to robust backend solutions, witness the seamless integration of cutting-edge technologies that define my passion for web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        ></link>
      </head>

      <body
        suppressHydrationWarning={false}
        className={`${poppins.variable}  bg-white `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

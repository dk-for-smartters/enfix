import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./Components/SideBar";

export const metadata: Metadata = {
  title: "Enfix",
  description: "Wonderlaa Park",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}

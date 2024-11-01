// src/pages/_app.js or src/app/layout.js
import "./globals.css";
import SideNavbar from "@/components/SideNavbar"; // This path should match your directory structure.

export default function RootLayout({ children }) {
  return (
    <>
      <SideNavbar />
      {children}
    </>
  );
}

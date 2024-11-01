// src/pages/_app.js
import "./globals.css";
import SideNavbar from "@/components/SideNavbar"; // Correct import path

export default function App({ Component, pageProps }) {
  return (
    <>
      <SideNavbar />
      <Component {...pageProps} />
    </>
  );
}

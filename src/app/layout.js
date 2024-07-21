import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weights: ["400", "700"] });

export const metadata = {
  title: "Property Listings - Nextjs",
  description: "Property Listing web application using Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weights: ["400", "700"] });

export const metadata = {
  title: "NextJS - Tafadzwa",
  description: "Web application with NextJS and ReactJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}

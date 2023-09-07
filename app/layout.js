import "./globals.css";
import { Roboto, Oswald } from "next/font/google";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Restaurante",
  description: "Página principal del restaurante",
  keywords: "restaurante, berlin, mirador",
};

const oswald = Oswald({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/3.png" />
      </head>
      <body className={`${oswald.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

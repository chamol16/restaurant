import Navbar from "./components/Navbar";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

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
      <body className={oswald.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

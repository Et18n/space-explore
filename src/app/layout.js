import "./globals.css";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { GlobalContextProvider } from "./Context/store";
const inter = Roboto({ subsets: ["latin"], weight: ["400", "700", "100"] });

export const metadata = {
  title: "Space Explore",
  description: "Space Exploration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider> {children}</GlobalContextProvider>
      </body>
    </html>
  );
}

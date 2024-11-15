import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/CustomCursor"; // Import Custom Cursor Component

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "It's Stephan Portfolio",
  description: "Created by Stephan.I",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-primary bg-primary text-white">
        <Header />
        <StairTransition />
        <CustomCursor /> {/* Add the custom cursor here */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

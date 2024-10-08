import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import "@liveblocks/react-ui/styles.css";
import { ThemeProvider } from "./_components/theme-provider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Loop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
     
          <ClerkProvider>
            <Toaster />
            {children}
          </ClerkProvider>
        
      </body>
    </html>
  );
}

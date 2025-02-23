import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
// import { Inter } from 'next/font/google';
import { Space_Grotesk } from "next/font/google";

import type { ReactNode } from "react";

// const inter = Inter({
//   subsets: ['latin'],
// });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={spaceGrotesk.className}
        suppressHydrationWarning
      >
        <body className="flex flex-col min-h-screen">
          <RootProvider>
            
            {children}
          </RootProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

"use client"
import {
  ClerkProvider,
} from "@clerk/nextjs";
import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
// import { Inter } from 'next/font/google';
import { Space_Grotesk } from "next/font/google";

import type { ReactNode } from "react";
import { PathfindingProvider } from "./context/PathfindingContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import { ToastContainer } from "react-toastify";

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
            <PathfindingProvider>
              <TileProvider>
                <SpeedProvider>
            
            {children}
            <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
            </SpeedProvider>
            </TileProvider>
            </PathfindingProvider>
          </RootProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

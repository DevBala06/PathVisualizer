"use client";

import Footer from "../components/Footer";
import { GridBackground } from "../components/GridBackground";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { Sparkles } from "lucide-react";
// import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
    <div className="h-[95vh] bg-black">
    {/* <Navbar/> */}
    <GridBackground Component={Hero}/>
    </div>
    <div>
    <About/>    
    </div>
    <div >
      <div className="flex justify-center items-center">
        <HoverBorderGradient >
      <div className="flex items-center gap-x-2">
    <Sparkles className="w-4 h-4 text-yellow-300" />
    <h1 className="text-xs">Features</h1>
  </div>
      </HoverBorderGradient>
      </div>
      
      <Features/>
    </div>
    <div className="h-[100vh]  bg-black">
      <Footer/>
      </div>
    
    </>
  );
}

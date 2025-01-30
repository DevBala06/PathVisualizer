"use client";

import Footer from "../components/Footer";
import { GridBackground } from "../components/GridBackground";
import Hero from "../components/Hero";
import About from "../components/About";
// import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
    <div className="h-[95vh]">
    {/* <Navbar/> */}
    <GridBackground Component={Hero}/>
    </div>
    <div>
    <About/>    
    </div>
    <div className="h-[100vh] bg-black">
      <Footer/>
      </div>
    
    </>
  );
}

// import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { GridBackground } from "./components/GridBackground";
// import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="h-[100vh]">
    {/* <Navbar/> */}
    <GridBackground/>
    </div>
    <div className="h-[100vh] bg-black">
      <Footer/>
      </div>
    
    </>
  );
}

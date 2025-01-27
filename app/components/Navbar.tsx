"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"


interface NavLink {
    label: string,
    href:string,
  }
  const navLinks:NavLink[] = [
    {label:"Home", href:"/"},
    {label:"Docs", href:"/docs"},
    {label:"Dashboard", href:"/dashboard"},
    {label:"Visualize",  href:"/visualizer"}
  ]

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
    <div className="border-b border-zinc-900 h-[12%] bg-black select-none flex items-center">
      <div className="flex justify-between mt-4 w-[95vw] m-auto items-center mb-4">
      <div className="flex items-center gap-12">
      <h1 className=" text-2xl font-semibold">
        PathVisualizer<span className="text-sm ">.io</span></h1>
      <div className="flex gap-6">  
        {
          navLinks.map((link,i)=>(
        <Link key={i} href={link.href} className="font-medium text-zinc-500  flex items-start text-sm hover:text-zinc-100">{link.label}<span className={`${pathname==link.href ?"hidden":""}`} ><ArrowUpRight  color="#71717a" size={"0.7rem"}/></span></Link>
          ))
        }
      </div>
      </div>
      <div className="flex gap-5 items-center">

<button

  className="[--background:#000000] [--color:#ffffff] [--muted:#242424] [--muted-foreground:#9c9c9c] [--border:#2e2e2e] relative inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[--border] bg-[--background] hover:bg-[--muted] text-[--muted-foreground] hover:text-[--color] px-4 py-2 justify-start rounded-[0.5rem] text-sm font-normal shadow-none h-8 w-64"
  type="button"
>
  <input placeholder="Search docs..." className="hidden bg-transparent outline-none lg:inline-flex"></input>
  <input placeholder="Search..." className="inline-flex lg:hidden   bg-transparent outline-none"></input>
  <kbd
    className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] flex h-5 select-none items-center gap-1 rounded border border-[--border] bg-[--muted] px-1.5 font-mono text-[10px] font-medium opacity-100 [&amp;_span]:text-xs"
  >
    <span>⌘</span>K
  </kbd>
</button>

        <Link href={""} className="text-sm border font-semibold border-zinc-800 p-2 rounded-md">Get Started</Link>
        <Link href={"/"} className="font-normal  text-sm bg-white p-2 px-4  rounded-md text-black">Learn</Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
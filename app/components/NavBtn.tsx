import Link from 'next/link'
import React from 'react'

const NavBtn = () => {
  return (
    <div className="flex ml-3 mr-4 gap-5 items-center">

        <Link href={"/"} className="text-sm border font-semibold border-zinc-800 p-2 rounded-md">Get Started</Link>
        <Link href={"/"} className="font-normal  text-sm bg-white p-2 px-4  rounded-md text-black">Learn</Link>
      </div>
  )
}

export default NavBtn
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const  NavBtn = async() => {
  const { userId } = await auth()
  return (
    <div className="flex ml-3 mr-4 gap-5 items-center">
      {!userId?(
        <Link href={"/sign-in"} className="text-sm border font-semibold text-white border-zinc-800 p-2 rounded-md">Get Started</Link>
      ):
      (
        <Link href={"/dashboard"} className="text-sm border font-semibold text-white border-zinc-800 p-2 rounded-md">Dashboard</Link>

      )
      }
        <Link href={"/docs"} className="font-normal  text-sm bg-white p-2 px-4  rounded-md text-black">Learn</Link>
      </div>
  )
}

export default NavBtn
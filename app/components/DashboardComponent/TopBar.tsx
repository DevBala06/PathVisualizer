"use client"

import { useUser } from "@clerk/nextjs";
import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { Search } from "./Search";
import { useRouter } from "next/navigation";

function formatDate(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: "long", month: "short", day: "numeric", year: "numeric" };
    let formattedDate = date.toLocaleDateString("en-US", options);
  
    formattedDate = formattedDate.replace(
      /\d{1,2}/,
      (day) => `${day}${getOrdinalSuffix(Number(day))}`
    );
  
    return formattedDate;
  }
  
  function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  }
  

export const TopBar = () => {
    const router = useRouter();
    const { user } = useUser();


  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">🚀 Good morning, {user?.username}!</span>
          <span className="text-xs block text-stone-500">
            {formatDate()}
          </span>
        </div>

        <div className="flex gap-4 mt-2  w-[30%]">
        <div className="w-full items-center">
        <Search/>
        </div>
        <div className="flex gap-2 mb-4 items-center">
        <CiSettings onClick={()=>router.push('/dashboard/settings')} className="text-xl cursor-pointer text-black font-bold"/>
        <IoNotificationsOutline/>
        </div>
        
        </div>
      </div>
    </div>
  );
};
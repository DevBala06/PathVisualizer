"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const AccountToggle = () => {

  const {user} = useUser();
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        {/* <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        /> */}
        <UserButton/>
        <div className="text-start">
          <span className="text-sm font-bold block">{user?.firstName} {user?.lastName}</span>
          <span className="text-xs block text-stone-500">{user?.emailAddresses[0].emailAddress}</span>
        </div>

        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};
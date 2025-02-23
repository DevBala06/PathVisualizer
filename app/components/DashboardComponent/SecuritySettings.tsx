"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import { IoLaptop } from "react-icons/io5";
import { FaMobile } from "react-icons/fa6";
import type {SessionWithActivitiesResource} from '@clerk/types'


const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
  
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();
  
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  
    return isToday ? `Today at ${formattedTime}` : `${date.toLocaleDateString("en-US", { weekday: "long" })} at ${formattedTime}`;
  };
  
  
  

const SecuritySettings = () => {
    const { user } = useUser();
    const [sessions, setSessions] = useState<SessionWithActivitiesResource[]>([]);

    useEffect(() => {
        const fetchSessions = async () => {
          if (user) {
            const sessionData = await user.getSessions();
            console.log("Session Data:", sessionData); // Debugging
            setSessions(sessionData);
          }
        };
    
        fetchSessions();
      }, [user]);

  return (
    <div>
        <div className=' mt-6 bg-white shadow w-[80%] h-fit rounded-lg p-2  border relative border-[#5c5b5b14]'>
        <h1 className='font-semibold text-base text-black'>Security</h1>
        <div className='p-2'>
        <h2 className='text-black text-sm font-semibold mb-1'>Active devices</h2>
        <ul>
        {sessions.map((session) => (
          <li key={session.id} className="border p-2 rounded flex  flex-col gap-2">
            <p className='flex gap-1 items-center text-black text-xs font-medium'><span className='text-stone-400 text-xs'>Device:</span> {session.latestActivity.isMobile ?<FaMobile/> : <IoLaptop/>} {session.latestActivity.deviceType || "Unknown"}
            <span className="text-[11px] h-fit text-stone-500   border bg-stone-200 px-1 rounded-md border-[#5c5b5b14] ">
                {session.status}
              </span>
            </p>
            
            <p className='text-black text-xs font-medium'><span className='text-stone-400 text-xs'>Browser:</span> {session.latestActivity.browserName || "Unknown"} {session.latestActivity.browserVersion}</p>
            <p className='text-black text-xs font-medium'><span className='text-stone-400 text-xs'>IP Address:</span> {session.latestActivity.ipAddress || "Unknown"}({session.latestActivity.city},{session?.latestActivity?.country})</p>
            <p className='text-black text-xs font-medium'><span className='text-stone-400 text-xs'>Last Active:</span> {session.lastActiveAt ? formatDate(Number(session.lastActiveAt)) : "Unknown"}</p>
        
          </li>
        ))}
      </ul>
        </div>
        </div>
    </div>
  )
}

export default SecuritySettings
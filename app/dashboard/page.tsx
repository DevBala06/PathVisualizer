"use client"
import { useEffect } from "react";
import { Dashboard } from "../components/DashboardComponent/Dashboard";
// import { Sidebar } from "../components/DashboardComponent/Sideabar";
import { useUser } from "@clerk/nextjs";
import axios from 'axios'

export default function Home() {

  const {user} = useUser();
    useEffect(() => {
        const sendUserData = async () => {
          if (user) {
            const primaryEmail = user.emailAddresses[0].emailAddress;
            try {
              const userData = {
                clerkId: user.id,
                userName: user.username || "DefaultUsername",
                email: primaryEmail,
                firstName:user.firstName,
                lastName:user.lastName,
                createdAt: user.createdAt,
                updatedAt: new Date(),
              };
    
              await axios.post("/api/new-user", userData);
              console.log("User data sent to server");
            } catch (error) {
              console.error("Error sending user data", error);
            }
          }
        };
    
    
        if (user) {
          sendUserData();
        }
    
        // setIsMounted(true);
      }, [user]);

  return (
    <main className="grid grid-cols-1 bg-[#F5F7F9] min-h-screen">
      {/* <Sidebar /> */}
      <Dashboard />
    </main>
  );
}





















// 'use client'
// import { UserButton, useUser } from '@clerk/nextjs';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios'

// const Dashboard = () => {
//     const { user } = useUser();
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() => {
//         const sendUserData = async () => {
//           if (user) {
//             const primaryEmail = user.emailAddresses[0].emailAddress;
//             try {
//               const userData = {
//                 clerkId: user.id,
//                 userName: user.username || "DefaultUsername",
//                 email: primaryEmail,
//                 firstName:user.firstName,
//                 lastName:user.lastName,
//                 createdAt: user.createdAt,
//                 updatedAt: new Date(),
//               };
    
//               await axios.post("/api/new-user", userData);
//               console.log("User data sent to server");
//             } catch (error) {
//               console.error("Error sending user data", error);
//             }
//           }
//         };
    
    
//         if (user) {
//           sendUserData();
//         }
    
//         setIsMounted(true);
//       }, [user]);
//       if (!isMounted || !user) {
//         return <div >
//         <h1>Loading...</h1>
//         </div>;
//       }
    
//       return (
//         <div className='  h-screen w-full '>
//           <div className=" border-b border-gray-400 flex p-2 bg-white items-center justify-between">
//             <div className="flex items-center justify-center   gap-3">
//               <h1 className="text-2xl max-md:text-xl text-zinc-800 font-bold">
//                 Welcome back, {user?.fullName || user?.username}
//               </h1>
//               {/* <PiHandWavingBold className="text-2xl" /> */}
//             </div>
//             <div>
//               <div className="flex items-center justify-center gap-5">
//                 {/* <div>
//                   <div className="flex items-center justify-center gap-3 bg-white px-4 py-1.5 rounded-full shadow-sm">
//                     <FaSearch className="text-gray-600 text-lg" />
//                     <input
//                       className="outline-none bg-transparent"
//                       placeholder="Find your interviews..."
//                       type="text"
//                     />
//                   </div>
//                 </div> */}
//                 <UserButton />
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

// export default Dashboard
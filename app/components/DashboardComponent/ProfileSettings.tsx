"use client";
import { useUser } from "@clerk/nextjs";
import { MdOutlineEdit } from "react-icons/md";
import React from "react";
import SecuritySettings from "./SecuritySettings";
interface ProfileProps {
  text: string;
  textValue: string | null | undefined;
}

const ProfileLayout = ({ text, textValue }: ProfileProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-stone-400 text-xs">{text}</h1>
      <h3 className="text-black text-xs font-medium">{textValue}</h3>
    </div>
  );
};

const ProfileSettings = () => {
  const { user } = useUser();

  return (
    <div>
      <h1 className="font-semibold text-lg">My Profile</h1>
      <div className="p-2">
        <div className="  bg-white shadow w-[80%] h-fit rounded-lg p-2  border relative border-[#5c5b5b14]">
          <h1 className="font-semibold text-base text-black">
            Personal Information
          </h1>
          <div className="flex gap-2 mt-4 flex-col px-3  ">
            <h2 className="text-stone-400 text-xs">Profile</h2>
            <div className="flex gap-4 items-center ">
              <img
                src={user?.imageUrl}
                alt="userProfileImg"
                className="rounded-full h-10 w-10"
              />
              <h2 className="text-black text-base font-medium">
                {user?.fullName
                  ?.split(" ")
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h2>
            </div>
          </div>

          <button className="flex items-center gap-1 border border-[#5c5b5b14] rounded-full px-2 py-1 shadow justify-center absolute  right-2 top-1 flex-row-reverse text-xs font-semibold">
            <MdOutlineEdit />
            Edit
          </button>
          <div className="grid grid-cols-2 gap-7 w-[70%] p-3">
            <ProfileLayout text={"First Name"} textValue={user?.firstName} />
            <ProfileLayout text={"Last Name"} textValue={user?.lastName} />
            <ProfileLayout text={"UserName"} textValue={user?.username} />
            <ProfileLayout text={"Password"} textValue={"************"} />
            <div className="flex gap-2 relative">
              <ProfileLayout
                text={"Email Addresses"}
                textValue={user?.emailAddresses[0].emailAddress}
              />
              <h1 className="text-[11px] h-fit absolute bottom-0 right-3 border bg-stone-200 px-1 rounded-md border-[#5c5b5b14] ">
                Primary
              </h1>
            </div>
            <ProfileLayout
              text={"Last Updated"}
              textValue={user?.updatedAt?.toDateString()}
            />
          </div>
        </div>
        <SecuritySettings />
      </div>
    </div>
  );
};

export default ProfileSettings;

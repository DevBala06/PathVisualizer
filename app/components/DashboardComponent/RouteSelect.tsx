"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState} from "react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GiPathDistance = dynamic(() => import("react-icons/gi").then((mod) => mod.GiPathDistance), { 
  ssr: false 
}) as IconType;

export const RouteSelect = () => {
  const path = usePathname();
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
 
  useEffect(() => {
    if (path) {
      setSelectedTab(path); 
    }
  }, [path]);

  return (
    <div className="space-y-1">
      <Route Icon={FiHome} title="Dashboard" selected={selectedTab === "/dashboard" } setSelectedTab={setSelectedTab} href={"/dashboard"} />
      <Route Icon={GiPathDistance} title="Visualizer" selected={selectedTab === "/dashboard/visualizer"} setSelectedTab={setSelectedTab} href={"/dashboard/visualizer"} />
      <Route Icon={CiSettings} title="Settings" selected={selectedTab === "/dashboard/settings"} setSelectedTab={setSelectedTab} href={"/dashboard/settings"} />
    </div>
  );
};

const Route = ({
  Icon,
  title,
  selected,
  setSelectedTab,
  href,
}: {
  Icon: IconType | React.ComponentType;
  title: string;
  selected: boolean;
  setSelectedTab: (title: string) => void;
  href:string;
}) => {
  return (
    <Link href={href}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
      onClick={() => setSelectedTab(title)}
    >
      <Icon className={selected ? "text-violet-500" : ""} size={18} />
      <span>{title}</span>
    </Link>
  );
};

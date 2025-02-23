"use client";

import { SearchDialog } from "fumadocs-ui/components/dialog/search";
import React, { useState, useEffect } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
type AllowedTypes = "page" | "heading" | "text";
import type  { SortedResult as ReactSortedResult} from 'fumadocs-core/server';

export const Search = () => {


  
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ReactSortedResult[] | "empty">("empty");

  // Sample Data
  const data = [
    { id: "1", title: "Visualize", type:'page', url: "/visualizer" },
    { id: "2", title: "Docs", type:'page', url: "/docs" },
  ];

  // Filter Results
  useEffect(() => {
    if (!search.trim()) {
      setResults("empty");
      return;
    }

    const filteredResults = data
      .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
      .map((item) => ({
        id: item.id,
        title: item.title, // ✅ Ensure this exists
        url: item.url,
        type: item.type as AllowedTypes, // ✅ Required field
        content: item.title, // ✅ Some UI might use this
      }));

    setResults(filteredResults.length > 0 ? filteredResults : "empty");
  }, [search]);

  // Handle Cmd + K Open
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Search Input Box */}
      <div
      className="bg-neutral-100 mb-4 relative border border-[#e4e4e7dc] rounded w-full flex items-center px-2 py-1.5 text-sm cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <FiSearch className="mr-2 text-gray-500" />
        <span className="text-gray-600">Search...</span>
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
      </div>

      <SearchDialog
        open={open}
        onOpenChange={setOpen}
        search={search}
        onSearchChange={setSearch}
        results={results ? results : "empty"}
      />
    </>
  );
};

import { useRouter } from "next/router";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import { json2query } from "../util";
import { BiSearch } from "react-icons/bi";

export const Search = (props) => {
  const router = useRouter();
  const { query = "" } = router.query;

  const handleChange = (e) => {
    router.push(
      `?${json2query({
        ...router.query,
        query: e.target.value,
      })}`
    );
  };
  return (
    <div className="flex flex-col relative">
      <BiSearch className="absolute left-2 top-2 text-xl"/>
      <input 
        type="text" 
        id="search" 
        className="bg-gray-450 rounded-md border-2 pr-2 pl-8 py-1 border-gray-400" 
        placeholder="Search by token id e.g., 4003"
        onChange={handleChange}/>
    </div>
  );
};

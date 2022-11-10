import React from "react";
import { useRouter } from "next/router";
import { Tools } from "./Tools";
import { Filters } from "./Filters";
import { AttrFilter } from "./AttrFilter";
import { Search } from "./Search";

import { BiSearch } from "react-icons/bi";
export const TestBar = (props) => {
  const router = useRouter();
  const { all_traits, attr_count, showMenu, setShowMenu } = props;

  return (
    <div className="bg-gray-800 p-8 rounded-xl text-white w-64 mt-8">
      <div className="flex flex-col gap-3">
        <div className="py-2">FILTERS</div>
        <div className="flex flex-col relative">
            <BiSearch className="absolute left-2 top-2 text-xl"/>
            <input type="text" id="search" className="bg-gray-450 rounded-md border-2 pr-2 pl-8 py-1 border-gray-400" placeholder="Search by token id e.g., 4003"/>
        </div>
        <select className="bg-gray-450 rounded-md px-2 py-1 border-2 border-gray-400">
          <option value="SHOW_ALL">SORT BY RARITY</option>
          <option value="SHOW_REGISTERED">SORT BY TOKEN ID</option>
          <option value="SHOW_AVAILABLE">SORT BY TOKEN ID</option>
        </select>
      </div>
    </div>
  );
};

import React from "react";
import { useRouter } from "next/router";
import { Tools } from "./Tools";
import { Filters } from "./Filters";
import { AttrFilter } from "./AttrFilter";
import { Search } from "./Search";

export const TestBar = (props) => {
  const router = useRouter();
  const { all_traits, attr_count, showMenu, setShowMenu } = props;

  return (
    <div>
      <div className="flex flex-col">
        <span>Show</span>
        <select className="bg-tezDarkBg border-inputBorder">
          <option value="SHOW_ALL">All</option>
          <option value="SHOW_REGISTERED">Registered</option>
          <option value="SHOW_AVAILABLE">Available</option>
          <option value="SHOW_FEATURED">Featured</option>
        </select>
      </div>
    </div>
  );
};

import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Tools } from "./Tools";
import { Filters } from "./Filters";
import { AttrFilter } from "./AttrFilter";
import { ForSale } from "./ForSale";
import { Search } from "./Search";
import CollapsibleForm from "./CollapsibleForm";
import { BiSearch } from "react-icons/bi";
export const SideBar = (props) => {
  const router = useRouter();
  const { all_traits, attr_count, showMenu, setShowMenu } = props;
  const startWithRef = useRef(null);
  const endWithRef = useRef(null);
  return (
    <div
      className={`absolute sm:relative ${
        !showMenu ? "hidden" : "block"
      } sm:block text-white	h-50 max-h-screen overflow-auto max-w-full sm:max-w-xs w-full bg-gray-800 p-8`}
    >
      <div className="flex flex-col gap-3">
        <div className="py-2">FILTERS</div>
        <Search {...router.query} setShowMenu={setShowMenu} />
        <Tools {...router.query} setShowMenu={setShowMenu} />
        <div className="flex flex-col">
          <ForSale {...router.query} setShowMenu={setShowMenu} />
          <Filters allTraits={all_traits} setShowMenu={setShowMenu} />
        </div>
      </div>
    </div>
  );
};

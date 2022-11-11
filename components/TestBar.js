import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Tools } from "./Tools";
import { Filters } from "./Filters";
import { AttrFilter } from "./AttrFilter";
import { Search } from "./Search";
import CollapsibleForm from "./CollapsibleForm";
import { BiSearch } from "react-icons/bi";
export const TestBar = (props) => {
  const router = useRouter();
  const { all_traits, attr_count, showMenu, setShowMenu } = props;
  const startWithRef = useRef(null);
  const endWithRef = useRef(null);
  return (
    <div className="bg-gray-800 p-8 rounded-xl text-white w-64 mt-8">
      <div className="flex flex-col gap-3">
        <div className="py-2">FILTERS</div>
        <Search {...router.query} setShowMenu={setShowMenu} />
        {/* <div className="flex flex-col relative">
          <BiSearch className="absolute left-2 top-2 text-xl"/>
          <input type="text" id="search" className="bg-gray-450 rounded-md border-2 pr-2 pl-8 py-1 border-gray-400" placeholder="Search by token id e.g., 4003"/>
        </div> */}
        {/* <select className="bg-gray-450 rounded-md px-2 py-1 border-2 border-gray-400">
          <option value="SHOW_ALL">Sort by Rarity(asc)</option>
          <option value="SHOW_REGISTERED">Sort by Token Id(asc)</option>
          <option value="SHOW_AVAILABLE">Sort by Token Id(desc)</option>
        </select> */}
        {/* <CollapsibleForm
          heading="Background"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Body"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Clothes"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Headwear"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Eyewear"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Mouthpiece"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Special"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Rank"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        />
        <CollapsibleForm
          heading="Attributes"
          element={
            <div className="py-4 flex flex-col gap-2">
              <div className="flex justify-between">
                <input
                  ref={startWithRef}
                  type="checkbox"
                  value="7bccb"
                  id="back1"
                />
                <label for="back1" className="flex justify-between gap-28">
                  <div>7bccb</div>
                  <div>41</div>
                </label>
              </div>
            </div>
          }
        /> */}
      </div>

    </div>
  );
};

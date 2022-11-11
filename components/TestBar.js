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
        <Tools {...router.query} setShowMenu={setShowMenu} />
        <Filters allTraits={all_traits} setShowMenu={setShowMenu} />
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

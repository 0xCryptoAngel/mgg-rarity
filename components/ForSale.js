import { useRouter } from "next/router";
import React from "react";
import { DebounceInput } from "react-debounce-input";
import { json2query } from "../util";
import { BiSearch } from "react-icons/bi";
import CollapsibleForm from "./CollapsibleForm";

export const ForSale = (props) => {
  const router = useRouter();
  const handleChange = (e) => {
    console.log("e.target.value", e.target.value)
    router.push(
      `?${json2query({
        ...router.isListed,
        isListed: e.target.value,
      })}`
    );
  };
  return (
    <div className="">
      <CollapsibleForm
        heading="For Sale"
        element={
          <div className="flex flex-col">
            <div>
              <input
                type="radio"
                id="back1"
                name="drone"
                value="listed"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="back1" className="pl-1">
                Listed for Sale
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="drone"
                value="notListed"
                onChange={(e) => handleChange(e)}
                id="back2"
              />
              <label htmlFor="back2" className="pl-1">
                Not for Sale
              </label>
            </div>
          </div>
        }
      />
    </div>
  );
};

import React from "react";
import { useRouter } from "next/router";
import { json2query } from "../util";
import CollapsibleForm from "./CollapsibleForm";

export const Filters = (props) => {
  const router = useRouter();
  let { traits = "" } = router.query;
  const { allTraits } = props;
  const filters = Object.keys(allTraits);

  const handleChange = (trait) => {
    console.log("trait", trait)
    props.setShowMenu(false);
    traits = traits ? traits : "";
    console.log(traits.length, "trait filters");
    traits = traits.split(",").filter((val) => val);
    traits.push(trait);
    router.push(`?${json2query({ ...router.query, traits, page_id: 0 })}`);
  };

  return (
    <div className="border-b border-gray-500">
      {filters.map((filter, index) => (
        <div className="w-full flex flex-col">
          <CollapsibleForm
            heading={filter}
            element={
              <div className="py-4 flex flex-col gap-2">
                {Object.keys(allTraits[filter]).map((val, i) => (
                  <div className="flex" >
                    <input
                      type="checkbox"
                      onChange={() => handleChange(val)}
                      id={`back${i}`}
                    />
                    <label for={`back${i}`} className="flex justify-between w-full pl-1">
                      <div>{val}</div>
                      <div>{allTraits[filter][val]}</div>
                    </label>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
};

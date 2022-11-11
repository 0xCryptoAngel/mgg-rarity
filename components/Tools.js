import React, { useState } from "react";
import { useRouter } from "next/router";
import { ImSortNumbericDesc, ImSortNumericAsc } from "react-icons/im";
import { json2query } from "../util";

export const Tools = (props) => {
  const router = useRouter();
  const { sort_by = "rarity_score", order = "desc" } = router.query;
  const handleChange = (event) => {
    let option = event.target.value
    props.setShowMenu(false);
    if (option.toLowerCase().includes("rarity")) {
      if (option.includes("desc")) {
        router.push(
          `?${json2query({
            ...router.query,
            sort_by: "rarity_score",
            order: "desc",
            page_id: 0,
          })}`
        );
      }
      if (option.includes("asc")) {
        router.push(
          `?${json2query({
            ...router.query,
            sort_by: "rarity_score",
            order: "asc",
            page_id: 0,
          })}`
        );
      }
    }

    if (option.toLowerCase().includes("id")) {
      if (option.includes("desc")) {
        router.push(
          `?${json2query({
            ...router.query,
            sort_by: "id",
            order: "desc",
            page_id: 0,
          })}`
        );
      }
      if (option.includes("asc")) {
        router.push(
          `?${json2query({
            ...router.query,
            sort_by: "id",
            order: "asc",
            page_id: 0,
          })}`
        );
      }
    }
  };

  return (
    <select className="bg-gray-450 rounded-md px-2 py-1 border-2 border-gray-400" onChange={handleChange} >
      <option value="rarity asc">Sort by Rarity(asc)</option>
      <option value="rarity desc">Sort by Rarity(desc)</option>
      <option value="id asc">Sort by Token Id(asc)</option>
      <option value="id desc">Sort by Token Id(desc)</option>
    </select>
  );
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getNFTs } from "../../util/nfts";

export default async function nftsAPI(req, res) {
  let {
    page_id = 0,
    sort_by = "rarity_score",
    order = "desc",
    traits = "",
    attr_count = "",
    isListed,
    query,
  } = req.query;
  let { nfts, pages } = await getNFTs(
    page_id,
    sort_by,
    order,
    traits.split(",").filter((val) => val),
    attr_count,
    isListed,
    query
  );
  res.status(200).json({ nfts, pages });
}

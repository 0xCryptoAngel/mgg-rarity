import React from "react";

export const NFT = (nft) => {
  console.log(nft);

  let currency = "";
  if (nft.price != "Not for sale") {
    currency = " XTZ";
  }

  return (
    <>
      <a
        className="w-32
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/${nft.id}`}
        style={{ border: `solid 1px #454545` }}
      >
        <img
          src={`https://ipfs.io/ipfs/${nft?.thumbnailUri?.replace(
            "ipfs://",
            ""
          )}`}
          className="rounded-md h-auto bg-black"
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />

        <div className="rounded-b-md py-2 flex justify-between px-2">
          <h3 className="text-xs text-gray-300">Rank: {nft.rarity_rank + 1}</h3>
          <h3 className="text-xs text-gray-300">#{nft.id}</h3>
        </div>
        <div className="rounded-b-md py-2 px-2 border-t border-gray-600">
          <h3 className="text-xs text-gray-300">
            {nft.price}
            {currency}
          </h3>
        </div>
      </a>
    </>
  );
};

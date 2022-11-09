import React from "react";

export const NFT = (nft) => {
  console.log(nft);

  let currency = "";
  if (nft.price != "Not to sale") {
    currency = " XTZ";
  }

  return (
    <>
      <a
        className="text-left w-24
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/${nft.id}`}
        style={{ border: `solid 1px black` }}
      >
        <img
          src={`https://ipfs.io/ipfs/${nft?.thumbnailUri?.replace(
            "ipfs://",
            ""
          )}`}
          className="rounded-md h-auto bg-black"
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />

        <div className="rounded-b-md py-2">
          <h3 className="text-xs text-gray-600">Rank: {nft.rarity_rank + 1}</h3>
        </div>
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">#{nft.id}</h3>
        </div>
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">
            Price: {nft.price}
            {currency}
          </h3>
        </div>
      </a>
    </>
  );
};

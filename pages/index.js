import Head from "next/head";
import React, { createRef, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { NFT } from "../components/NFT";
import { SideBar } from "../components/SideBar";
import { PageNumbers } from "../components/PageNumbers";
import Navbar from "../components/Navbar";
import { TraitFilters } from "../components/TraitFilters";
import { Footer } from "../components/Footer";
import { config } from "../config";
import { getFilters, getNFTs } from "../util/requests";
import {
  getPriceV2,
  allThePrices,
  firstQuery,
  changeFirstQueryState,
} from "../util/requestsGraphQL.js";

function Home({ title, img, description, nftss, pages, filters }) {
  const router = useRouter();
  const ref = createRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const { all_traits, attr_count } = filters;

  return (
    <div
      className="flex flex-col items-center justify-center 
    min-h-screen bg-gradient-to-r from-rose-50 to-rose-100 h-full"
      ref={ref}
    >
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextSeo
        title={title}
        openGraph={{
          images: [
            {
              url: img,
            },
          ],
        }}
        twitter={{
          image: img,
          cardType: "summary_large_image",
        }}
        description={description}
      />
      <Navbar
        title={title}
        menu={true}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
      />
      <main className="relative flex justify-center w-full flex-1 h-screen px-36 bg-gray-450 pb-4">
        <div>
          <SideBar 
            all_traits={all_traits}
            attr_count={attr_count}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
           />
        </div>
        <div className="flex flex-col w-full w-5xl px-4">
          {showMenu}
          <TraitFilters />
          <div className="flex flex-wrap justify-between sm:justify-start max-w-5xl w-full">
            {nftss.map((nft, idx) => (
              <NFT {...nft} index={idx} key={idx} />
            ))}
          </div>
          <PageNumbers pages={pages} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

Home.getInitialProps = async ({ query }) => {
  let { nfts = [], pages } = await getNFTs(query);
  let filters = await getFilters(query);

  if (firstQuery) {
    await getPriceV2(0, true);
    changeFirstQueryState();
  }
  nfts.map(function (nft) {
    nft.price = "Not for sale";
    
    allThePrices.map(function (aPrice) {
      if (parseInt(aPrice.id, 10) == nft.id) {
        nft.price = aPrice.price;
      }
    });
  });
  let nftss = [];
  if(query?.isSaled) {
    console.log("1")
    // nftss = nfts.filter(nft => nft.price.toString() != "Not for sale");
  } else if(!query?.isSaled){
    console.log("2")
    // nftss = nfts.filter(nft => nft.price.toString() === "Not for sale");
  } else if(query?.isSaled == undefined){
    nftss = nft;
  }
  // console.log("nfts", nftss)

  return {
    title: config.COLLECTION_TITLE,
    description: config.COLLECTION_DESCRIPTION,
    img: config.COLLECTION_IMG_LINK,
    nftss,
    pages,
    filters,
  };
};

export default Home;

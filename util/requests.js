import axios from "axios";
import { json2query } from ".";
import { config } from "../config";

let basePath =
  config.env == "local"
    ? `http://${config.LOCAL_API_URL}`
    : `https://${config.API_URL}`;

export const getNFT = async (id) => {
  try {
    const { data } = await axios.get(`${basePath}/api/nft?id=${id}`);
    //  console.log("hum", { data });
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getNFTs = async (query) => {
  const res = await fetch(`${basePath}/api/nfts?${json2query(query)}`);
  const data = await res.json();
  return data;
};

export const getFilters = async (query) => {
  const res = await fetch(`${basePath}/api/filters?${json2query(query)}`);
  const data = await res.json();
  return data;
};

export const getNFTInfo = async (id) => {
  const res = await fetch(
    `https://ipfs.io/ipfs/QmSawZEASXSak5HrhxrKH5YH2fBmshZE3gkU6zxBcBuSm7/${id}.json`
  );
  const data = await res.json();
  return data;
};


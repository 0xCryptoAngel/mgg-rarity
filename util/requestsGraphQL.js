import { config } from "../config";
import { request, gql, GraphQLClient } from "graphql-request";

const OBJKT_API_URL = `https://data.objkt.com/v2/graphql`;

const graphQLClient = new GraphQLClient(OBJKT_API_URL, {
  headers: {},
});

const graphQlClient = new GraphQLClient(OBJKT_API_URL, { headers: {} });

export let allThePrices = [];
export let firstQuery = true;

export const changeFirstQueryState = function () {
  firstQuery = false;
};

export const getPriceV2 = async (price, firstloop) => {
  let query = gql`
         query MyQuery {
  listing(where: {fa_contract: {_eq: "${config.COLLECTION_CONTRACT}"}, status: {_eq: "active"}, price: {_gt: "${price}"}}, order_by: {price: asc}) {
    fa_contract
    amount
    price
    token {
      name
      token_id
      display_uri
      holders {
        holder_address
      }
    }
    status
    seller_address
  }
} 
`;

  const result = await graphQlClient.request(query);

  let newprice = price;

  let finalList = [];
  result.listing.map(function (aList) {
    if (
      aList.seller_address ==
      aList.token.holders[aList.token.holders.length - 1].holder_address
    ) {
      const list = {};
      list.id = aList.token.token_id;
      list.price = aList.price / 1000000.0;
      newprice = aList.price;
      finalList.push(list);
    }
  });

  if (result.listing.length == 500) {
    const resultFromLoop = await getPriceV2(newprice, false);
    finalList = finalList.concat(resultFromLoop);
  }
  if (firstloop) {
    allThePrices = finalList;
  }

  return finalList;
};

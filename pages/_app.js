import 'tailwindcss/tailwind.css'
import { getPriceV2 } from "../util/requestsGraphQL.js";

function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

export const allPrices = setInterval(()=>  getPriceV2(0, true), 60*5*1000);


export default MyApp

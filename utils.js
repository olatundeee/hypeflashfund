const axios = require('axios')

async function retrieveLatestEthPrice() {
  /*const resp = await axios({
    url: 'https://api.binance.com/api/v3/ticker/price',
    params: {
      symbol: 'ETHUSDT'
    },
    method: 'get'
  })

  return resp.data.price*/
  
  const base = "https://api.coingecko.com/api/v3";

  const getTokenPrice = await axios.get(
    `${base}/simple/price?ids=${token}&vs_currencies=usd`
  );

  const tokenPrice = getTokenPrice.data.ethereum.usd;

  return tokenPrice;
}

module.exports = {
  retrieveLatestEthPrice
};
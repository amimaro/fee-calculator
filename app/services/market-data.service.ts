export const getMarketData = async () => {
  const r = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&ids=matic-network,ethereum"
  );
  return await r.json();
};

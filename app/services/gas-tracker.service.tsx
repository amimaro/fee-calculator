export const getGasTrack = async () => {
  const ethereumGasTrack = await fetch(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.ETHERSCAN_API_KEY}`
  );
  const polygonGasTrack = await fetch(
    `https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=${process.env.POLYGONSCAN_API_KEY}`
  );
  return {
    ethereum: (await ethereumGasTrack.json()).result,
    polygon: (await polygonGasTrack.json()).result,
  };
};

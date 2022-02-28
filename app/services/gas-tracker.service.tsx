export const getGasTrack = async () => {
  const ethereumGasTrack = await fetch(
    "https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=PCCB2YEAI5529APMX36Z6XW95K2D9WS36F"
  );
  const polygonGasTrack = await fetch(
    "https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=GX3BXKG4YWZBNHESGVVA93D46ME2AWZ5TR"
  );
  return {
    ethereum: (await ethereumGasTrack.json()).result,
    polygon: (await polygonGasTrack.json()).result,
  };
};

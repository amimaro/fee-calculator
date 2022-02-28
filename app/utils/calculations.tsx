export const calculateDeployment = (
  gasEstimation: string,
  gasPrice: number,
  currencyPrice: number
): string => {
  if (gasEstimation === "") return "";
  const _gasEstimation = parseInt(gasEstimation.replace(/,/g, ""));
  return (_gasEstimation * (gasPrice / 10 ** 9) * currencyPrice).toFixed(2);
};

export const validateGasInput = (gas: string) => {
  const pattern = /^[0-9,]*$/g;
  return gas.match(pattern) !== null;
};

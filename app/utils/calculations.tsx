export const calculateDeployment = (
  gasEstimation: string,
  gasPrice: number,
  coinPrice: number
): string => {
  if (gasEstimation === "") return "";
  const _gasEstimation = parseInt(gasEstimation.replace(/,/g, ""));
  return (_gasEstimation * (gasPrice / 10 ** 9) * coinPrice).toFixed(2);
};

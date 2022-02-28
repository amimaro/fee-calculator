import { Box, Card, CardContent, Typography } from "@mui/material";
import { calculateDeployment, validateGasInput } from "~/utils/calculations";

export const AppGasPrice = ({
  gasTrack,
  gasEstimation,
  currencyPrice,
}: any) => {
  const isValidGasEstimation =
    gasEstimation.length > 0 && validateGasInput(gasEstimation);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Card sx={{ width: 150, m: 1 }} variant="outlined">
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div">
              Low
            </Typography>
            <Typography variant="h6" component="div" color="success.main">
              {gasTrack.SafeGasPrice} gwei
            </Typography>
            {isValidGasEstimation && (
              <Typography variant="h6" component="div" color="success.main">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.SafeGasPrice),
                  currencyPrice
                )}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ width: 150, m: 1 }} variant="outlined">
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div">
              Average
            </Typography>
            <Typography variant="h6" component="div" color="info.main">
              {gasTrack.ProposeGasPrice} gwei
            </Typography>
            {isValidGasEstimation && (
              <Typography variant="h6" component="div" color="info.main">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.ProposeGasPrice),
                  currencyPrice
                )}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ width: 150, m: 1 }} variant="outlined">
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div">
              High
            </Typography>
            <Typography variant="h6" component="div" color="error">
              {gasTrack.FastGasPrice} gwei
            </Typography>
            {isValidGasEstimation && (
              <Typography variant="h6" component="div" color="error">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.FastGasPrice),
                  currencyPrice
                )}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

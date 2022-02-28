import { Box, Card, CardContent, Typography } from "@mui/material";
import { calculateDeployment } from "~/utils/calculations";

export const AppGasPrice = ({ gasTrack, coinPrice, gasEstimation }: any) => {
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
            {gasEstimation.length > 0 && (
              <Typography variant="h6" component="div" color="success.main">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.SafeGasPrice),
                  coinPrice
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
            {gasEstimation.length > 0 && (
              <Typography variant="h6" component="div" color="info.main">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.ProposeGasPrice),
                  coinPrice
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
            {gasEstimation.length > 0 && (
              <Typography variant="h6" component="div" color="error">
                $
                {calculateDeployment(
                  gasEstimation,
                  parseFloat(gasTrack.FastGasPrice),
                  coinPrice
                )}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

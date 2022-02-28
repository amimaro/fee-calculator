import { Box, Card, CardContent, Typography } from "@mui/material";

export const AppGasPrice = ({ gasTrack }: any) => {
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
            <Typography variant="caption" component="div">
              $1.94
            </Typography>
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
            <Typography variant="caption" component="div">
              $1.94
            </Typography>
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
            <Typography variant="caption" component="div">
              $1.94
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

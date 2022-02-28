import { Box, Card, CardContent, Typography } from "@mui/material";

export const AppDeployCost = ({}: any) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: '100%', m: 1 }} variant="outlined">
        <CardContent>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" component="div">
              Deploy Cost: $1.94
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

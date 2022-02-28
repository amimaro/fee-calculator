import { Box, Card, CardContent, useMediaQuery, useTheme } from "@mui/material";

export const AppNetwork = ({ children }: any) => {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ width: isUpSm ? "50%" : "100%" }}>
      <Card sx={{ m: 1,  boxShadow: 2 }} variant="outlined">
        <CardContent>{children}</CardContent>
      </Card>
    </Box>
  );
};

import { Box, useMediaQuery, useTheme } from "@mui/material";

export const AppNetworkWrapper = ({ children }: any) => {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isUpSm ? "row" : "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
};

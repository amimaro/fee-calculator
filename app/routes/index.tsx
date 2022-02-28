import { LoaderFunction, useLoaderData } from "remix";
import { getGasTrack } from "~/services/gas-tracker.service";
import { getMarketData } from "~/services/market-data.service";
import { AppHeader } from "~/components/AppHeader";
import {
  Box,
  Card,
  CardContent,
  FilledInput,
  FormControl,
  InputLabel,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AppGasPrice } from "~/components/AppGasPrice";
import { AppNetworkWrapper } from "~/components/AppNetworkWrapper";
import { AppNetwork } from "~/components/AppNetwork";
import { AppDeployCost } from "~/components/AppDeployCost";

// export const loader: LoaderFunction = async () => {
//   const market = await getMarketData();
//   const gasTrack = await getGasTrack();
//   return {
//     ethPrice: market[0].current_price,
//     maticPrice: market[1].current_price,
//     gasTrack,
//   };
// };

export default function Index() {
  const data = {
    ethPrice: 2638.42,
    maticPrice: 1.47,
    gasTrack: {
      ethereum: {
        LastBlock: "14293917",
        SafeGasPrice: "43",
        ProposeGasPrice: "44",
        FastGasPrice: "46",
        suggestBaseFee: "42.71176625",
        gasUsedRatio:
          "0.281619996178663,0.288661591373509,0.17301922102736,0.999942701302555,0.956404868722434",
      },
      polygon: {
        LastBlock: "25416836",
        SafeGasPrice: "31",
        ProposeGasPrice: "38.1",
        FastGasPrice: "38.6",
        suggestBaseFee: "0.000000015",
        gasUsedRatio:
          "0.1079824,0.1878007,0.224546733333333,0.313471433333333,0.131253",
        UsdPrice: "1.47",
      },
    },
  };

  console.log(data);
  const [gasEstimation, setGasEstimation] = useState("4,541,091");

  const validateGasInput = (gas: string) => {
    const pattern = /^[0-9,]*$/g;
    return gas.match(pattern) !== null;
  };

  const parseGasEstimation = (gas: string) => {
    return parseInt(gasEstimation.replace(/[,]/g, ""));
  };

  const handleGasEstimationChange = (event: any) => {
    setGasEstimation(event.target.value);
  };

  useEffect(() => {
    if (!validateGasInput(gasEstimation)) {
      return;
    }
    const parsedGasEstimation = parseGasEstimation(gasEstimation);
  });

  return (
    <>
      <AppHeader />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          p: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl variant="filled" error={!validateGasInput(gasEstimation)}>
          <InputLabel htmlFor="gas-estimation">Gas Estimation</InputLabel>
          <FilledInput
            id="gas-estimation"
            value={gasEstimation}
            onChange={handleGasEstimationChange}
            placeholder="Gas Estimation"
          />
        </FormControl>
      </Box>

      <AppNetworkWrapper>
        <AppNetwork>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", mb: 1 }}
          >
            <Link
              href="https://etherscan.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ethereum Mainnet
            </Link>
          </Typography>
          <AppGasPrice gasTrack={data.gasTrack.ethereum} />
          <AppDeployCost />
        </AppNetwork>
        <AppNetwork>
          <Typography
            variant="h5"
            component="div"
            sx={{ textAlign: "center", mb: 1 }}
          >
            <Link
              href="https://polygonscan.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Polygon Mainnet
            </Link>
          </Typography>
          <AppGasPrice gasTrack={data.gasTrack.polygon} />
          <AppDeployCost />
        </AppNetwork>
      </AppNetworkWrapper>
    </>
  );
}

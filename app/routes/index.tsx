import { LoaderFunction, useLoaderData } from "remix";
import { getGasTrack } from "~/services/gas-tracker.service";
import { getMarketData } from "~/services/market-data.service";
import { AppHeader } from "~/components/AppHeader";
import {
  Box,
  FilledInput,
  FormControl,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AppGasPrice } from "~/components/AppGasPrice";
import { AppNetworkWrapper } from "~/components/AppNetworkWrapper";
import { AppNetwork } from "~/components/AppNetwork";
import { validateGasInput } from "~/utils/calculations";

export const loader: LoaderFunction = async () => {
  const market = await getMarketData();
  const gasTrack = await getGasTrack();
  return {
    ethPrice: market[0].current_price,
    maticPrice: market[1].current_price,
    gasTrack,
  };
};

export default function Index() {
  const data = useLoaderData();
  const [gasEstimation, setGasEstimation] = useState("");

  const handleGasEstimationChange = (event: any) => {
    const val = event.target.value;
    if (!validateGasInput(val)) return;
    if (val.replace(/,/g, "").length > 8) return;
    setGasEstimation(val);
  };

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
        onSubmit={(e: { preventDefault: () => void }) => {
          e.preventDefault();
        }}
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
            </Link>{" "}
            (${data.ethPrice})
          </Typography>
          <AppGasPrice
            gasTrack={data.gasTrack.ethereum}
            gasEstimation={gasEstimation}
            currencyPrice={data.ethPrice}
          />
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
            </Link>{" "}
            (${data.maticPrice})
          </Typography>
          <AppGasPrice
            gasTrack={data.gasTrack.polygon}
            gasEstimation={gasEstimation}
            currencyPrice={data.maticPrice}
          />
        </AppNetwork>
      </AppNetworkWrapper>
      <Box
        sx={{
          pt: 10,
          textAlign: "center",
          position: "sticky",
          top: "100vh",
          mb: 1,
        }}
      >
        <Typography variant="h5" component="div">
          What other resources can we put here?
        </Typography>
        <Link
          href="https://github.com/amimaro/fee-calculator/issues"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Issue
        </Link>
      </Box>
    </>
  );
}

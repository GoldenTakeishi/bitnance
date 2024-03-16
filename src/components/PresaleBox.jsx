import { Box, Divider, InputAdornment, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  bnbLogo,
  usdtLogo,
  cardLogo,
  inputCenterLogo,
  tokenLogo,
} from "./SmallComponents/Images";
import TimerCountDown from "./SmallComponents/Timer";
import {
  StyledButtonTwo,
  StyledInput,
  ToastNotify,
} from "./SmallComponents/AppComponents";
import { AppContext } from "../utils";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { preSaleAddress } from "../ConnectivityAssets/environment";
import presaleAbi from "../ConnectivityAssets/preSaleAbi.json";
import {
  preSaleReadFunction,
  preSaleWriteFunction,
  usdtReadFunction,
  usdtWriteFunction,
} from "../ConnectivityAssets/hooks";
import { encodeFunctionData, formatUnits, parseUnits } from "viem";
import Loading from "./SmallComponents/loading";
import { v4 as uuidv4 } from "uuid";
import { Buffer } from "buffer/";
import WertWidget from "@wert-io/widget-initializer";
import { signSmartContractData } from "@wert-io/widget-sc-signer";
import CommingSoon from "./SmallComponents/CommingSoon";

function PresaleBox() {
  window.Buffer = Buffer;
  const { account } = useContext(AppContext);
  const { open } = useWeb3Modal();
  const [inputSrc, setInputSrc] = useState("");
  const [buyWith, setBuyWith] = useState("BNB");
  const [amount, setAmount] = useState("");
  const [commingSoonDilouge, setCommingSoonDilouge] = useState(false);
  const [receiveToken, setReceiveToken] = useState("");
  const [tokenPerEth, setTokenPerEth] = useState(0);
  const [tokenPerUSDT, setTokenPerUSDT] = useState(0);
  const [totalSoldTokens, settotalSoldTokens] = useState(0);
  const [totalRaised, settotalRaised] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [isClaimEnabled, setisClaimEnabled] = useState(false);
  const [callFunction, setCallFunction] = useState(true);
  const [loading, setloading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const showAlert = (message, severity = "error") => {
    setAlertState({
      open: true,
      message,
      severity,
    });
  };

  /// wert configration start here
  useEffect(() => {
    if (account) {
      (async () => {
        try {
          let amountToBuy = amount && +amount > 0 ? +amount : 1;
          const sc_input_data = encodeFunctionData({
            abi: presaleAbi,
            functionName: "buyWIthCard",
            args: [],
            value: parseUnits(amountToBuy.toString(), 6).toString(),
          });
          setInputSrc(sc_input_data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [account, amount]);

  const privateKey =
    "0x1c16a952222e50ed79c078f4455454204c2b30eb3c384d08743a3f56afc22ac7";

  const signedData = signSmartContractData(
    {
      address: account,
      commodity: "USDT",
      network: "bsc",
      commodity_amount: amount ? parseFloat(amount) : 0,
      sc_address: preSaleAddress,
      sc_input_data: inputSrc,
    },
    privateKey
  );
  const otherWidgetOptions = {
    partner_id: "01HRP8FP2160RRN6WV3TAQXMZH",
    widgetLayoutMode: "Modal",
    click_id: uuidv4(), // unique id of purhase in your system
    origin: "https://widget.wert.io", // this option needed only for this example to work
    extra: {
      item_info: {
        author: "Bit Nance",
        image_url:
          "https://photos.pinksale.finance/file/pinksale-logo-upload/1710296072926-3cf4b4f755e324549d433137feae5513.png",
        name: "Token Payment",
        category: "Bit Nance",
      },
    },
    listeners: {
      loaded: () => setCommingSoonDilouge(false),
    },
  };

  const wertWidget = new WertWidget({
    ...signedData,
    ...otherWidgetOptions,
  });

  /// wert configration ends here
  const toLocalFormat = (val) => {
    return val?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const newValue = input?.replace(/[^0-9.]/g, "");
    setAmount(newValue);
  };
  useEffect(() => {
    const calculatorUSDT = async () => {
      try {
        if (buyWith === "USDT" || buyWith === "CARD") {
          let tokenUSDT = +tokenPerUSDT * +amount;
          setReceiveToken(tokenUSDT?.toFixed(2));
        } else {
          let tokenETH = +tokenPerEth * +amount;
          setReceiveToken(tokenETH?.toFixed(2));
        }
      } catch (error) {}
    };
    if (+amount > 0) {
      calculatorUSDT();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, buyWith]);

  const initVoidSigner = async () => {
    try {
      const usdtToToken = await preSaleReadFunction("usdtToToken", [
        "1000000000000000000",
      ]);
      setTokenPerUSDT(+formatUnits(usdtToToken?.toString(), 18));
      const ethToToken = await preSaleReadFunction("nativeToToken", [
        "1000000000000000000",
      ]);
      setTokenPerEth(+formatUnits(ethToToken?.toString(), 18));
      let sold = await preSaleReadFunction("soldToken");
      let statusPresale = await preSaleReadFunction("isPresaleEnded");
      setisClaimEnabled(statusPresale);
      sold = +parseFloat(+formatUnits(sold?.toString(), 18)).toFixed(0);
      settotalSoldTokens(toLocalFormat(sold));
      // const contractBal = await usdtReadFunction("balanceOf", [preSaleAddress]);
      const raisedUSDT = await preSaleReadFunction("amountRaisedOverall");
      let total = +parseFloat(+formatUnits(raisedUSDT?.toString(), 18)).toFixed(
        0
      );
      settotalRaised(toLocalFormat(total));
      let progress = (sold / 4500000) * 100;
      setProgressBar(progress);
      setCallFunction(false);
    } catch (error) {
      setCallFunction(false);
      console.log(error, "ERROR VoidSigner Data");
    }
  };
  useEffect(() => {
    initVoidSigner();
  }, [callFunction]);

  const buyHandler = async () => {
    if (!account) {
      return showAlert("Error! Please connect your wallet.");
    }
    if (!amount || amount <= 0) {
      return showAlert("Error! Please enter amount to buy.");
    }
    try {
      setloading(true);

      if (buyWith === "USDT") {
        const usdtDecimal = await usdtReadFunction("decimals");
        await usdtWriteFunction("approve", [
          preSaleAddress,
          parseUnits(amount.toString(), +usdtDecimal?.toString()).toString(),
        ]);
        await preSaleWriteFunction("buyTokenUSDT", [
          parseUnits(amount.toString(), +usdtDecimal?.toString()).toString(),
        ]);
      } else if (buyWith === "CARD") {
        setCommingSoonDilouge(true);
        wertWidget.open();
      } else {
        await preSaleWriteFunction(
          "buyToken",
          [],
          parseUnits(amount.toString(), 18).toString()
        );
      }
      setAmount("");
      setReceiveToken(0);
      setCallFunction(true);
      setloading(false);
      if (buyWith !== "CARD") {
        showAlert("Success! Transaction Confirmed", "success");
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      showAlert(error?.shortMessage);
    }
  };
  const claimHandler = async () => {
    if (account) {
      try {
        setloading(true);
        await preSaleWriteFunction("claimTokens");
        setloading(false);
        setAlertState({
          open: true,
          message: `Transection Completed!`,
          severity: "success",
        });
      } catch (error) {
        setloading(false);
        setAlertState({
          open: true,
          message: error?.shortMessage,
          severity: "error",
        });
      }
    } else {
      setAlertState({
        open: true,
        message: `Error! Please connect your wallet.`,
        severity: "error",
      });
    }
  };
  return (
    <Box className="borderImg">
      <CommingSoon open={commingSoonDilouge} setOpen={setCommingSoonDilouge} />
      <Loading loading={loading} />
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Stack p={{ xs: 2, md: 3 }} gap={{ xs: 2, md: 3 }}>
        <Box
          className="borderImg"
          sx={{
            py: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "29px",
              color: "#F2F2F2",
              textAlign: "center",
            }}
          >
            BUY{" "}
            <span
              style={{
                color: "#F0B90B",
              }}
            >
              {" "}
              $BITNANCE
            </span>{" "}
          </Typography>
        </Box>
        <Box>
          <TimerCountDown time={1721135978} />
        </Box>
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: "700",
                fontSize: "12px",
                color: "#ffffff",
              }}
            >
              GOAL
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Proxima Nova",
                fontWeight: "700",
                fontSize: "12px",
                color: "#ffffff",
              }}
            >
              $2,000,000
            </Typography>
          </Stack>
          <Stack
            className="borderImgTwo"
            sx={{
              height: "25px",
              backgroundColor: "#D9D9D90D",
              mt: 0.5,
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <Stack
              height={"100%"}
              alignItems={"start"}
              justifyContent={"center"}
              position={"relative"}
            >
              <Box
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${progressBar}%`,
                  borderRadius: "20px",
                  background:
                    "linear-gradient(270deg, #F0B90B 0%, rgba(240, 185, 11, 0) 100%)",
                  zIndex: 0,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          textAlign={"center"}
          justifyContent={"space-around"}
          py={2}
          className="borderImg"
        >
          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#F0B90B",
                fontFamily: "Proxima Nova",
                fontSize: "10px",
                fontWeight: "700",
              }}
            >
              TOKENS SOLD
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#F2F2F2",
                fontFamily: "Proxima Nova",
                fontSize: "20px",
                fontWeight: "700",
                mt: 1,
              }}
            >
              {totalSoldTokens}
            </Typography>
          </Stack>

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{
              background: "#F0B90B",
              width: "2px",
            }}
          />

          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#F0B90B",
                fontFamily: "Proxima Nova",
                fontSize: "10px",
                fontWeight: "700",
              }}
            >
              $USD RAISED
            </Typography>

            <Typography
              variant="subtitle2"
              sx={{
                color: "#F2F2F2",
                fontFamily: "Proxima Nova",
                fontSize: "20px",
                fontWeight: "700",
                mt: 1,
              }}
            >
              ${totalRaised}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "2px",
              // width: "50%",
              background: "#F0B90B",
              flexGrow: 1,
            }}
          />

          <Typography
            variant="subtitle2"
            sx={{
              fontSize: { xs: "10px", sm: "13px" },
              textAlign: "center",
              fontWeight: "700",
              color: "#ffff",
              fontFamily: "Montserrat",
              mx: 2,
              // width: "120px",
            }}
          >
            BUY
          </Typography>

          <Box
            sx={{
              height: "2px",
              flexGrow: 1,
              // width: "50%",
              background: "#F0B90B",
            }}
          />
        </Stack>
        <Stack
          className="borderImg"
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            py: 1.5,
            px: { xs: 1, md: 1 },
          }}
        >
          {[
            {
              text: "BNB",
              img: bnbLogo,
            },
            {
              text: "USDT",
              img: usdtLogo,
            },
            {
              text: "CARD",
              img: cardLogo,
            },
          ].map(({ text, img }) => (
            <Stack
              onClick={() => setBuyWith(text)}
              className={buyWith === text ? "borderImg" : ""}
              key={text}
              sx={{
                cursor: "pointer",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                // width: xs"100px",

                py: { xs: 1, sm: 2 },
                px: { xs: 2, md: 4 },
                background: buyWith === text ? "#D9D9D90D" : "transparent",
              }}
            >
              <Box component={"img"} alt="" src={img} width="23px" />
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#ffff",
                  fontFamily: "Proxima Nova",
                  fontSize: { xs: "11px", sm: "13px" },
                  fontWeight: "700",
                }}
              >
                {text}
              </Typography>
            </Stack>
          ))}
        </Stack>{" "}
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack gap={0.5} pr={2}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "11px", sm: "13px" },
                fontFamily: "Proxima Nova",
                fontWeight: "700",
                ml: 1,
              }}
            >
              YOU PAY
            </Typography>
            <Box>
              <StyledInput
                type="text"
                placeholder="0.00"
                value={amount}
                onChange={handleInputChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Box
                        component={"img"}
                        alt=""
                        src={
                          buyWith === "BNB"
                            ? bnbLogo
                            : buyWith === "USDT"
                            ? usdtLogo
                            : cardLogo
                        }
                        sx={{
                          width: { xs: "23px", md: "25px" },
                          marginRight: { xs: "6px", md: "8px" },
                          marginLeft: { xs: "-10px", md: "0px" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>
          <Box
            component={"img"}
            alt=""
            src={inputCenterLogo}
            width="40px"
            height={"40px"}
          />
          <Stack gap={0.5} pl={2}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "11px", sm: "13px" },
                fontFamily: "Proxima Nova",
                fontWeight: "700",
                ml: 1,
              }}
            >
              YOU GET
            </Typography>
            <Box>
              <StyledInput
                type="text"
                placeholder="0.00"
                value={receiveToken}
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="end">
                      <Box
                        component={"img"}
                        alt=""
                        src={tokenLogo}
                        sx={{
                          width: { xs: "23px", md: "25px" },
                          marginRight: { xs: "6px", md: "8px" },
                          marginLeft: { xs: "-10px", md: "0px" },
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Stack>
        </Stack>
        <Stack>
          {isClaimEnabled ? (
            <StyledButtonTwo onClick={async () => claimHandler()}>
              Claim
            </StyledButtonTwo>
          ) : (
            <StyledButtonTwo
              onClick={async () => (account ? buyHandler() : await open())}
            >
              {" "}
              {account ? "BUY" : "CONNECT WALLET"}
            </StyledButtonTwo>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default PresaleBox;

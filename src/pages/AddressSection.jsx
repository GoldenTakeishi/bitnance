import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  bscScanLogo,
  copyIcon,
  metaMaskIcon,
  twiiterIcon,
  tiktokIcon,
  telegramIcon,
  radditIcon,
  instagramIcon,
  discordIcon,
  dividerImg,
} from "../components/SmallComponents/Images";
import { ToastNotify } from "../components/SmallComponents/AppComponents";

export const socialArray = [
  {
    img: twiiterIcon,
    link: "https://twitter.com/BitnanceToken",
  },
  {
    img: telegramIcon,
    link: "https://t.me/bitnancetoken",
  },
  {
    img: radditIcon,
    link: "https://reddit.com/r/bitnance",
  },
];

function AddressSection() {
  const copyAddress = "to be determined";
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

  const copyAddressHandler = () => {
    navigator.clipboard.writeText(copyAddress);
    showAlert("Address Copied", "success");
  };
  return (
    <Box mb={4} id="contact">
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container maxWidth="xl">
        <Stack
          flexDirection={{ xs: "coloumn", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            background: "#F0B90B",
            py: 2,
            my: 4,
            px: 2,
          }}
        >
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"center"}
            gap={1}
          >
            <IconButton onClick={copyAddressHandler}>
              <Box
                component={"img"}
                alt=""
                src={copyIcon}
                sx={{
                  width: "25px",
                }}
              />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#282828",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              {copyAddress}
            </Typography>
            <Stack flexDirection={"row"}>
              <IconButton>
                <Box
                  component={"img"}
                  alt=""
                  src={bscScanLogo}
                  sx={{
                    width: "25px",
                  }}
                />
              </IconButton>
              <IconButton>
                <Box
                  component={"img"}
                  alt=""
                  src={metaMaskIcon}
                  sx={{
                    width: "25px",
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
          <Stack
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={0.5}
          >
            {socialArray?.map(({ img, link }) => (
              <IconButton key={img}>
                <Box
                  component={"img"}
                  alt=""
                  src={img}
                  sx={{
                    width: "25px",
                  }}
                />
              </IconButton>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Container maxWidth="md">
            <Grid
              container
              spacing={{ xs: 3, sm: 4 }}
              justifyContent={"center"}
            >
              {[
                {
                  title: "Total Supply",
                  value: "10,500,000",
                },
                {
                  title: "Root (presale & dex)",
                  value: "7,750,000",
                },
                {
                  title: "Exchanges",
                  value: "2,750,000",
                },
              ].map(({ title, value }) => (
                <Grid item xs={12} sm={6} md={4} key={title}>
                  <Stack
                    sx={{
                      border: "2px solid #282828",
                      py: 3,
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "Proxima Nova",
                        color: "#FFFFFF",
                        fontSize: "13px",
                        lineHeight: "15px",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        mt: 1,
                        fontFamily: "Montserrat",
                        color: "#F0B90B",
                        fontSize: "24px",
                        lineHeight: "30px",
                        fontWeight: "800",
                        textAlign: "center",
                      }}
                    >
                      {value}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={5}
        >
          <Box component={"img"} alt="" src={dividerImg} width={"180px"} />
        </Stack>
      </Container>
    </Box>
  );
}

export default AddressSection;

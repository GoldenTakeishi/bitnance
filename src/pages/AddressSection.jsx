import React, { useState } from "react";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import {
  bscScanLogo,
  copyIcon,
  metaMaskIcon,
  twiiterIcon,
  telegramIcon,
  radditIcon,
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
    link: "https://reddit.com/r/bitnancetoken",
  },
];

function AddressSection() {
  const copyAddress = "coming soon";
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
            {socialArray.map(({ img, link }) => (
              <IconButton key={img} onClick={() => window.open(link, '_blank')}>
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
        {/* Other components and JSX here */}
      </Container>
    </Box>
  );
}

export default AddressSection;

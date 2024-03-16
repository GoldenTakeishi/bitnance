import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { dividerImg } from "../components/SmallComponents/Images";

function Toknomics() {
  const toxnomicsArray = [
    {
      text: "Supply",
      value: "10,500,000",
      text1: "Total Supply",
      para: " The token launches with a low, finite supply of 10.5 million coins which is done by design to increase its demand and potential and to help control and stabilize its ongoing growth.",
    },
    {
      text: "Root (sale & liquidity)",
      value: "7,750,000",
      text1: "Root (sale & liquidity)",
      para: "The project will put 7,750,000 tokens up for presale and liquidity at launch",
    },
    {
      text: "Exchanges",
      value: "2,750,000",
      text1: "Exchanges",
      para: "2,750,000 reserved for sale on the centralized exchanges.",
    },
  ];
  return (
    <Box id="tokenomics">
      <Container maxWidth="xl">
        <Typography
          variant="h5"
          mb={1}
          sx={{
            textAlign: "center",
            fontFamily: "Proxima Nova",
            color: "#F0B90B",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          Tokenomics of BitNance Token:
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Montserrat",
            textAlign: "center",
            color: "#F2F2F2",
            fontSize: { xs: "18px", md: "26px" },
            fontWeight: "700",
          }}
        >
          Balancing Scarcity and Accessibility
        </Typography>

        <Typography
          mt={2}
          variant="body1"
          sx={{
            fontFamily: "Proxima Nova",
            color: "#A3A3A3",
            fontSize: "15px",
            fontWeight: "400",
            textAlign: "center",
            px: { xs: 0, md: 10 },
          }}
        >
          The tokenomics of $BTN was mindfully made to align with the core
          beliefs, concepts, and principles of modern decentralization, and all
          BitNance Token holders have equal chance to thrive and prosper given
          the earning and distribution measures in place. Let us take a close
          peek at supply and distribution limits.
        </Typography>
        <Stack my={3}>
          <Container maxWidth="md">
            <Stack alignItems={"center"}>
              {toxnomicsArray?.map(({ text, text1, para, value }) => (
                <React.Fragment key={text}>
                  <Stack width={{ xs: "100%", md: "80%" }} mt={3}>
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
                        {text}
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
                        {value}
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
                            width: `${40}%`,
                            borderRadius: "20px",
                            background:
                              "linear-gradient(90deg, rgba(4, 3, 3, 0) 0%, #F0B90B 100%)",
                            zIndex: 0,
                          }}
                        />
                      </Stack>
                    </Stack>
                  </Stack>
                  <Typography
                    mt={3}
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#ffffff",
                      fontSize: "14px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    {text1}
                  </Typography>

                  <Typography
                    mt={1}
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#A3A3A3",
                      fontSize: "15px",
                      fontWeight: "400",
                      textAlign: "center",
                      px: { xs: 0, md: 4 },
                    }}
                  >
                    {para}
                  </Typography>
                </React.Fragment>
              ))}
            </Stack>
          </Container>
        </Stack>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          my={8}
        >
          <Box component={"img"} alt="" src={dividerImg} width={"180px"} />
        </Stack>
      </Container>
    </Box>
  );
}

export default Toknomics;

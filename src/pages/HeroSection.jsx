import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  heroSectionBg,
  heroSectionBgMobile,
} from "../components/SmallComponents/Images";
import Header from "../components/Header";
import PresaleBox from "../components/PresaleBox";

function HeroSection() {
  const matches = useMediaQuery("(max-width:1000px)");
  return (
    <>
      <Box
        sx={{
          background: {
            xs: `url(${heroSectionBgMobile}) no-repeat center`,
            sm: `url(${heroSectionBg}) no-repeat center`,
          },
          backgroundSize: "100% 100%",
          pb: 12,
          overflow: "hidden",
        }}
      >
        <Header />

        <Container maxWidth="xl">
          <Box mt={{ xs: 1, md: 2 }} id="presale">
            <Grid
              container
              spacing={{ xs: 0, md: 4 }}
              direction={{
                xs: "column-reverse",
                md: matches ? "column-reverse" : "row",
              }}
              justifyContent={"center"}
            >
              <Grid
                item
                xs={12}
                md={6}
                xl={7}
                lg={7}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                }}
              >
                <Box mt={{ xs: 4, md: 0 }}>
                  <Typography
                    variant="h5"
                    mb={1}
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#F0B90B",
                      fontSize: "14px",
                      fontWeight: "700",
                    }}
                  >
                    BitNance Token ($BTN):
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Montserrat",
                      color: "#F2F2F2",
                      fontSize: { xs: "20px", md: "26px" },
                      fontWeight: "700",
                    }}
                  >
                    Revolutionizing Value Storage <br /> on Binance Smart Chain
                  </Typography>

                  <Stack my={3}>
                    <Box
                      sx={{
                        height: "2px",
                        width: "80px",
                        backgroundColor: "#F0B90B",
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#F2F2F2",
                      fontSize: "15px",
                      fontWeight: "400",
                      pr: { xs: 0, md: 4 },
                    }}
                  >
                    BitNance Token ($BTN) is a modern take on Bitcoin yet backed
                    by improved security and community driven support on BNB Chain, making it
                    a store-of-value crypto unlike the rest.
                  </Typography>
                  <Stack flexDirection={"row"} my={2} gap={2}>
                    <Button
                      sx={{
                        color: "#040303",
                        background: "#F2F2F2",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        fontFamily: "Proxima Nova",
                        borderRadius: "8px",
                        fontWeight: "700",
                        height: "40px",
                        width: "100px",
                        "&.Mui-disabled": {
                          color: "#979EA7",
                        },
                        "&:hover": {
                          background: "#F2F2F2",
                        },
                      }}
                    component="a"
                    href="https://news.google.com/search?for=bitnance&hl=en-US&gl=US&ceid=US%3Aen" // Change the href to your desired URL
                    >
                      White Paper
                    </Button>
                    <Button
                      sx={{
                        color: "#F2F2F2",
                        background: "#F0B90B",
                        fontSize: "14px",
                        textTransform: "capitalize",
                        fontFamily: "Proxima Nova",
                        borderRadius: "8px",
                        fontWeight: "700",
                        height: "40px",
                        width: "80px",
                        "&.Mui-disabled": {
                          color: "#979EA7",
                        },
                        "&:hover": {
                          background: "#F0B90B",
                        },
                      }}
                    component="a"
                    href="https://news.google.com/search?for=bitnance&hl=en-US&gl=US&ceid=US%3Aen" // Change the href to your desired URL
                    >
                    Latest News
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} xl={5} lg={5}>
                <PresaleBox />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HeroSection;

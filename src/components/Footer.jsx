import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { logo, moveTopIcon } from "./SmallComponents/Images";
import { socialArray } from "../pages/AddressSection";
import { HashLink } from "react-router-hash-link";

const footerArray = [
  {
    head: "DISCOVER",
    textArray: [
      {
        name: "Home",
        link: "/#home",
      },
      {
        name: "Introduction",
        link: "/#introduction",
      },
      {
        name: "Road Map",
        link: "/#roadmap",
      },
      {
        name: "Community",
        link: "/#community",
      },
    ],
  },
  {
    head: "ABOUT",
    textArray: [
      {
        name: "WhitePaper",
        link: "/BitNanceWhitepaper.pdf",
      },
      {
        name: "Latest News",
        link: "https://news.google.com/search?for=bitnance&hl=en-US&gl=US&ceid=US%3Aen",
      },
    ],
  },
  {
    head: "CONTACT US",
    textArray: [
      {
        name: "Support",
        link: "https://t.me/bitnancetoken",
      },
    ],
  },
];

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        pt: 6,
        pb: 2,
        borderTop: "2px solid #282828",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box component={"img"} alt="" src={logo} width={"180px"} />
              <Typography
                mt={2}
                variant="body1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#A3A3A3",
                  fontSize: "13px",
                  lineHeight: "15px",
                  fontWeight: "400",
                }}
              >
                $BTN is a revolutionary crypto dubbed the 'Bitcoin Successor' by
                those able see the potential in its community-empowered model
                and cutting-edge, fully decentralized network that lets
                people/investors trade, invest, and transact with no central
                authority; the influence of change in the hands of all holders!
                <br />
                <br />
                BitNance Token is not only a crypto and digital asset but a
                store of value and barrier against inflation, it is also a
                movement towards a better future, in which people can invest and
                transact quickly without fees.
              </Typography>
              <Stack flexDirection={"row"} gap={1} mt={2} alignItems={"center"}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Proxima Nova",
                    color: "#ffffff",
                    fontSize: "13px",
                    lineHeight: "15px",
                    fontWeight: "700",
                    textAlign: "center",
                    mr: 1,
                  }}
                >
                  Follow us on
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    flexGrow: 1,
                    background: "#282828",
                  }}
                />
              </Stack>
            </Box>
          </Grid>
          {footerArray.map(({ head, textArray }, i) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={2.66}
              key={head}
              sx={{
                display: "flex",
                justifyContent: { xs: "start", md: "center" },
              }}
            >
              <Box mt={2} pl={{ xs: 1, md: 0 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Proxima Nova",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    mb: 4,
                  }}
                >
                  {head}
                </Typography>
                {textArray.map(({ name, link }, i) => (
                  <HashLink
                    key={name + i}
                    smooth
                    to={link}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      key={name}
                      variant="subtitle2"
                      sx={{
                        color: "#A3A3A3",
                        fontFamily: "Proxima Nova",
                        fontSize: "13px",
                        fontWeight: "700",
                        lineHeight: "15px",
                        my: 2,
                        cursor: "pointer",
                      }}
                    >
                      {name}
                    </Typography>
                  </HashLink>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack
                alignItems={"center"}
                flexDirection={"row"}
                justifyContent={"center"}
                gap={{ xs: 0, sm: 0.5 }}
                sx={{
                  background: "#F0B90B",
                  borderRadius: "8px",
                  px: 1,
                }}
              >
                {socialArray?.map(({ img, link }, i) => (
                  <IconButton key={img + i}>
                    <Box
                      component={"img"}
                      alt=""
                      src={img}
                      sx={{
                        width: { xs: "20px", sm: "25px" },
                      }}
                    />
                  </IconButton>
                ))}
              </Stack>
              <Stack>
                <HashLink
                  smooth
                  to={"/#home"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      background: "#F0B90B",
                      height: "100%",
                      minWidth: "46px",
                      py: 1,
                      borderRadius: "8px",
                      "&:hover": {
                        background: "#F0B90B",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      alt=""
                      src={moveTopIcon}
                      sx={{
                        width: { xs: "20px", sm: "25px" },
                      }}
                    />
                  </Button>
                </HashLink>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              flexDirection={"row"}
              justifyContent={{ xs: "center", sm: "end" }}
              gap={{ xs: 3, md: 10 }}
            >
              {[
                "2024 © BITNANCE. ALL RIGHTS RESERVED.",
                "TERMS",
                "CONDITIONS",
              ].map((text) => (
                <Typography
                  key={text}
                  variant="subtitle2"
                  sx={{
                    color: "#A3A3A3",
                    fontFamily: "Proxima Nova",
                    fontSize: { xs: "9px", sm: "10px" },
                    fontWeight: "700",
                    lineHeight: "10px",
                    mb: 1,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

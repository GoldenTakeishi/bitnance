import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  dividerImg,
  introCoinImg,
  introCoinImgMobile,
} from "../components/SmallComponents/Images";
import { StyledButtonTwo } from "../components/SmallComponents/AppComponents";

function Introduction() {
  const matches = useMediaQuery("(max-width:650px)");
  return (
    <Box id="introduction">
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent={"center"} my={3}>
          <Grid item xs={12} md={6}>
            <Box>
              <Box
                component={"img"}
                alt=""
                src={matches ? introCoinImgMobile : introCoinImg}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack alignItems={"center"}>
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
                Introduction:
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
                Unveiling BitNance Token ($BTN)
              </Typography>

              <Stack my={3} alignItems={"center"}>
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
                  color: "#A3A3A3",
                  fontSize: "15px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                BitNance Token runs on the Binance Smart Chain and is unlike the
                rest given its community-focused and governance-secured model,
                which places the power in the hands of holders and not project
                founders! $BTN was launched in belief freedom and security are
                the premise of reliable and resilient, digital decentralized
                ecosystems, and is committed with unprecedented focus to
                leveraging blockchain tech to the fullest to make for a store of
                value that truly rivals all others.
                <br />
                <br />
                BitNance Token expands on Binance chain technology and offers a
                fair and distributed, decentralized store of value! It also uses
                an efficient consensus model that relies on randomly picked
                voting; this consensus model lets $BTN be energy efficient and
                resource-optimized, it also makes community participation
                possible and the voice of holders heard!
                <br />
                <br />
                With a supply of only 10.5 million coins the low circulation
                makes BitNance Token a scarce gem among the many inflation-prone
                coins that often have circulating supplies of a hundred million
                or more but BitNance is unlike most as its low supply, and even
                power distribution to holders, makes it leaps ahead of the rest!
                <br />
                <br />
                It is a true, groundbreaking approach to decentralized finance
                with unique value and utility propositions but above all it is a
                new and improved store of value coin that lets each and every
                holder grow together!
              </Typography>
              <Stack my={3}>
              <StyledButtonTwo as="a" href="/WhitePaper.pdf" width="140px">Read WP</StyledButtonTwo>
            </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box component={"img"} alt="" src={dividerImg} width={"180px"} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Introduction;

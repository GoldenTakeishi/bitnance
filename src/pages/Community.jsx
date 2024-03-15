import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { communityBg } from "../components/SmallComponents/Images";

function Community() {
  return (
    <Box id="community">
      <Container maxWidth="xl">
        <Box
          p={1.5}
          className="borderImg"
          sx={{
            background: `url(${communityBg}) no-repeat center`,
            backgroundSize: "100% 100%",
          }}
        >
          <Stack
            py={2}
            px={2}
            className="borderImg"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems={{ xs: "start", md: "center" }}
            gap={{ xs: 2, md: 0 }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F0B90B",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Joining the BitNance Movement
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F2F2F2",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                A Call to Action for Decentralized Finance Advocates
              </Typography>
            </Box>
            <Box>
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
                  width: "150px",
                  "&.Mui-disabled": {
                    color: "#979EA7",
                  },
                  "&:hover": {
                    background: "#F0B90B",
                  },
                }}
              >
                JOIN COMMUNITY
              </Button>
            </Box>
          </Stack>
          <Stack mt={2} pl={{ xs: 2, md: 0 }}>
            {" "}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Proxima Nova",
                color: "#F2F2F2",
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              Take part in a movement towards a future of financial and
              decentralized freedom with BitNance Token, the
              scarcer-than-Bitcoin crypto that lets traders and investors spend
              less on fees so they can keep more profits than Bitcoin allows.
              Adding to this, $BTN only has a third of the number of BTCs
              circulating, and if it reaches its potential as widely expected,
              investors may see generous yields of 1,000% or more!
            </Typography>
            <Typography
              variant="h1"
              sx={{
                mt: 2,
                fontFamily: "Proxima Nova",
                color: "#F0B90B",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              Join the $BTN community to be part of this journey that is set to
              reshape decentralized trading and finance for good!
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Community;

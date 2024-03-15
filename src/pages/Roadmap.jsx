import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { dividerImg } from "../components/SmallComponents/Images";

const phaseTwoArray = [
  "We will mark $BTN token and bring its debut to the financial market with a launch date and countdown timer that will help to raise its sales and liquidity pool early on at release.",
  "We will begin to expand reach to creators, developers, and influencers in the industry who will collaborate with the $BTN token project and publicize it to their large audience.",
  "We will get BitNance Token listed for sale and trade on the largest, most trusted DEXes around to make joining the $BTN family easy and simple for people and investors alike",
  "We will thrust publicity and awareness to the moon and beyond by getting $BTN listed on the largest, most prominent centralized exchanges; a CEX debut that will raise value!",
  "The project will be highly pushed via social networks and influencer audiences to give the token the exposure it needs in the modern world to catapult in value and mass adoption.",
  "Industry leaders, crypto influencers, and marketing professional will collab in an erasetting journey and endeavor to solidify BitNance as the definitive, best store of value around!",
];

const phaseThreeArray = [
  "A slew of alluring benefits will be given to $BTN token holders, like early orders and community-exclusive access to events and special offers not provided by other projects.",
  "Ambitious yet achievable, our market cap goal of one billion dollars will be set and tackled by our large community and driven team of marketing pros that will raise awareness",
  "We shall secure listings on elite, highly traded, Centralized Exchanges to make access to ownership easier, this will also help publicity and enable the market cap milestone to succeed.",
  "From being listed on CEXes to promoted via press releases and publications on some of the most respected outlets around we will push the coin to raise its value and investor appeal.",
  "This holder-driven, community-empowered project will launch innovative DEX projects that make high value and mass adoption possible; making the future of BitNance a bright one!",
];
function Roadmap() {
  return (
    <Box id={"roadmap"} mt={6}>
      <Container maxWidth={"xl"}>
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
          The Roadmap to Decentralized Prosperity:
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
          Future Developments and Ecosystem Growth
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
          $BTN token is a fresh take on Bitcoin with a community-focused
          initiative. It is also a symbol and modern marvel of innovation as its
          unprecedented, SoV potential far exceeds conventional economical
          models, and its low supply and future integrations provide early
          investors promising odds to capitalize!
        </Typography>
        <Grid container mt={4}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "2px solid #282828",
            }}
          >
            <Box p={2}>
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F0B90B",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Phase 1 -{" "}
                <span
                  style={{
                    color: "#282828",
                  }}
                >
                  [ DONE ]
                </span>
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Future Developments and Ecosystem Growth
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#A3A3A3",
                  fontSize: "15px",
                  fontWeight: "400",
                  mt: 3,
                }}
              >
                This phase is complete and marks the creation of a transparent,
                highly secure smart contract for the $BTN token, which builds
                trust/peace of mind for those apart of this movement!
                <br />
                <br />
                The next step of phase one is en route and rolls out in the next
                week, during which, the team behind the scenes will ignite
                awareness and enthusiasm for the coin to millions of people via
                ads and official project channels via social threads/groups on
                Discord, Twitter, Telegram, and Reddit; this will be a robust,
                to-the-masses campaign that thrusts BitNance Token skyward!
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "2px solid #282828",
            }}
          >
            <Box p={2}>
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F0B90B",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Phase 2 -{" "}
                <span
                  style={{
                    color: "#282828",
                  }}
                >
                  [ IN PROGRESS ]
                </span>
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Launch Day and Publicity Campaign
              </Typography>
              {phaseTwoArray?.map((text, i) => (
                <Box mt={3} key={text}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Step {i + 1}:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#A3A3A3",
                      fontSize: "15px",
                      fontWeight: "400",
                      mt: 1,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              border: "2px solid #282828",
            }}
          >
            <Box p={2}>
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F0B90B",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Phase 3 -{" "}
                <span
                  style={{
                    color: "#282828",
                  }}
                >
                  [ IN PROGRESS ]
                </span>
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                List on Top, High-Liquidity Exchanges
              </Typography>
              {phaseThreeArray?.map((text, i) => (
                <Box mt={3} key={text}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#ffffff",
                      fontSize: "15px",
                      fontWeight: "700",
                    }}
                  >
                    Step {i + 1}:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Proxima Nova",
                      color: "#A3A3A3",
                      fontSize: "15px",
                      fontWeight: "400",
                      mt: 1,
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              border: "2px solid #282828",
            }}
          >
            <Box p={2}>
              <Typography
                variant="h5"
                mb={1}
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#F0B90B",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                Phase 4 -{" "}
                <span
                  style={{
                    color: "#282828",
                  }}
                >
                  [ IN PROGRESS ]
                </span>
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#ffffff",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Transition to Community Governanc
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Proxima Nova",
                  color: "#A3A3A3",
                  fontSize: "15px",
                  fontWeight: "400",
                  mt: 3,
                }}
              >
                During this phase, we start the transition of power to holders
                and community members who can use their status as a BitNance
                token holder to have a voice in the direction the coin takes.
              </Typography>
            </Box>
          </Grid>
        </Grid>
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

export default Roadmap;

import React from "react";
import {
  Container,
  useMediaQuery,
  SwipeableDrawer,
  Button,
  List,
  ListItemText,
  Box,
  Paper,
  ListItemButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { logo } from "./SmallComponents/Images";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#040303 !important",
    borderRight: "1px solid #F0B90B",
  },
  hover: {
    "&:hover": {
      color: "#F0B90B",
    },
  },
});

const navArray = [
  {
    text: "Presale",
    link: "/#presale",
  },
  {
    text: "Introduction",
    link: "/#introduction",
  },
  {
    text: "Roadmap",
    link: "/#roadmap",
  },
  {
    text: "Tokenomics",
    link: "/#tokenomics",
  },

  {
    text: "Community",
    link: "/#community",
  },
];

export default function Header() {
  const matches = useMediaQuery("(max-width:1000px)");
  // const { account, connect, disconnect } = useContext(AppContext);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" mt={3} mb={2}>
        <Box component={"img"} width="140px" src={logo} alt="" />
      </Box>
      <List>
        {navArray?.map(({ text, link }) => (
          <ListItemButton key={text}>
            <HashLink
              smooth
              to={link}
              style={{ textDecoration: "none", margin: "auto" }}
            >
              <ListItemText
                sx={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",

                  color: "#ffffff",
                  ".MuiTypography-root": {
                    fontFamily: "Proxima Nova",
                    fontSize: "20px",
                  },

                  "&:hover": {
                    color: "#F0B90B",
                  },
                }}
                primary={text}
              />
            </HashLink>
          </ListItemButton>
        ))}
      </List>
      {/* <Box mt={1} display="flex" justifyContent="center">
        <ExampleButton />
      </Box> */}
    </div>
  );
  return (
    <>
      <Box
        id="home"
        sx={{
          background: "transparent",
        }}
        width="100%"
        py={2}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Box
                component={"img"}
                width={{ xs: "110px", sm: "140px" }}
                src={logo}
                alt=""
              />
            </Link>
            {!matches ? (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {navArray?.map(({ text, link }, i) => (
                    <HashLink
                      key={text}
                      smooth
                      to={link}
                      style={{ textDecoration: "none" }}
                    >
                      <StyledText
                        key={text}
                        mr={
                          navArray?.length - 1 === i
                            ? { xs: 0 }
                            : { xs: 4, md: 3, xl: 4, lg: 4 }
                        }
                      >
                        {text}
                      </StyledText>
                    </HashLink>
                  ))}
                </Box>
                <ExampleButton />
              </>
            ) : (
              <Box
                display="flex"
                justifyContent={matches1 ? "end" : "space-between"}
                alignItems="center"
                width={"100%"}
              >
                <ExampleButton width={{ xs: "130px", sm: "150px" }} />
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      disableRipple={true}
                      onClick={toggleDrawer(anchor, true)}
                      sx={{
                        zIndex: 1,
                        ml: 1,
                        minWidth: "20px",
                      }}
                    >
                      <MenuIcon
                        sx={{
                          fontSize: { xs: "28px", sm: "38px" },
                          cursor: "pointer",
                          color: "#F0B90B",
                        }}
                      />
                    </Button>
                    <Paper>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
}

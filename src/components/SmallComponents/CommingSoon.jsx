import React from "react";
import { Transition } from "../../NetworkSwitch";
import { Box, Dialog, DialogContent, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { logo } from "./Images";

const StyledModal = withStyles(() => ({
  root: {
    "& .MuiDialog-root": {
      zIndex: "1301 !important",
    },
    "&.MuiDialog-container": {
      overflowY: "hidden !important",
    },
    "& .MuiDialog-paperScrollPaper": {
      backgroundColor: "black",
      height: "auto",
      width: "600px",
      boxShadow: "#F0B90B 0px 0px 8px 1px",
      //   border: "5px solid black",
      borderRadius: "10px",
    },
    "& .dialoge__content__section": {
      background: "#040303!important",
      borderRadius: "10px",
      border: "1px solid transparent",
    },
    "& .MuiDialogContent-root": {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
  },
}))(Dialog);
function CommingSoon({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="modal__main__container">
      <StyledModal
        open={open}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleClose}
        // eslint-disable-next-line jsx-a11y/aria-props
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="dialoge__content__section">
          <Box
            borderRadius="100px"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "140px",
                mb: 1,
              }}
            >
              <Box component={"img"} width="100%" src={logo} alt="" />
            </Box>
            <Typography
              my={2}
              sx={{
                fontSize: { xs: "20px", sm: "26px" },
                fontWeight: "400",
                textAlign: "center",
                color: "#fff",
                fontFamily: "Proxima Nova",
              }}
            >
              We are loading wert widget please wait...
            </Typography>
          </Box>
        </DialogContent>
      </StyledModal>
    </div>
  );
}

export default CommingSoon;

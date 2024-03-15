import { Alert, Box, Snackbar, TextField } from "@mui/material";
import { Button } from "@mui/material";

export function ToastNotify({ alertState, setAlertState }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={alertState.open}
      autoHideDuration={10000}
      key={"top center"}
      onClose={() => setAlertState({ ...alertState, open: false })}
    >
      <Alert
        onClose={() => setAlertState({ ...alertState, open: false })}
        severity={alertState.severity}
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
}

export function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#F2F2F2",
          background: "transparent",
          fontSize: { xs: "14px", sm: "18px" },
          border: "2px solid #F0B90B",
          textTransform: "capitalize",
          fontFamily: "Proxima Nova",
          borderRadius: "8px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "transparent",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

export function StyledText({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#A3A3A3",
          fontSize: "18px",
          fontFamily: "Proxima Nova",
          fontWeight: "700",
          mr: props.mr,
          cursor: "pointer",
          "&:hover": {
            color: "#F0B90B",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
export function StyledTitle({ children, ...props }) {
  return (
    <>
      <Box
        {...props}
        sx={{
          color: "#000000",
          fontSize: "40px",
          //   fontFamily: "Josefin Sans",
          fontWeight: "700",
          mr: props.mr,
        }}
      >
        {children}
      </Box>
    </>
  );
}

export const StyledInput = ({ ...props }) => {
  return (
    <TextField
      {...props}
      sx={{
        background: "#D9D9D90D",
        borderRadius: "8px",
        border: "0.43px solid rgba(240, 185, 11, 0.5)",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },

        input: {
          "&::placeholder": {
            color: "#ffffff !important",
            opacity: 1,
          },
          // padding: { xs: "16px 8px", sm: "16px 8px" },
          color: "#ffffff",
          fontSize: "13px",
          fontWeight: "700",
          fontFamily: "Proxima Nova",
        },
      }}
    />
  );
};

export function StyledButtonTwo({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        sx={{
          color: "#040303",
          background: "#F0B90B",
          fontSize: "18px",
          textTransform: "capitalize",
          fontFamily: "Proxima Nova",
          borderRadius: "8px",
          fontWeight: "700",
          height: "50px",
          width: props.width,
          "&.Mui-disabled": {
            color: "#979EA7",
          },
          "&:hover": {
            background: "#F0B90B",
          },
        }}
      >
        {children}
      </Button>
    </>
  );
}

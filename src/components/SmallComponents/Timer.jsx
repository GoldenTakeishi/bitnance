import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, useMediaQuery } from "@mui/material";
import { borderImg } from "./Images";

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery("(max-width:650px)");

  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format("x");
    let interval = setInterval(() => {
      let now = moment().format("x");
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);

  const timerStyle = {
    width: matches ? "60px" : "75px",
    color: "#ffffff",
    fontSize: { xs: "14px", sm: "24px" },
    fontWeight: "800",
    textAlign: "center",
    py: 2,
    lineHeight: { xs: "25px", sm: "22px" },
    fontFamily: "Montserrat",
  };

  const timerValueStyle = {
    fontSize: matches ? "12px" : "14px",
    fontWeight: "700",
    marginTop: "-20px",
    color: "#F0B90B",
  };

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle} className="borderImg">
            {countTime.time_days > 9 ? "" : 0}
            {countTime.time_days}
            <br />
            <span style={timerValueStyle}>DAY</span>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle} className="borderImg">
            {countTime.time_Hours > 9 ? "" : 0}
            {countTime.time_Hours}
            <br />
            <span style={timerValueStyle}>{"HOURS"}</span>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle} className="borderImg">
            {countTime.time_Minusts > 9 ? "" : 0}
            {countTime.time_Minusts}
            <br />
            <span style={timerValueStyle}>{"MIN"}</span>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <Box sx={timerStyle} className="borderImg">
            {countTime.time_seconds > 9 ? "" : 0}
            {countTime.time_seconds}
            <br />
            <span style={timerValueStyle}>{"SEC"}</span>
          </Box>
        </Box>
      </Box>
    </>
  );
}

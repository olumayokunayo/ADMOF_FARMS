import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { NavLink, Link } from "react-router-dom";
const Titlebar = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#ffffff" }}>
      <Box
        sx={{
          //   bgcolor: "red",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontFamily: "Poppins",
          fontWeight: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            gap: "0.4rem",
            padding: "2rem",
          }}
        >
          <span>
            <CiLocationOn style={{ fontSize: "1.4rem" }} />
          </span>
          <Typography variant="body2">Jericho, Ibadan, Oyo State.</Typography>
        </div>
        <div>
          <Typography variant="h4">
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                fontFamily: "Gorditas",
                color: "#63b982",
              }}
            >
              ADMOF Farms{" "}
            </Link>
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.4rem",
          }}
        >
          <span>
            <CiClock2 style={{ fontSize: "1.4rem" }} />
          </span>
          <Typography variant="body2">Opening Hours: 08:00am-7:30pm</Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Titlebar;

import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

const Navbar = () => {
  return (
    <Container maxWidth="xl">
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
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <span>
            <CiLocationOn style={{ fontSize: "1.4rem" }} />
          </span>
          <Typography>69 Halsey St, New York, Ny 10002.</Typography>
        </div>
        <div>
          <h1 style={{ fontFamily: "Gorditas", color: "#63b982" }}>
            ADMOF Farms
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <span>
            <CiClock2 style={{ fontSize: "1.4rem" }} />
          </span>
          <Typography>Opening Hours: 08:00am-7:30pm</Typography>
        </div>
      </Box>
    </Container>
  );
};

export default Navbar;

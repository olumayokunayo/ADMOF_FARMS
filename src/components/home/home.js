import { Container, Typography } from "@mui/material";
import React from "react";
import Banner from "../banner/banner";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#222" }}>
      <Container maxWidth="xl">
        <Banner />
      </Container>
    </Container>
  );
};

export default Home;

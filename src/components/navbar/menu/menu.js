import React, { useState } from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const listStyle = {
    textDecoration: "none",
    color: "#434345",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "0.4rem",
    borderRadius: "5px",
  };

  const hoverStyle = {
    backgroundColor: "#63b982",
    color: "white",
    transition: "ease-in-ease-out",
  };

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{ backgroundColor: "#f3f4f9", padding: "1.4rem" }}
    >
      <Container maxWidth="lg">
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            gap: "3rem",
            width: "100%",
            margin: "auto",
          }}
        >
          <li>
            <NavLink
              to="/"
              style={{
                ...listStyle,
                ...(hoveredLink === "/" ? hoverStyle : ""),
              }}
              activeClassName="active"
              onMouseEnter={() => handleMouseEnter("/")}
              onMouseLeave={handleMouseLeave}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              style={{
                ...listStyle,
                ...(hoveredLink === "/shop" ? hoverStyle : ""),
              }}
              onMouseEnter={() => handleMouseEnter("/shop")}
              onMouseLeave={handleMouseLeave}
            >
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              style={{
                ...listStyle,
                ...(hoveredLink === "/blog" ? hoverStyle : ""),
              }}
              onMouseEnter={() => handleMouseEnter("/blog")}
              onMouseLeave={handleMouseLeave}
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              style={{
                ...listStyle,
                ...(hoveredLink === "/gallery" ? hoverStyle : ""),
              }}
              onMouseEnter={() => handleMouseEnter("/gallery")}
              onMouseLeave={handleMouseLeave}
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={{
                ...listStyle,
                ...(hoveredLink === "/contact" ? hoverStyle : ""),
              }}
              onMouseEnter={() => handleMouseEnter("/contact")}
              onMouseLeave={handleMouseLeave}
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </Container>
    </Container>
  );
};

export default Menu;

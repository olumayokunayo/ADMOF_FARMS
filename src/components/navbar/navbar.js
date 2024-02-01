import React, { Fragment } from "react";
import Titlebar from "./titlebar";
import Menu from "./menu/menu";
const Navbar = () => {
  return (
    <Fragment>
      <Titlebar />
      <Menu />
    </Fragment>
  );
};

export default Navbar;

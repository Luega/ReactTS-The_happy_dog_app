import React from "react";
import { Link } from "react-router-dom";
import classes from "../../../style/front-office/front-office.module.css";

const Header = () => {
  return (
    <header className={`${classes.header} py-8 flex justify-center`}>
      <h1 className="text-3xl">The Happy Dog</h1>
    </header>
  );
};

export default Header;

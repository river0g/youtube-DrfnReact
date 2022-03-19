import React, { useState, useEffect } from "react";

import { useCookies, withCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogOut } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

import axios from "axios";

// material-uiでのcss適用方法。
// 1. makeStylesをインポート
// 2. useStyles(独自hoook?)を定義し、makeStyleの中に使いたい物の定義をしていく。
// 3. componentの中でuseStylesを変数に代入(インスタンス化)する。
// 4. 3で代入した変数にアクセスしてthemeを適用していく。
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt-token"]);

  const Logout = () => {
    props.cookies.remove("jwt-token");
    window.location.href = "/";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <button className="logo">
          <FaYoutube />
        </button>
        <Typography variant="h5" className={classes.title}>
          Youtube App
        </Typography>
        <button className="logout" onClick={() => Logout()}>
          <FiLogOut />
        </button>
      </Toolbar>
    </AppBar>
  );
};

export default withCookies(NavBar);

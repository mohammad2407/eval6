import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { style } from "../redux/Action";

import "../styles/Navbar.css";
export const Header = () => {

  const {active} = useSelector(state => state)
  const dispatch = useDispatch();

  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <Link to={`/`}    onClick={() =>
            dispatch(style({ div1: "active", div2: "inactive", div3: "inactive" }))
          } className={active.div1}>

            <p>

            Home
            </p>
          </Link> 

        <Link to={`/cart`}   onClick={() =>
              dispatch(style({ div1: "inactive", div2: "active", div3: "inactive" }))
            }  className={active.div2}>
              <p>
                
              Cart
              </p>
        </Link>
        <Link to={"/list"}  onClick={() =>
              dispatch(style({ div1: "inactive", div2: "inactive", div3: "active" }))
            } 
            className={active.div3}>
          {" "}

          <p>

          Login
          </p>

        </Link>
      </div>
    </div>
  );
};

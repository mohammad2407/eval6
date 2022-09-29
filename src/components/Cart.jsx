import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "../styles/cart.css";
import { addToCart, ADD_TO_CART, style, updateCart } from "../redux/Action";
import { Link } from "react-router-dom";
export const Cart = () => {
  const { cart } = useSelector((state) => state);
  const Auth   = useSelector((store) => store.isAuth)

  let dispatch = useDispatch();

  const getCartData = useCallback(async () => {
    let response = await axios.get(`https://masai-lvetslp-server.herokuapp.com/cart`);
    dispatch(addToCart(response.data));
    console.log(response);
  });

  const handleAdd = async (cartItem, val) => {
    console.log(val);
    let quantity = cartItem.quantity + val;
    const product = { ...cartItem, quantity };

    let response = await axios.put(
      `https://masai-lvetslp-server.herokuapp.com/cart/${cartItem.id}`,
      product,
      { mode: "cors" }
    );
    dispatch(updateCart(response.data));
    getCartData();
  };

  useEffect(() => {
    const abortController = new AbortController();
      getCartData();
    return () => {
      abortController.abort();
    };
  }, []);

  const handleDelete = (element) => {
    axios
      .delete(`https://masai-lvetslp-server.herokuapp.com/cart/${element.id}`, {
        headers: {
          "x-access-token": "token-value",
        },
      })
      .then(() => getCartData());
  };

   if(Auth === false){
        return <div>
            <h1>Please Login</h1>
            <Link to = "/list" onClick={() => dispatch(style({div1:"inactive", div2:"inactive", div3:"active"}))} >Login</Link>
            </div>
    }
  return (
    <div>
      { cart.length == 0 ? (
        <div>Please Do the shopping 

        </div>
      ) : (
        cart.map((element) => {
          return (
            <div className="cart" key={element.id}>
              <div>{element.id} </div>

              <div> {element.quantity} </div>

              <button
                disabled={element.quantity > 9}
                onClick={() => handleAdd(element, 1)}
              >
                increase
              </button>

              <button
                disabled={element.quantity < 1}
                onClick={() => handleAdd(element, -1)}
              >
                decrease
              </button>

              <button onClick={() => handleDelete(element)}>remove</button>
            </div>
          );
        })
      )}
    </div>
  );
};

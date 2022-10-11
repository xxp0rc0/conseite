import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";
import "./Cart.scss";

const Cart = (drawer, toggle, priceTag) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  

  const cartItems = (cartItem) => {
    return (
      <div className="cart-container" key={cartItem.id}>
        <div className="">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close"
            aria-label="Close"
          ></button>
          <div className="cart-pro-info">
            <div className="">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                height="auto"
                width="80%"
              />
            </div>
            <div className="test">
              <h3>{cartItem.name}</h3>
              <p className="cart-pro-price">${cartItem.total}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div>
        <NavLink to="/checkout" className="cart-ptc-btn">
          proceed to checkout
        </NavLink>
      </div>
    );
  };

  return (
    <>
      <Button type="text" onClick={showDrawer} style={{ marginTop: "-10px" }}>
        cart ({state.length})
      </Button>
      <Drawer
        title="/ &ensp; your cart."
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
      </Drawer>
    </>
  );
};

export default Cart;

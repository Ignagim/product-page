import React, { useState } from "react";
import menu from "../images/icon-menu.svg";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import close from "../images/icon-close.svg";
import cartProduct from "../images/image-product-1-thumbnail.jpg";
import trash from "../images/icon-delete.svg";

function Navbar({ productOnCart, setProductOnCart }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  if (menuOpen === true) {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  } else {
    window.onscroll = function () {};
  }

  return (
    <nav className="nav">
      {menuOpen ? (
        <div className="nav__menu--bg" onClick={() => setMenuOpen(false)}>
          <div className="nav__menu--container">
            <img src={close} alt="close" onClick={() => setMenuOpen(false)} />
            <div className="nav__menu--categories">
              <a href="/">Collections</a>
              <a href="/">Men</a>
              <a href="/">Women</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
            </div>
          </div>
        </div>
      ) : null}

      {cartOpen ? (
        <div className="nav__cart--bg">
          <div className="nav__cart">
            <h2>Cart</h2>
            <div className="divider"></div>
            {productOnCart > 0 ? (
              <div className="nav__cart--productOnCart">
                <div className="nav__cart--check">
                  <img
                    src={cartProduct}
                    alt="product"
                    className="nav__cart--productImg"
                  />
                  <div className="nav__cart--info">
                    <p>Autumn Limited Edition...</p>
                    <p>
                      $125.00 x {productOnCart}
                      {"  "}
                      <span>${125 * productOnCart}.00</span>
                    </p>
                  </div>
                  <img
                    src={trash}
                    alt="trash"
                    className="trash"
                    onClick={() => setProductOnCart(0)}
                  />
                </div>
                <button className="nav__cart--checkout">Checkout</button>
              </div>
            ) : (
              <div className="nav__cart--products">
                <h2>Your cart is empty.</h2>
              </div>
            )}
          </div>
        </div>
      ) : null}

      <div className="nav__left">
        <img
          src={menu}
          alt="menu icon"
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="nav__menu--container bigscreen">
        <div className="nav__menu--categories">
          <a href="/">Collections</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </div>

      <div className="nav__right">
        <div className="nav__right--cart">
          <img
            src={cart}
            alt="cart"
            className="cart"
            onClick={() => setCartOpen(!cartOpen)}
          />
          {productOnCart > 0 ? (
            <div className="nav__right--productOnCart">{productOnCart}</div>
          ) : null}
        </div>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </nav>
  );
}

export default Navbar;

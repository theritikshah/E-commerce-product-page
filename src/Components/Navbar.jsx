import React from "react";
import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import MenuIcon from "../images/icon-menu.svg";
import CartMenu from "./CartMenu";
import CartContext from "../context/CartContext";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import CartToggleContext from "../context/cartToggleContext";

function NavList() {
  return (
    <ul>
      <li>
        <a href="/">Collections</a>
      </li>
      <li>
        <a href="/">Men</a>
      </li>
      <li>
        <a href="/">Women</a>
      </li>
      <li>
        <a href="/">About</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  );
}

function Navbar(props) {
  const { cart } = useContext(CartContext);

  const { cartState, setCartState } = useContext(CartToggleContext);

  const [toggleState, setToggleState] = useState({
    hide: "hide",
    blur: "no-blur",
  });

  const cartRef = useRef();
  const cartIconRef = useRef();

  const cartToggle = (e) => {
    if (e.target.className === "cart" || e.target.className === "cartIcon") {
      !cartState ? setCartState(true) : setCartState(false);
    }
  };

  useEffect(() => {
    const handler = (em) => {
      if (
        !cartRef.current.contains(em.target) ||
        !cartIconRef.current.contains(em.target)
      ) {
        setCartState(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const slideMenuRef = useRef();

  useEffect(() => {
    const handler = (em) => {
      if (!slideMenuRef.current.contains(em.target)) {
        setToggleState({
          hide: "hide",
          blur: "no-blur",
        });
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  const handleToggleClick = () => {
    if (toggleState.hide === "") {
      setToggleState({ hide: "hide", blur: "no-blur" });
    } else {
      setToggleState({ hide: "", blur: "" });
    }
    // console.log(toggleState);
  };

  return (
    <header>
      <nav>
        <div
          className={"modal-menu " + toggleState.blur}
          onClick={(e) => {
            if (toggleState.hide === "") {
              setToggleState({ hide: "hide", blur: "no-blur" });
            }
          }}
        >
          <div
            className={"slide-menu " + toggleState.hide}
            onClick={(e) => e.stopPropagation()}
          >
            <NavList />
          </div>
        </div>
        <div className="menu">
          <img
            ref={slideMenuRef}
            className="menuToggle"
            src={MenuIcon}
            onClick={handleToggleClick}
            alt="menuIcon"
          />

          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <NavList />
        </div>

        <div className="profile">
          <div
            ref={cartRef}
            cartQty={cart.itemQty}
            className="cart"
            onClick={cartToggle}
            style={
              cart.itemQty === 0
                ? { "--display": "none" }
                : { "--display": "block" }
            }
          >
            <img
              ref={cartIconRef}
              className="cartIcon"
              src={cartIcon}
              alt="cart"
            />

            {cartState && <CartMenu />}
          </div>
          <img className="avatar" src={Avatar} alt="Avatar" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

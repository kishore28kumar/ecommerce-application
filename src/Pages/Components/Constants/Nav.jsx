import React from "react";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="right-nav">ShopKart.</div>
      <div className="left-nav">
        <a href="/">Products</a>
        <a href="/">Logout</a>
        <a href="/">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
            alt="shopping-cart"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

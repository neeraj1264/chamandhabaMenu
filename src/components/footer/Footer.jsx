import React, { useEffect } from "react";
import "./Footer.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useCart } from "../../ContextApi";

function Footer() {
  const { cartItemsCount, toggleFooterVisibility } = useCart();
  const location = useLocation();

  useEffect(() => {
    toggleFooterVisibility(cartItemsCount > 0); // Update footer visibility based on cart items count
  }, [cartItemsCount, toggleFooterVisibility]);

  if (location.pathname === "/cart") {
    return null; // Don't render the footer if the current path is /cart
  }

  return (
    <>
      {cartItemsCount > 0 && (
        <footer className="footer">
          <div className="footer-content">
            <NavLink to="/cart" className="nav-link pad i" activeclassname="active">
              <div className="cart">
                {cartItemsCount} item added
                <FaRegArrowAltCircleRight className="icon" />
              </div>
            </NavLink>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;

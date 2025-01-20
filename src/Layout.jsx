import React, { useState, useCallback } from "react";
import { Outlet } from 'react-router';
import Footer from './components/footer/Footer';
import { CartProvider } from './ContextApi';
import MenuLayout from "./MenuLayout";

function Layout() {
  const [footerVisible, setFooterVisible] = useState(false);

  const handleFooterVisibilityChange = useCallback((isVisible) => {
    setFooterVisible(isVisible);
  }, []);

  return (
    <>
      <CartProvider>
        <div className="app-container">
          <div
            className="main-content"
            style={{
              marginBottom: footerVisible ? "4rem" : "0",
            }}
          >
            <MenuLayout footerVisible={footerVisible} /> {/* Pass footerVisible as prop */}
          </div>
          <Footer onFooterVisibilityChange={handleFooterVisibilityChange} />
        </div>
      </CartProvider>
    </>
  );
}

export default Layout;

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isFooterVisible, setFooterVisible] = useState(false); // New state for footer visibility
  const [isMenuVisible, setMenuVisible] = useState(false); // State for menu visibility

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
//     setCartItems(storedCartItems);
//     setCartItemsCount(storedCartItems.length); // Update cart items count
//   }, []);

// useEffect(()=>{
//   const storedCartItemsCount = localStorage.getItem("cartItemsCount");
//   if (storedCartItemsCount) {
//     setCartItemsCount(parseInt(storedCartItemsCount, 10));
//   }
// },[])


const updateLocalStorage = (updatedCartItems) => {
  if (updatedCartItems) {
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartItemsCount", updatedCartItems.length);
  }
};

const toggleFooterVisibility = (isVisible) => {
  setFooterVisible(isVisible); // Function to update footer visibility
};

  const incrementCart = () => {
      setCartItemsCount((prevCount) => prevCount + 1);
      updateLocalStorage();
  };

  const decrementCart = () => {
    if (cartItemsCount > 0) {
      setCartItemsCount((prevCount) => prevCount - 1);
      updateLocalStorage();
    }
  };

  const AddToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems, product];
      updateLocalStorage(updatedCartItems);
      return updatedCartItems;
    });
  };


  const updateCartItemQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
updateLocalStorage();
  };
  
  const removeCartItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    updateLocalStorage();
  };

  const handleMenuClick = () => {
    setMenuVisible((prev) => !prev); // Toggle menu visibility
  };

  const value = {
    updateCartItemQuantity,
    cartItemsCount,
    incrementCart,
    decrementCart,
    cartItems,
    setCartItems,
    AddToCart,
    selectedAddress,
    setSelectedAddress,
    showButtons,
    setShowButtons,
    removeCartItem,
    isFooterVisible, 
    toggleFooterVisibility,
    isMenuVisible, 
    handleMenuClick,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

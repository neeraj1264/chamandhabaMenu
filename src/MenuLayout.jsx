import React, { useState } from 'react';
import Paneer from './components/Pages/Paneer/Paneer';
import Pasta from './components/Pages/Pasta/Pasta';
import Category from './components/categories/Category';
import Sandwich from './components/Pages/Sandwich';
import Shake from './components/Pages/Shake';
import GarlicBread from './components/Pages/GarlicBread';
import Chinese from './components/Pages/Chinese';
import Wrap from './components/Pages/Wrap';
import Snacks from './components/Pages/Snacks';
import Momos from './components/Pages/Momos';
import Chaap from './components/Pages/Chaap';
import Dinner from './components/Pages/Dinner';
import Pizza from './components/Pages/Pizza/Pizza';
import Cakes from './components/Pages/cakes/Cakes';
import Naan from './components/Pages/Naan';
import Fruit from './components/Pages/Fruit';
import Juice from './components/Pages/Juice';
import { useCart } from './ContextApi';

const MenuLayout = () => { // Accept footerVisible as a prop

  const [searchQuery, setSearchQuery] = useState('');
  const { isFooterVisible, isMenuVisible, handleMenuClick } = useCart(); // Access menu visibility and handler from context


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {isMenuVisible && <Category />}
      <Paneer />
      <Sandwich />
      <Pizza />
      <Pasta />
      <Juice />
      <Shake />
      <Cakes />
      <GarlicBread />
      <Chinese />
      <Wrap />
      <Snacks />
      <Momos />
      <Chaap />
      <Dinner />
      <Naan />
      
      <div
        className="menu-btn-container"
        style={{
          bottom: isFooterVisible ? "2.4rem" : "0", // Adjust position based on footer visibility
        }}
      >
        <input
          type="text"
          className="menu-search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <h1 className="menu-btn" onClick={handleMenuClick}>Menu</h1>
      </div>
    </>
  );
};

export default MenuLayout;

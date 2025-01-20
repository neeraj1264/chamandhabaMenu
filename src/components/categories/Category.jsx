import React, { useEffect, useState } from "react";
import "./Category.css";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../ContextApi";

const categories = [
  // { id: 15, name: "fruits", image: "/img/fruit/fruit.jpeg" },
  { id: 2, name: "paneer", image: "/img/images/shahipaneer.jpeg" },
  { id: 3, name: "sandwich", image: "/img/images/mm.jpeg" },
  { id: 1, name: "pizza", image: "/img/images/dalmakhani.jpeg" },
  { id: 4, name: "pasta", image: "/img/images/malaikofta.jpeg" },
  { id: 16, name: "juice", image: "/img/images/gravychaap.jpeg" },
  { id: 5, name: "shake", image: "/img/images/chanamasala.jpeg" },
  { id: 13, name: "cakes", image: "/img/images/mixveg.jpeg" },
  { id: 6, name: "garlic", image: "/img/images/jeerarice.jpeg" },
  { id: 7, name: "chinese", image: "/img/images/butternaan.jpeg" },
  { id: 8, name: "wrap", image: "/img/images/tandooriroti.jpeg" },
  { id: 9, name: "snacks", image: "/img/images/paneerparata.jpeg" },
  { id: 10, name: "momos", image: "/img/images/mixrayta.jpeg" },
  { id: 11, name: "chaap", image: "/img/images/greensalad.jpeg" },
  { id: 12, name: "dinner", image: "/img/images/cheesepan.jpg" },
  { id: 14, name: "naan", image: "/img/butternaan.jpeg" },
];

function Category() {
  const location = useLocation();
  const { handleMenuClick } = useCart(); // Access menu visibility and handler from context

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, [location]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const offset =
        section.offsetTop -
        parseFloat(getComputedStyle(section).marginTop);
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="outer-card">
      {categories.map((category) => (
        <Link
          to={`#${encodeURIComponent(category.name)}`}
          key={category.id}
          onClick={() => {
            handleMenuClick(); // Call the first function
            scrollToSection(category.name); // Call the second function
          }}
        >
          <div className="card">
            <div className="card-body">
              <p className="card-text">{category.name}</p>
              <span className="item-count">{category.name.length}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;
import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setInCart] = useState(false);

  function handleAddToCartClick() {
    setInCart((isInCart) =>!isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "Remove From Cart" : "add"} onClick={handleAddToCartClick}>{isInCart ? "Remove" : "Add"} to Cart</button>
    </li>
  );
}

export default Item;

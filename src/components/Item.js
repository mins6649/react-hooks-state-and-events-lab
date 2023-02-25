import React, { useState } from "react";


function Item({ name, category }) {

  const [item, setItem] = useState(false)
  function handleClicked(){
    setItem((x) => !x)
  }
  

  return (
<li className= {item ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClicked}>{item ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

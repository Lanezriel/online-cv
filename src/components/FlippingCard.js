import { useState } from "react";

import "./FlippingCard.scss";

function FlippingCard(props) {
  const [flipped, setFlipped] = useState(false);

  const flip = () => {
    setFlipped(!flipped);
  };

  return(
    <div
      className={`flipping-card ${flipped ? "flipped" : ""}`}
      onMouseEnter={flip}
      onMouseLeave={flip}
    >
      <div className="card-front">
        {props.children[0]}
      </div>
      <div className="card-back">
        {props.children[1]}
      </div>
    </div>
  );
}

export default FlippingCard;
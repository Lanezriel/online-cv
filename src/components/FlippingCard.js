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
        TEST
      </div>
      <div className="card-back">
        BACK
      </div>
    </div>
  );
}

export default FlippingCard;
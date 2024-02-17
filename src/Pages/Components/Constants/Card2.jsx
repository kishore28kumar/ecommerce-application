import React from "react";
import Rcard from "./Rcard";
import Lcard from "./Lcard";
const Card2 = () => {
  return (
    <section className="contain">
      <section className="wrap">
        <div className="top">
          <Rcard />
          <Lcard />
        </div>
        <div className="bot">
          <button>PLACE ORDER</button>
        </div>
      </section>
    </section>
  );
};

export default Card2;

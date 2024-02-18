import React from "react";
import Rcard from "./Rcard";
import Lcard from "./Lcard";
// import Orderp from "./Orderp";
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
      {/* <Orderp /> */}
    </section>
  );
};

export default Card2;

import xmark from "./img/xmark.png";
const Rcard = () => {
  return (
    <section className="win">
      <h1>My Cart</h1>
      <div className="win2">
        <div className="wina">
          <img
            src="https://i.pinimg.com/564x/26/ee/90/26ee903549b8b69635152f5db58264b2.jpg"
            alt="product"
          />
          <div className="ri">
            <h1>T-shirt for Formal Men</h1>
            <div className="rimid">
              <p>₹ 350</p>
              <img src={xmark} alt="xmark" />
            </div>
            <div className="riend">
              <button>+</button>
              <p>1</p>
              <button>-</button>
            </div>
          </div>
        </div>
        <div className="wina">
          <img
            src="https://i.pinimg.com/564x/5a/cc/7f/5acc7f5af23bee76168f0f1fd24c75b4.jpg"
            alt="product"
          />
          <div className="ri">
            <h1>T-shirt for Formal Men</h1>
            <div className="rimid">
              <p>₹ 400</p>
              <img src={xmark} alt="xmark" />
            </div>
            <div className="riend">
              <button>+</button>
              <p>0</p>
              <button>-</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rcard;

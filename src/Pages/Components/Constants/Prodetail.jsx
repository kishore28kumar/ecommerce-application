import heart from "./img/heart.jpg";
const Prodetail = () => {
  return (
    <section className="prod">
      <div className="right">
        <img
          src="https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg"
          alt="product"
        />
      </div>
      <div className="left">
        <div className="leftt">
          <h1>EYEBOGLER Regular Fit Men's Cotton T-Shirt</h1>
          <img src={heart} alt="heart" />
        </div>
        <div className="rightt">
          <p>
            What does it feel like to witness climate change playing out in
            real-time? #notcool. Sound the alarm with our Women's Climate Change
            T-shirt, printed on organic cotton in our Carbon Neutral factory.
            Plus, when it's worn out you can send it back to us to be remade
            into something new. That's what real sustainability means to us.
          </p>
          <span>$ 200</span>
          <div className="bn">
            <button className="bw">Buy Now</button>
            <button className="atc">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prodetail;

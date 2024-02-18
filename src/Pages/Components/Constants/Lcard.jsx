const Lcard = () => {
  return (
    <section className="lft">
      <h1>Price Details</h1>
      <div className="det">
        <ul>
          <li>Price</li>
          <li>Discount Price</li>
          <li>Delivery Charge</li>
        </ul>
        <ul className="last">
          <li>2150</li>
          <li>100</li>
          <li>50</li>
        </ul>
      </div>
      <div className="total">
        <h2>Total</h2>
        <h2>₹ 2100</h2>
      </div>
    </section>
  );
};

export default Lcard;

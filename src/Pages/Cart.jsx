import Nav from "./Components/Constants/Nav";
import Card2 from "./Components/Constants/Card2";
import Orderp from "./Components/Constants/Orderp";
const Cart = () => {
  return (
    <section className="cart">
      <div className="ops">
        <Nav />
        <Card2 />
      </div>
      <Orderp />
    </section>
  );
};

export default Cart;

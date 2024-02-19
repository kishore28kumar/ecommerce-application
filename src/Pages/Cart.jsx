import Nav from "./Components/Constants/Nav";
import Card2 from "./Components/Constants/Card2";
import Orderp from "./Components/Constants/Orderp";
const Cart = () => {
  // const opl = document.getElementById("opl"),
  //   oplBtn = document.getElementById("bot"),
  //   oplclose = document.getElementById("cart");

  // oplBtn.addEventListener("click", () => {
  //   opl.classList.add(".show-opl");
  // });
  // oplclose.addEventListener("click", () => {
  //   opl.classList.remove(".show-opl");
  // });
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

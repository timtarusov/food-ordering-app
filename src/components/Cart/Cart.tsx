import { CartProps } from "../../types/Cart";
import Modal from "../UI/Modal";

const Cart = (props: CartProps) => {
  const cartItems = (
    <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
      {[
        {
          id: "1",
          name: "Sushi",
          description: "Finest fish and veggies",
          price: 22.99,
        },
      ].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div
        className="flex justify-between items-center
      font-bold text-2xl my-1 mx-0"
      >
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="text-right mt-4">
        <button
          className="bg-transparent bottom-4
          border-red-600 py-2 px-8 rounded-3xl ml-4
          hover:bg-amber-700 hover:text-white
          hover:active:bg-amber-800 hover:active:text-white"
          onClick={props.onHideCart}
        >
          Close
        </button>
        <button
          className="bg-amber-600 bottom-4
          border-red-600 py-2 px-8 rounded-3xl ml-4
          hover:bg-amber-700 hover:text-white
          hover:active:bg-amber-800 hover:active:text-white"
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

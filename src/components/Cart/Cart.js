import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", amount: 2, price: 12.99 }].mapt((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal className="bg-black">
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

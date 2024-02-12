import React, { useContext} from "react";
import { ShopContext } from "../context/ShopContext";
import "./CSS/Cart.css";


function Cart() {
  const { deleteItem, cartItems } = useContext(ShopContext);
  // const [isDisabled, setDisabled] = useState(false);

  // function lessthanzero(){
  //   setCount(count-1);
  //     if(count === 1){
  //       setDisabled(true);
  //     }
  // }
  return (
    <div className="maincart">
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="all">
          <ul className="listt">
            {cartItems.map((item) => (
              <li key={item.id} className="itemm">
                <div>
                  <img
                    src={item.image}
                    alt="cloth"
                    style={{ width: "120px", height: "120px" }}
                  />
                </div>
                <div className="itemss">
                  <div className="itemnamee">
                    <p>{item.name}</p>
                  </div>
                  {/* <div className="btn1">
                    <button onClick={lessthanzero} disabled={isDisabled}>-</button>
                    <p>{count}</p>
                    <button onClick={()=> setCount(count+1)}>+</button>
                  </div> */}
                  <div className="pri">
                    <p>Rs.{Math.floor(item.new_price)}</p>
                  </div>
                  <div className="counterr">
                    <ul>
                      <button
                        className="button11"
                        onClick={() => deleteItem(item.id)}
                      >
                        Remove
                      </button>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="pricee">
            <p>
              Total Cart Amount = Rs.
              {cartItems
                .map((item) => Math.floor(item.new_price))
                .reduce((total, value) => total + value, 0)}
            </p>
            <p>
              Discount (15%) = Rs.
              {cartItems
                .map((item) => Math.floor((15 / 100) * item.new_price))
                .reduce((total, value) => total + value, 0)}
            </p>
            <p>
              Amount To Pay = Rs.
              {cartItems
                .map(
                  (item) =>
                    Math.floor(item.new_price) -
                    Math.floor((15 / 100) * item.new_price)
                )
                .reduce((total, value) => total + value, 0)}
            </p>
            <button className="btn">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

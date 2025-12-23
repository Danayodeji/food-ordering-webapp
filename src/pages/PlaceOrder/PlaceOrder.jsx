import React from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/Storecontext";

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
      </div>

      {/* right side  */}

      <div className="place-order-right">
          <div className="cart-total">
          <h2>Cart Total</h2>

          <div>
            {/* Subtotal (computed from StoreContext.getTotalCartAmount()) */}
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <hr />

            {/* Delivery fee (plain): currently a flat ₦2,000 when you have items.
              To change the fee, edit this file. For a dynamic fee, replace the
              hard-coded value with a prop or a value from your backend. */}
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₦{getTotalCartAmount() === 0 ? 0 : 2000}</p>
            </div>
            <hr />

            {/* Total = subtotal + delivery fee */}
            <div className="cart-total-details">
              <b>Total</b>
              <b>₦{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2000}</b>
            </div>
          </div>

          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

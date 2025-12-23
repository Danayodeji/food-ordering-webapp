import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

// Simple app-wide store for demo purposes.
//
// Notes:
// - `food_list` (see src/assets/assets.js) contains the product catalog.
// - `cartItems` is an object where keys are product `_id` values and the
//   value is the quantity selected. Example: { "1": 2 } means 2 units of
//   the product whose `_id` is "1".
//
// Where to change behavior later:
// - To persist the cart between reloads, add localStorage read/write when
//   initializing `cartItems` and inside `addToCart`/`removeFromCart`.
// - To validate quantities (no negatives), remove keys when count <= 0.
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // addToCart(itemId)
  // - Increase the number of that item in the cart by 1.
  // - If the item isn't in the cart, create it with quantity 1.
  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((pre) => ({ ...pre, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  // removeFromCart(itemId)
  // - Subtract 1 from the item's quantity.
  // - Note: this may make the stored value 0 or negative. To remove the
  //   entry entirely when it hits 0, check the value and delete the key.
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
  };

  // getTotalCartAmount()
  // - Loop through cartItems and add up price * quantity.
  // - This uses the local `food_list` to find each item's price. If you
  //   switch to a server API, keep the `_id` and `price` fields so this
  //   continues to work.
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    // product list, cart object, setter and helper functions
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

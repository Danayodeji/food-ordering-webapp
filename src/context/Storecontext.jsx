import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId)=> {
        // creates new entry for the product if produst ID ! available in cart item
        if (!cartItems[itemId]){
            setCartItems((pre)=>({...pre, [itemId]:1})) 
        }
        // if product ID is already available, this condition increases the value of cart item by 1
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }

    }
    // Descrease the values in cart by 1
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItems)
    },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
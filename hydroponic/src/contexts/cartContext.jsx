import { createContext, useContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <cartContext.Provider value={{cartProducts,setCartProducts}}>{children}</cartContext.Provider>
  );
};
export const  useCart =()=> {
  return useContext(cartContext)
}

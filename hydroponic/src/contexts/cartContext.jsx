import { createContext, useContext, useState,useEffect

} from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  //item  amount state
  const [itemAmount, setItemAmount] = useState(0);

  //total amount state
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const total = cartProducts.reduce((accumalator, currentItem) => {
      return accumalator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  }, [cartProducts]);

  // update itme amount
  useEffect(() => {
    if (cartProducts) {
      const amount = cartProducts.reduce((accumalator, currentItem) => {
        return accumalator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  });

  // add to cart
  const addToCart = (product, id) => {
    // const newItem = { ...product, amount: 1 };   //we are adding amount property to the product object
    const cartItem = cartProducts.find((item) => {
      //we are checking if the product is already in the cart
      return item.id === id; //if it is in the cart, we are returning the item
    });
    // if cart item is already in cart
    if (cartItem) {
      const newCart = [...cartProducts].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCartProducts(newCart);
    } else {
      setCartProducts([...cartProducts, product]); /////, newItem
    }
  };
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cartProducts.filter((item) => {
      return item.id !== id; //if the item id is not equal to the id we are passing in, we are returning the item
    });
    setCartProducts(newCart);
  };
  // clear cart
  const clearCart = () => {
    setCartProducts([]);
  };
  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cartProducts.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cartProducts.find((item) => {
      //we are checking if the product is already in the cart
      return item.id === id; //if it is in the cart, we are returning the item
    });
    if (cartItem) {
      const newCart = cartProducts.map((item) => {
        //we are checking if the product is already in the cart
        if (item.id === id) {
          //if it is in the cart, we are returning the item
          return { ...item, amount: cartItem.amount - 1 }; //we are returning the item with the amount property decreased by 1
        } else {
          return item;
        }
      });
      setCartProducts(newCart);
    }
    if (cartItem.amount < 2) {
      //if the amount is less than 2, we are removing the item from the cart
      removeFromCart(id);
    }
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(cartContext);
};

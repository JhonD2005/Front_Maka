import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 🔥 CARGAR desde localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔥 GUARDAR en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(p => p.id === product.id);

      if (existing) {
        return prevCart.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart
        .map(p =>
          p.id === id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter(p => p.quantity > 0)
    );
  };

  // Eliminar producto completamente
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(p => p.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

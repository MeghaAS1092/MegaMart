"use client";
import React, { createContext, useState, useContext } from "react";

type CartContextType = {
  count: number;
  addToCart: (product?: unknown) => void; 
  removeFromCart: (id?: unknown) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const addToCart = () => setCount((prev) => prev + 1);
  const removeFromCart = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <CartContext.Provider value={{ count, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

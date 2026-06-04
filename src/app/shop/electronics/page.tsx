"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function electronics() {
  interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-6 px-4">
        {products
          .filter((product) => product.category === "electronics")
          .map((product, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h2 className="font-semibold mb-2">{product.title}</h2>

              <h2 className="font-semibold mb-2">{product.category}</h2>

              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain mx-auto"
              />
              <br />
              <h3 className="text-lg font-semibold text-center mb-4">
                ${product.price}
              </h3>
              <div className="flex justify-center space-x-6 mt-4">
                <button className="font-semibold text-xl bg-blue-600 text-white px-4 py-2 rounded">
                  +
                </button>
                <button className="font-semibold text-xl bg-blue-600 text-white px-4 py-2 rounded">
                  -
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

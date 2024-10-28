import React, { createContext, useState, useEffect } from 'react';
// import productsData from '../data/products.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    //product ki state

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts(data);
    };

    fetchProducts();
    // setProducts(productsData); // Replace with actual fetch if connected to an API
  }, []);

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

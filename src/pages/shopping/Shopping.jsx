import React, { useEffect, useState, createContext } from "react";
import Product from "./Product";
import axios from "axios";


const Shopping = () => {
  const [product, setProduct] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      const dataList = await response.data.products;
      setProduct(dataList);
    } catch (err) {
      throw err;
    }
  }
  
  const productArray= product;
  
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="shop">
      <div className="products"></div>
      {product.map((list, index) => {
        return <Product key={index} data={list} />;
      })}
    </div>
  );
};


export { Shopping };


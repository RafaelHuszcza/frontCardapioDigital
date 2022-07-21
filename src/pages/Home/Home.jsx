
import { useEffect } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import styles from './Home.module.css'
import { useCart } from '../../context/cartContext';
import { useProducts } from '../../context/productsContext';
import { Cart } from "../../components/Cart/Cart";
import { useToast } from '../../context/toastContext';

import handleError from '../../helpers/errorHandle'
import api from '../../utils/api'
import { Products } from "../../components/Products/Products";
import { Navbar } from "../../components/NavBar/NavBar";

export function Home() {
  

const { products, setProducts } = useProducts();
const { cart, setCart } = useCart();
const { addToast } = useToast();

useEffect(() => {
  async function loadProducts() {
      try {   
        const response = await api.get("/products");
        setProducts(response.data);

      } catch (err){
          const message = handleError(err);
          addToast({ type: "error", title: 'Carregar dados', message })
      }
    }
    if (products.length === 0) loadProducts();
   
  }, [ setProducts, addToast, products]);




  return (
    <div style={{display:"flex"}}>
        <Navbar/>
        <Products/>
        <Cart/>
      </div>

  );
}
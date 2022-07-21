
import { useCart } from '../../context/cartContext';
import {useState} from "react";
import styles from './CartCard.module.css'
import {DeleteOutlined} from "@ant-design/icons"


export function CartCard({ product: product }) {

const { cart, setCart } = useCart();


const switchQuantity = (product) => {
  const newQuantity = document.getElementById('quantity-selector').value
    setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...product, quantity: Number(newQuantity) }
            : item
        )
      );  

  };
  console.log(cart) 

const addObservation = (product) =>{
  const obs = document.getElementById('observation-selector').value
  setCart(
    cart.map(item =>
      item.id === product.id
        ? { ...product, observation: obs }
        : item
    ))

}

const deleteProduct = (product) =>{
  setCart( cart.filter(item =>
      item.id !== product.id ))

}

  return(
    <div className={styles.cart}>
      <div className={styles.product}>
      <img className={styles.image} src={product.url}/> 
      <div className={styles.productInfo}>
      <span>{product.name}</span>
      <span>R$ {(Number(product.price)/100).toFixed(2)}</span>
      </div>  
      <input className={styles.quantity} id="quantity-selector" type="Number" min="1" max="10" value={product.quantity} onChange={()=> switchQuantity(product)}/>

      <div className={styles.finalValue}>
      <span>R$ {((Number(product.price)/100).toFixed(2))*product.quantity}</span>
      </div>  

      </div>
      <div className={styles.observationBox}>
      <textarea className={styles.observation} id="observation-selector" type="text" placeholder="Tem alguma observação..." value={product?.observation} onChange={()=> addObservation(product)}/>
      <div className={styles.delete}>
        <button className={styles.deleteButton} onClick={()=> deleteProduct(product)}><DeleteOutlined /></button>
      </div>
      </div>
   

      


    </div>

)
}
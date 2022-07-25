import styles from './Home.module.css'
import { Cart } from "../../components/Cart/Cart";



import { Products } from "../../components/Products/Products";
import { Navbar } from "../../components/NavBar/NavBar";

export function Home() {
  



  return (
    <div className={styles.container}>
        <Navbar/>
        <Products/>
        <Cart/>
      </div>

  );
}
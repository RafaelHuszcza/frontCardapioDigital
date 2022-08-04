import styles from './OrdersPage.module.css'



import { Orders } from "../../components/Orders/Orders";
import { Navbar } from "../../components/NavBar/NavBar";

export function OrdersPage() {
  


  return (
    <div className={styles.container}>
        <Navbar Component1={Orders} />
    </div>

  );
}
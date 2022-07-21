
import { useAuth } from '../../context/authContext'
import styles from './Navbar.module.css'
import { LogoutOutlined } from "@ant-design/icons"

export function Navbar() {
const { signOut } = useAuth()



  return(
    <div className={styles.navbar}>
      <button onClick={()=> signOut ()} className={styles.logout}><LogoutOutlined /></button>
    
      </div>

)
}
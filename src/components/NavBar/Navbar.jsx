import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import {auth} from  "../../utils/firebase-config"

function Navbar() {

const handleLogout = async() => {
    await auth.signOut();

}
    return (
    <ul className={styles.navbarContainer}>
        <li>
        <Link to="/" className={styles.link}>
            MicroProyecto Peliculero
        </Link>
        </li>

        
        <li className={styles.rightSide}>

            <div className={styles.container}>
            <Link to="/lista-de-peliculas" className={styles.link}>
                Lista de Películas
            </Link>
            </div>

            <div className={styles.container}>
            <Link to="/login" className={styles.link}>
                Login
            </Link>
            </div>

            <div className={styles.container}>
            <Link to="/register" className={styles.link}>
                Register
            </Link>
            </div>
        </li>
        
        <li className={styles.rightSide}>
            <div className={styles.container}>{}</div>

            <div className={styles.container}>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
            </div>
        </li>
    </ul>
    );
}
export default Navbar;
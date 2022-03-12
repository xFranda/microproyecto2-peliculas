import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar() {


    return (
    <ul className={styles.navbarContainer}>
        <li>
        <Link to="/" className={styles.link}>
            MicroProyecto Peliculero
        </Link>
        </li>

        
        <li className={styles.rightSide}>
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
            <button type="button">
                Logout
            </button>
            </div>
        </li>
    </ul>
    );
}
export default Navbar;
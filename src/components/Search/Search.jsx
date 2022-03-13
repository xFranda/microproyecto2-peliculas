import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState} from "react";
import { useQuery } from "../../hooks/useQuery";
import history from "./history";
export function Search() {
const query = useQuery();
const search = query.get("search");

const [searchText, setSearchText] = useState("");


useEffect(() => {
    setSearchText(search || "");
}, [search]);

const handleSubmit = (e) => {
    e.preventDefault();
    console.log({searchText});
    history.push("/?search=" + {searchText});
};

return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
    <div className={styles.searchBox}>
        <input
        className={styles.searchInput}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
        <FaSearch size={25} />
        </button>
    </div>
    </form>
);
}

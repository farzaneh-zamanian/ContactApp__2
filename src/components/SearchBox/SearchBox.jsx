import styles from "./SearchBox.module.css";
import { IoIosSearch } from "react-icons/io";


function SearchBox() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="search name or family" />
      <button>
        <IoIosSearch fontSize="2rem" />
      </button>
    </div>
  );
}

export default SearchBox;

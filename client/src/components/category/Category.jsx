import styles from "./category.module.css";
import { Link } from "react-router-dom";
const Category = ({ pressHandler, toggle, item }) => {
  return (
    <Link
      onClick={pressHandler.bind(this, item)}
      className={toggle === item ? styles.radio_button_active : styles.radio_button_inactive}
    >
      {item}
    </Link>
  );
};

export default Category;

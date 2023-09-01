import styles from "./category.module.css";
const Category = ({ pressHandler, toggle, item }) => {
  return (
    <div
      onClick={pressHandler.bind(this, item)}
      className={toggle === item ? styles.radio_button_active : styles.radio_button_inactive}
    >
      {item}
    </div>
  );
};

export default Category;

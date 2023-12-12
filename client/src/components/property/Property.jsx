import styles from "./property.module.css";
import { useNavigate, Link } from "react-router-dom";
const Property = (props) => {
  const { contact, city, street, streetNumber, price } = props;
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/specific-property", { state: props });
  };

  const changePriceWithDot = () => {
    let test = 0;
    const numberAfterChange = price.toString();
    switch (numberAfterChange.length) {
      case 4:
        test = 1;
        break;
      case 5:
        test = 2;
        break;
      case 6:
        test = 3;
      case 7:
        test = 1;
    }
    const start = numberAfterChange.substring(0, test);
    const end = numberAfterChange.substring(test);
    return `${start},${end}`;
  };

  return (
    <Link to={"/"} onClick={handleClick} id={styles.container}>
      <div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>איש קשר</h4>
          <p className={styles.text}>{contact}</p>
        </div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>עיר</h4>
          <p className={styles.text}>{city}</p>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>רחוב</h4>
          <p className={styles.text}>
            {street} {streetNumber}
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <h4 className={styles.info_text}>מחיר</h4>
        <p className={styles.text}> ₪ {changePriceWithDot()} </p>
      </div>
    </Link>
  );
};

export default Property;

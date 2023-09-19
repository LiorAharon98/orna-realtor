import React from "react";
import Input from "../components/input/Input";
import Select from "../components/select/Select";
import styles from "../styles/add_property.module.css";
import Heading from "../components/heading/Heading";
import { useNavigate } from "react-router-dom";
import Categories from "../components/categories/Categories";
import { airConditioner, airDirection, estateStatus, extended, furniture, sellOrRent, typeEstate } from "../data";
import Extended from "../components/extended/Extended";
import axios from "axios";
const AddProperty = () => {
  const property = {};
  const navigate = useNavigate()
  const handleChange = (key, e) => {
    property[key] = e.target.nodeName === "SELECT" ? Number(e.target.value) : e.target.value;
  };
  const handleClick = async () => {
    await axios.post("https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/add-property", property);
    navigate('/')
  };
  return (
    <>
      <div id={styles.container}>
        <Heading />
        <div className={styles.input_container}>
          <Input name={"visited"} handleChange={handleChange} width={130} hebrewName={"ביקור בנכס"} type={"date"} />
          <Input name={"available"} handleChange={handleChange} width={120} hebrewName={"תאריך כניסה"} type={"date"} />
          <Input name={"contact"} handleChange={handleChange} hebrewName={"איש קשר"} />
        </div>
        <div className={styles.input_container}>
          <Categories name={"rentOrSell"} handleChange={handleChange} hebrewName={"השכרה או מכירה"} data={sellOrRent} />
        </div>
        <Categories name={"type"} handleChange={handleChange} hebrewName={"סוג הנכס"} data={typeEstate} />
        <Categories name={"condition"} handleChange={handleChange} hebrewName={"מצב הנכס"} data={estateStatus} />
        <div className={styles.input_container}>
          <Input name={"city"} handleChange={handleChange} hebrewName={"יישוב"} />
          <Input name={"neighborhood"} handleChange={handleChange} hebrewName={"שכונה"} />
          <Input name={"street"} handleChange={handleChange} hebrewName={"רחוב"} />
        </div>

        <div className={styles.input_container}>
          <Input name={"squareMeter"} handleChange={handleChange} type={"number"} hebrewName={`מ"ר`} />
          <Select name={"rooms"} handleChange={handleChange} hebrewName={"חדרים"} maxNumber={10} room={true} />
        </div>
        <div className={styles.input_container}>
          <Select name={"floor"} handleChange={handleChange} hebrewName={"קומה"} maxNumber={20} />
          <Select name={"maxFloor"} handleChange={handleChange} hebrewName={"מתוך"} maxNumber={20} />
        </div>
        <div className={styles.input_container}>
          <Select name={"serviceBalcony"} handleChange={handleChange} hebrewName={"מרפסת שירות"} maxNumber={2} />
          <Select name={"balcony"} handleChange={handleChange} hebrewName={"מרפסת שמש"} maxNumber={3} />
        </div>
        <div className={styles.input_container}>
          <Select name={"parking"} handleChange={handleChange} hebrewName={"חנייה"} maxNumber={3} />
          <Select name={"warehouse"} handleChange={handleChange} hebrewName={"מחסן"} maxNumber={2} />
        </div>
        <div className={styles.input_container}>
          <Select name={"bathrooms"} handleChange={handleChange} hebrewName={"שירותים"} maxNumber={4} />
          <Select name={"bathtub"} handleChange={handleChange} hebrewName={`אמבטיה`} maxNumber={4} />
        </div>
        <div className={styles.input_container}>
          <Select name={"showerStall"} handleChange={handleChange} hebrewName={"מקלחון"} maxNumber={2} />
          <Select name={"elevator"} handleChange={handleChange} hebrewName={"מעלית"} maxNumber={2} />
        </div>

        <Categories name={"airConditioner"} handleChange={handleChange} hebrewName={"מזגנים"} data={airConditioner} />
        <Categories name={"furniture"} handleChange={handleChange} hebrewName={"ריהוט"} data={furniture} />
        <Categories
          name={"airDirections"}
          handleChange={handleChange}
          hebrewName={"כיווני אוויר"}
          data={airDirection}
        />
        <Extended handleChange={handleChange} name={"extended"} data={extended} />
        <div className={styles.input_container}>
          <Input name={"propertyTax"} handleChange={handleChange} hebrewName={"ארנונה"} type={"number"} width={70} />
          <Input name={"committee"} handleChange={handleChange} hebrewName={"ועד"} type={"number"} width={70} />
        </div>
        <div className={styles.input_container}>
          <Input name={"price"} handleChange={handleChange} hebrewName={"מחיר"} type={"number"} width={80} />
        </div>
        <button onClick={handleClick} id={styles.btn}>
          הוספה
        </button>
      </div>
    </>
  );
};

export default AddProperty;

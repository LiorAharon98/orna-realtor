import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import styles from "./main.module.css";
import Header from "../header/Header";
import RadioButton from "../radio_button/RadioButton";
const Main = () => {
  const sellOrRent = ["השכרה", "מכירה"];
  const airConditioner = ["מיני מרכזי", "בכל חדר", "גם וגם", "VRF", "דמפרים"];
  const airDirection = ["צפון", "דרום", "מזרח", "מערב"];
  const typeEstate = ["דירה", "דירת גן", "פנטהאוז", "בית קרקע", "קרקע"];
  const estateStatus = ["חדש מקבלן", "משופץ", "במצב טוב", "שמור", "דורש שיפוץ"];
  const extended = [
    "בית חכם",
    "רשתות",
    "סורגים",
    "דוד שמש",
    "מטבח כשר",
    "דלתות פנדור",
    "גישה לנכים",
    'ידידותי לבע"ח',
    "מתאים לשותפים",
    "ריהוט חלקי",
    "בקרבת מרכז מסחרי",
    'תחב"צ',
    `בי"ס`,
  ];
  return (
    <>
       <div className={styles.side_bar_top}></div>
    <div id={styles.page_container}>
      <div className={styles.side_bar}></div>
      <div id={styles.container}>
        <Header />
        <div className={styles.input_container}>
          <RadioButton name={"השכרה או מכירה"} data={sellOrRent} />
          <Input name={"ביקור בנכס"} type={"date"} />
        </div>
        <RadioButton name={"סוג הנכס"} data={typeEstate} />
        <RadioButton name={"מצב הנכס"} data={estateStatus} />
        <div className={styles.input_container}>
          <Input name={"יישוב"} />
          <Input name={"שכונה"} />
          <Input name={"רחוב"} />
        </div>

        <div className={styles.input_container}>
          <Input type={"number"} name={`מ"ר`} />
          <Select name={"חדרים"} maxNumber={10} room={true} />
        </div>
        <div className={styles.input_container}>
          <Select name={"קומה"} maxNumber={20} />
          <Select name={"מתוך"} maxNumber={20} />
        </div>
        <div className={styles.input_container}>
          <Select name={"מרפסת שירות"} maxNumber={3} />
          <Select name={"מרפסת שמש"} maxNumber={3} />
        </div>
        <div className={styles.input_container}>
          <Select name={"חנייה"} maxNumber={3} />
          <Select name={"מחסן"} maxNumber={3} />
        </div>
        <div className={styles.input_container}>
          <Select name={'שירותים'} maxNumber={4} />
          <Select name={"אמבטיה"} maxNumber={4} />
        </div>
        <div className={styles.input_container}>
          <Select name={"מקלחון"} maxNumber={2} />
          <Select name={`ממ"ד`} maxNumber={2} />
        </div>
        <div className={styles.input_container}>
          <Select name={"מעלית"} maxNumber={2} />
        </div>
        <RadioButton name={"מזגנים"} data={airConditioner} />
        <RadioButton name={"כיווני אוויר"} data={airDirection} />

        <RadioButton name={"תוספות"} data={extended} />
        <Input name={"תאריך כניסה"} type={"date"} />
        <div className={styles.input_container}>
          <Input name={"ארנונה"} type={"number"} />
          <Input name={"ועד"} type={"number"} />
        </div>
        <div className={styles.input_container}>
          <Input name={"מחיר"} type={"number"} />
        </div>
        <button id={styles.btn}>בדיקה</button>
      </div>
      <div className={styles.side_bar}></div>
    </div>
    </>
  );
};

export default Main;

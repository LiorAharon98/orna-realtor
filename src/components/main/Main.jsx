import React from "react";
import Input from "../input/Input";
import Select from "../select/Select";
import styles from "./main.module.css";
import Header from "../header/Header";
import RadioButton from "../radio_button/RadioButton";
const Main = () => {
  const sellOrRent = ["השכרה", "מכירה"];
  const airConditioner = ["מיני מרכזי", "בכל חדר", "גם וגם", "VRF", "דמפרים"];
  const airDirection = ["צפון" , "דרום" , "מזרח" , "מערב"]
  const typeEstate = ['דירה', 'דירת גן' , "פנטהאוז", 'בית קרקע', 'קרקע']
  const estateStatus = ['חדש מקבלן' , 'משופץ', 'במצב טוב' , 'שמור', 'דורש שיפוץ']
  const extended = ['בית חכם' , 'רשתות', 'סורגים', 'דוד שמש' , 'מטבח כשר' , 'דלתות פנדור' , 'גישה לנכים' , 'ידידותי לבע"ח', 'מתאים לשותפים' , 'ריהוט חלקי', 'בקרבת מרכז מסחרי', 'תחב"צ', `בי"ס`]
  return (
    <div id={styles.container}>
      <Header />
      <div className={styles.input_container}>

      <Input name={"ביקור בנכס"} type={"date"} />
      <RadioButton name={"השכרה או מכירה"} data={sellOrRent} />
      </div>
      <RadioButton name={"סוג הנכס"} data={typeEstate} />
      <RadioButton name={"מצב הנכס"} data={estateStatus} />
      <div className={styles.input_container}>
        <Input name={"רחוב"} />
        <Input name={"שכונה"} />
        <Input name={"יישוב"} />
      </div>

      <div className={styles.input_container}>
        <Select name={"חדרים"} maxNumber={10} />
        <Input type={"number"} name={`מ"ר`}/>
      </div>
      <div className={styles.input_container}>
        <Select name={"מתוך"} maxNumber={20} />
        <Select name={"קומה"} maxNumber={20} />
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
        <Select name={"שירותים"} maxNumber={4} />
        <Select name={"אמבטיה"} maxNumber={4} />
      </div>
      <div className={styles.input_container}>
        <Select name={" מקלחון/אמבטיה"} maxNumber={3} />
        <Select name={`ממ"ד`} maxNumber={2} />
      </div>
      <div className={styles.input_container}>
        <Select name={"מעלית"} maxNumber={2} />
      </div>
      <RadioButton name={"מזגנים"} data={airConditioner} />
      <RadioButton name={'כיווני אוויר'} data = {airDirection}/>
      <Input name={"תאריך כניסה"} type={"date"} />

      <RadioButton  data={extended} />
      <div className={styles.input_container}>
        <Input name={"ארנונה"} type={"number"} />
        <Input name={"וועד"} type={"number"} />
      </div>
      <div className={styles.input_container}>
        <Input name={"מחיר"} type={"number"} />
      </div>
      <button id={styles.btn}>הבא</button>
    </div>
  );
};

export default Main;

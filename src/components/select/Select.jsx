import React from "react";
import styles from "./select.module.css";
const Select = ({ name, maxNumber,room }) => {
  const numbers = new Array(maxNumber).fill(1);
  const rooms = []
  for(let i =0; i<maxNumber;i++){
    rooms.push(i)
    rooms.push(i+0.5)
  }
  console.log(rooms)
  return (
    <div id={styles.container}>
      <p> {name} : </p>
      <select id={styles.select_container}>
        <option>0</option>
        {!room && numbers.map((number,index) => {
          return <option>{index+1}</option>;
        })}
        {room && rooms.map((number)=>{
          
          return number!==0 && number !==0.5 && <option>{number}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;

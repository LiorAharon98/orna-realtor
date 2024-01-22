import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import styles from "./edit_button.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { propertyAction } from "../../store/Index";
const EditButton = ({ id }) => {
 const {allProperty} = useSelector(state =>state.property)
  const dispatch = useDispatch();
  const [toggleChangePrice, setToggleChangePrice] = useState(false);
  const [inp, setInp] = useState("");
  const handleEditPriceClick = () => {
    setToggleChangePrice((prev) => !prev);
  };
  const handleClick = async() => {
    if (!inp || inp.length < 4) return alert("מספר לא תקין");
    const data = { id, inp };
    const serverUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/change-price"
        : "https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/change-price";
    await axios.put(serverUrl, data);
    const afterMap = allProperty.map((value)=>{
 if (value._id ===id) return {...value , price : data.inp}
 else return value
    })
    console.log(afterMap)
    dispatch(propertyAction.editPropertyPrice(afterMap))
    setToggleChangePrice(false);
  };
  const handleChange = (e) => {
    setInp(e.target.value);
  };
  return (
    <>
      <CiEdit onClick={handleEditPriceClick} fontSize={25} />
      {toggleChangePrice && (
        <Modal opacity={0.9}>
          <AiOutlineClose id={styles.icon} onClick={setToggleChangePrice.bind(this, false)} />

          <input type="number" id={styles.inp} onChange={handleChange} />

          <button id={styles.btn} onClick={handleClick}>
            עדכון
          </button>
        </Modal>
      )}
    </>
  );
};

export default EditButton;

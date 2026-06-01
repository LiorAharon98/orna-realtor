import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import styles from "./edit_button.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "../modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { propertyAction } from "../../store/Index";
import serverUrl from "../../serverUrl";
const EditButton = ({ id }) => {
  const { allProperty } = useSelector((state) => state.property);
  const dispatch = useDispatch();
  const [toggleChangePrice, setToggleChangePrice] = useState(false);
  const [inp, setInp] = useState("");
  const handleEditPriceClick = () => {
    setToggleChangePrice((prev) => !prev);
  };
  const handleClick = async () => {
    try {
      if (!inp || inp.length < 4) return alert("מספר לא תקין");

      const data = { id, inp };

      await axios.put(serverUrl("change-price"), data);
      const afterMap = allProperty.map((value) => {
        if (value._id === id) return { ...value, price: data.inp };
        else return value;
      });
      dispatch(propertyAction.editPropertyPrice(afterMap));
      setToggleChangePrice(false);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    setInp(e.target.value);
  };
  return (
    <>
      <CiEdit onClick={handleEditPriceClick} fontSize={25} />
      {toggleChangePrice && (
        <Modal toggleModal={toggleChangePrice} opacity={0.9}>
          <input type="number" id={styles.inp} onChange={handleChange} />

          <div id={styles.modal_btn_container}>
            <button id={styles.btn} onClick={handleClick}>
              עדכון
            </button>
            <button
              id={styles.btn}
              onClick={() => {
                setToggleChangePrice(false);
              }}
            >
              ביטול
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default EditButton;

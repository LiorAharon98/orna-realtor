import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import styles from "./delete_button.module.css";
import { propertyAction } from "../../store/Index";
import { useDispatch, useSelector } from "react-redux";
const DeleteButton = ({ id }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const {allProperty} = useSelector(state =>state.property)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async() => {
    const afterFilter = allProperty.filter((value) => {
      return value._id !== id;
    });
    dispatch(propertyAction.deleteProperty(afterFilter));
    const serverUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000/delete-property"
        : "https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/delete-property";
    await axios.put(serverUrl, { id });
    navigate("/admin");
  };
  return (
    <>
      <MdDelete onClick={setToggleModal.bind(this, true)} size={25} />
      {toggleModal && (
        <Modal opacity={0.9}>
          <AiOutlineClose id={styles.icon} onClick={setToggleModal.bind(this, false)} />

          <button id={styles.btn} onClick={handleClick}>
            מחקי
          </button>
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;

import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import styles from "./delete_button.module.css";
import { propertyAction } from "../../store/Index";
import { useDispatch, useSelector } from "react-redux";
import serverUrl from "../../serverUrl";
const DeleteButton = ({ id }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const { allProperty } = useSelector((state) => state.property);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const afterFilter = allProperty.filter((value) => {
        return value._id !== id;
      });
      dispatch(propertyAction.deleteProperty(afterFilter));

      await axios.put(serverUrl("delete-property"), { id });
      navigate("/admin");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <MdDelete onClick={setToggleModal.bind(this, true)} size={25} />
      {toggleModal && (
        <Modal toggleModal opacity={0.9}>
          <AiOutlineClose id={styles.icon} onClick={setToggleModal.bind(this, false)} />

          <button id={styles.btn} onClick={handleClick}>
            מחק
          </button>
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;

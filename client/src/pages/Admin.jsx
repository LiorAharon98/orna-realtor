import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "../components/property/Property";
import styles from "../styles/admin.module.css";
import Modal from "../components/modal/Modal";
const Admin = () => {
  const [allProperty, setAllProperty] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const getProperty = async () => {
    setToggleModal(true);
    const response = await axios.get("https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/admin");
    setAllProperty(response.data);
    setToggleModal(false);
  };
  useEffect(() => {
    getProperty();
  }, []);
  const sortedProperty =[...allProperty].sort((a,b)=>{
 return a.visited > b.visited ? -1 : 1
  })
  return (
    <>
      {toggleModal && <Modal />}
      <div id={styles.page_container}>
        <div id={styles.container}>
          {sortedProperty.map((property, index) => {
            return <Property key={index} {...property} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Admin;

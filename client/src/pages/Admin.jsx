import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "../components/property/Property";
import styles from "../styles/admin.module.css";
const Admin = () => {
  const [allProperty, setAllProperty] = useState([]);
  const getProperty = async () => {
    const response = await axios.get("https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/admin");
    setAllProperty(response.data);
  };
  useEffect(() => {
    getProperty();
  }, []);
  return (
    <div id={styles.page_container}>
      <div id={styles.container}>
        {allProperty.map((property, index) => {
          return <Property key={index} {...property} />;
        })}
      </div>
    </div>
  );
};

export default Admin;

import React, { useEffect, useState } from "react";
import axios from "axios";
const Admin = () => {
  const [allProperty, setAllProperty] = useState([]);
  const getProperty = async () => {
    const response = await axios.get("http://localhost:4000/admin");
    setAllProperty(response.data);
  };
  useEffect(() => {
    getProperty();
  }, []);
  return <div></div>;
};

export default Admin;

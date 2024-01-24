import React, { useEffect, useState } from "react";
import styles from "./search_sorted_property.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { propertyAction } from "../../store/Index";
const SearchSortedProperty = ({ properties }) => {
  const [inputData, setInputData] = useState("");
//   const {sortedProperty} = useSelector((state) => state.property)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  useEffect(() => {
    const sortedProperties = properties.filter((value) => {
      return value.city === inputData;
    });
    dispatch(propertyAction.sortedProperty([sortedProperties]));
  }, [inputData]);
  return (
    <div id={styles.container}>
      <input onChange={handleChange} id={styles.input} />
    </div>
  );
};

export default SearchSortedProperty;

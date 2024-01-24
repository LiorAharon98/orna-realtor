import React, { useEffect, useState } from "react";
import axios from "axios";
import Property from "../components/property/Property";
import styles from "../styles/admin.module.css";
import Modal from "../components/modal/Modal";
import { Animate } from "react-simple-animate";
import { useDispatch } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { modalAction, propertyAction } from "../store/Index";
import { useSelector } from "react-redux";
import SearchSortedProperty from "../components/search_sorted_property/SearchSortedProperty";
import serverUrl from "../serverUrl";
const Admin = () => {
  const {allProperty} = useSelector((state) => state.property)
  useEffect(()=>{
  },[allProperty])
  const dispatch = useDispatch();
  const getProperty = async () => {
    dispatch(modalAction.toggleOn())
    console.log(serverUrl('admin'))
    const response = await axios.get(serverUrl('admin'));
    dispatch(propertyAction.getProperty(response.data))
    dispatch(modalAction.toggleOf())
  };

  useEffect(() => {
    getProperty();
  }, []);
  const sortedProperty = [...allProperty].sort((a, b) => {
    return a.visited > b.visited ? -1 : 1;
  });
  return (
    <>
        <Modal>
          <AiOutlineLoading3Quarters id={styles.icon} />{" "}
        </Modal>
      <SearchSortedProperty properties={allProperty}/>
      {allProperty.length > 0 && (
        <Animate play duration={2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <div id={styles.container}>
            <div id={styles.tag_container}>
              <p>איש קשר</p>
              <p>עיר</p>
              <p>רחוב</p>
              <p>מחיר</p>
            </div>
            {sortedProperty.map((property, index) => {
              return <Property  key={index} {...property} />;
            })}
          </div>
        </Animate>
      )}
    </>
  );
};

export default Admin;

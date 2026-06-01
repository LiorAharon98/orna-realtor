import React, { useRef, useState } from "react";
import styles from "../styles/home.module.css";
import { userAction } from "../store/Index";
import { useDispatch } from "react-redux";
const Home = () => {
  const [toggle, setToggle] = useState(() => {
    const isLogged = JSON.parse(localStorage.getItem("orna"));
    return isLogged;
  });

  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (usernameRef.current.value === process.env.REACT_APP_USERNAME && passwordRef.current.value === process.env.REACT_APP_PASSWORD) {
      setToggle(true);
      window.localStorage.setItem(
        "orna",
        JSON.stringify({ username: usernameRef.current.value, password: passwordRef.current.value })
      );
      dispatch(userAction.logged());
    }
  };

  return (
    <div id={styles.page_container}>
      <div id={styles.right_container}>
        {!toggle && (
          <form id={styles.sign_container}>
            <input className={styles.inp} ref={usernameRef} placeholder="Username" />
            <input className={styles.inp} ref={passwordRef} placeholder="Password" />
            <button id={styles.btn} onClick={handleClick}>
              התחבר
            </button>
          </form>
        )}
      </div>
      <div id={styles.left_container}></div>
    </div>
  );
};

export default Home;

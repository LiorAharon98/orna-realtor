import React, { useState } from 'react'
import message from '../../copyMessage'
import styles from "./copy_button.module.css"
const CopyButton = ({state}) => {
    const [isClicked,setIsClicked] = useState(false)
    const handleClick = ()=>{
        setIsClicked(true)
        message(state)
    }
  return (
    <button className={styles.copy_btn} onClick={handleClick}>
    {isClicked ? 'הועתק' : 'העתק'}
  </button>
  )
}

export default CopyButton
import { useState } from "react";
import message from "../../copyMessage";
import { BiSolidCopy } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
const CopyButton = ({ state }) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    message(state);
    setToggle(true);
  };
  return <>{toggle ? <FaCheck size={25} /> : <BiSolidCopy size={25} onClick={handleClick} />}</>;
};

export default CopyButton;

import message from "../../copyMessage";
import { IoCopy } from "react-icons/io5";
const CopyButton = ({ state }) => {
  const handleClick = () => {
    message(state);
  };
  return (
      <IoCopy onClick={handleClick} color="rgb(0, 106, 255)"  fontSize={30} />
  );
};

export default CopyButton;

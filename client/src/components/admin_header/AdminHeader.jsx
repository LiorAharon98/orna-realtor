import React from "react";
import EditButton from "../edit_button/EditButton";
import DeleteButton from "../delete_button/DeleteButton";
import CopyButton from "../copy_button/CopyButton";
import styles from "./admin_header.module.css"
const AdminHeader = ({ id, state }) => {
  return (
    <div className={styles.container} >
      <div id={styles.tag_container}>

      <EditButton id={id} />
      <DeleteButton id={id} />
      <CopyButton state={state} />
      </div>
    </div>
  );
};

export default AdminHeader;

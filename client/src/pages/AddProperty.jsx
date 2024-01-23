import Input from "../components/input/Input";
import Select from "../components/select/Select";
import styles from "../styles/add_property.module.css";
import AddPropertyBtn from "../components/add_property_btn/AddPropertyBtn";
import { useNavigate } from "react-router-dom";
import Categories from "../components/categories/Categories";
import { airConditioner, airDirection, estateStatus, extended, furniture, sellOrRent, typeEstate } from "../data";
import Extended from "../components/extended/Extended";
import axios from "axios";
import { useState } from "react";
import handleReverseDate from "../handleReverseDate";
const AddProperty = () => {
  const [toggle, setToggle] = useState(false);
  const [property, setProperty] = useState({});
  const serverUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000/add-property"
      : "https://orna-realtor-node-js-03cea7a828a1.herokuapp.com/add-property";
  const navigate = useNavigate();
  const day = new Date().getDate();
  const month = `0${new Date().getMonth() + 1}`;
  const year = new Date().getFullYear();
  const final = `${day}-${month}-${year}`;
  const handleChange = (key, e) => {
    setProperty((prev) => {
      return { ...prev, [key]: e.target.nodeName === "SELECT" ? Number(e.target.value) : e.target.value };
    });
    if (key === "available") {
      if (handleReverseDate(e.target.value) == final)
        return setProperty((prev) => {
          return { ...prev, available: "מיידי" };
        });
    }
  };
  const handleClick = async () => {
    if (Object.keys(property).length !== 30) return setToggle(true);
    await axios.post(serverUrl, property);
    navigate("/");
  };
  const getAddressApi = async (streetName) => {
    const data = {
      resource_id: "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba",
      limit: "5",
      q: streetName,
    };
    const { resource_id, limit, q } = data;
    const streetUrl = `https://data.gov.il/api/3/action/datastore_search?resource_id=${resource_id}&limit=${limit}&q=${q}`;
    const neighborhoodUrl =
      "https://www.nadlan.gov.il/Nadlan.REST/Main/GetNeighborhoodsListByCityAndStartsWith?cityName=אור יהודה&startWithKey=-1";
    const url = new URL(data, neighborhoodUrl);

    const response = await axios.get(url);
  };

  return (
    <>
      <div id={styles.container}>
        <div className={styles.input_container}>
          <Input
            toggle={toggle}
            property={property}
            name={"visited"}
            handleChange={handleChange}
            width={130}
            hebrewName={"ביקור בנכס"}
            type={"date"}
          />
          <Input
            toggle={toggle}
            property={property}
            name={"available"}
            handleChange={handleChange}
            width={120}
            hebrewName={"תאריך כניסה"}
            type={"date"}
          />
          <Input
            toggle={toggle}
            property={property}
            name={"contact"}
            handleChange={handleChange}
            hebrewName={"איש קשר"}
          />
        </div>
        <div className={styles.input_container}>
          <Categories name={"rentOrSell"} handleChange={handleChange} hebrewName={"השכרה או מכירה"} data={sellOrRent} />
        </div>
        <Categories name={"type"} handleChange={handleChange} hebrewName={"סוג הנכס"} data={typeEstate} />
        <Categories name={"condition"} handleChange={handleChange} hebrewName={"מצב הנכס"} data={estateStatus} />
        <div className={styles.input_container}>
          <Input toggle={toggle} property={property} name={"city"} handleChange={handleChange} hebrewName={"יישוב"} />
          <Input
            toggle={toggle}
            property={property}
            name={"neighborhood"}
            handleChange={handleChange}
            hebrewName={"שכונה"}
          />
          <Input toggle={toggle} property={property} name={"street"} handleChange={handleChange} hebrewName={"רחוב"} />
          <Input
            toggle={toggle}
            property={property}
            name={"streetNumber"}
            handleChange={handleChange}
            width={40}
            hebrewName={"מספר"}
            type={"number"}
          />
        </div>

        <div className={styles.input_container}>
          <div id={styles.square_meter_container}>
            <Input
              toggle={toggle}
              property={property}
              name={"squareMeter"}
              width={50}
              handleChange={handleChange}
              type={"number"}
              hebrewName={`מ"ר`}
            />
          </div>
          <Select
            toggle={toggle}
            property={property}
            name={"rooms"}
            handleChange={handleChange}
            hebrewName={"חדרים"}
            maxNumber={11}
            room={true}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            name={"floor"}
            handleChange={handleChange}
            hebrewName={"קומה"}
            maxNumber={20}
          />
          <Select
            property={property}
            toggle={toggle}
            name={"maxFloor"}
            handleChange={handleChange}
            hebrewName={"מתוך"}
            maxNumber={20}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            name={"serviceBalcony"}
            handleChange={handleChange}
            hebrewName={"מרפסת שירות"}
            maxNumber={2}
          />
          <Select
            property={property}
            toggle={toggle}
            checkBox={"balcony"}
            name={"balcony"}
            handleChange={handleChange}
            hebrewName={"מרפסת שמש"}
            maxNumber={3}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            checkBox={"parking"}
            name={"parking"}
            handleChange={handleChange}
            hebrewName={"חנייה"}
            maxNumber={3}
          />
          <Select
            property={property}
            toggle={toggle}
            name={"warehouse"}
            handleChange={handleChange}
            hebrewName={"מחסן"}
            maxNumber={2}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            name={"safeRoom"}
            handleChange={handleChange}
            hebrewName={"ממ'ד"}
            maxNumber={2}
          />
          <Select
            property={property}
            toggle={toggle}
            name={"elevator"}
            handleChange={handleChange}
            hebrewName={"מעלית"}
            maxNumber={3}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            name={"bathtub"}
            handleChange={handleChange}
            hebrewName={`אמבטיה`}
            maxNumber={4}
          />
          <Select
            property={property}
            toggle={toggle}
            name={"showerStall"}
            handleChange={handleChange}
            hebrewName={"מקלחון"}
            maxNumber={2}
          />
        </div>
        <div className={styles.input_container}>
          <Select
            property={property}
            toggle={toggle}
            name={"bathrooms"}
            handleChange={handleChange}
            hebrewName={"שירותים"}
            maxNumber={5}
          />
        </div>

        <Extended name={"airConditioner"} handleChange={handleChange} hebrewName={"מזגנים"} data={airConditioner} />
        <Categories name={"furniture"} handleChange={handleChange} hebrewName={"ריהוט"} data={furniture} />
        <Extended handleChange={handleChange} data={airDirection} name={"airDirections"} />

        <Extended handleChange={handleChange} name={"extended"} data={extended} />
        <div className={styles.input_container}>
          <Input
            toggle={toggle}
            property={property}
            name={"propertyTax"}
            handleChange={handleChange}
            hebrewName={"ארנונה"}
            type={"number"}
            width={70}
          />
          <Input
            toggle={toggle}
            property={property}
            name={"committee"}
            handleChange={handleChange}
            hebrewName={"ועד"}
            type={"number"}
            width={70}
          />
        </div>
        <div className={styles.input_container}>
          <Input
            toggle={toggle}
            property={property}
            name={"price"}
            handleChange={handleChange}
            hebrewName={"מחיר"}
            type={"number"}
            width={80}
          />
        </div>
        <AddPropertyBtn handleClick={handleClick} property={property} />
      </div>
    </>
  );
};

export default AddProperty;

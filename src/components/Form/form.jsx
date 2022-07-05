import { useState } from "react";
import Checkbox from "../UI/Checkbox/checkbox";
import Input from "../UI/Input/input";
import classes from "./form.module.css";
import { useNavigate } from "react-router";
import { inputArray, checkboxArray, checkboxArray2 } from "../../constants";

const Form = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    "Product Name": "",
    "First Name": "",
    "Last Name": "",
    Email: "",
    Phone: "",
    Address: "",
    ProductType: [],
    ServiceType: [],
    "Product Description": "",
  });

 
  const handleChange = (e) => {
    setPayload((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(checkboxArray)
  return (
    <div className={classes.main}>
      <div className={classes.formContent}>
        <h3>fill this in two minutes</h3>
        <p>
          Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam faucibus
          laoreet vestibulum solor pretium tellus namfacilisis senectus.
        </p>
      </div>
      <form className={classes.form}>
        {inputArray.map((item) => (
          <Input
            value={payload[item.name]}
            // isValid={item.validator(payload[item.name])}
            handleChange={handleChange}
            {...item}
          />
        ))}
        <div className={classes.checkBox}>
          <h3>
            Project Type <span>How would you categories your product?</span>{" "}
          </h3>
          <div className={classes.checkBoxOne}>
            {checkboxArray.map((item) => (
              <Checkbox setPayload={setPayload} {...item} />
            ))}
          </div>
          <div className={classes.checkBox}>
            <h3>Service Type</h3>
            <div className={classes.checkBoxTwo}>
              {checkboxArray2.map((item) => (
                <Checkbox setPayload={setPayload} {...item} />
              ))}
            </div>
          </div>
        </div>
        <textarea
          spellCheck={true}
          onChange={(e) =>
            setPayload((prevState) => ({
              ...prevState,
              "Product Description": e.target.value,
            }))
          }
          placeholder="Tell us a bit about your product"
          name="Product Description"
        ></textarea>
        <button
          onClick={() => {
            console.log(payload);
            navigate("/submitted");
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Form;

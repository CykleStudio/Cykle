import { useState } from "react";
import classes from "./input.module.css";
const Input = ({
  _id,
  label,
  name,
  type,
  placeholder,
  handleChange,
  props,
  isValid,
  value,
  errorMessage,
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <label htmlFor={_id} className={classes.label}>
        {label}
        <input
          className={!isValid && active ? classes.error : ""}
          id={_id}
          type={type}
          placeholder={placeholder}
          name={name}
          onFocus={() => setActive(true)}
          onChange={handleChange}
          value={value}
          {...props}
        />
        {!isValid && active && <span>{errorMessage}</span>}
      </label>
    </>
  );
};

export default Input;

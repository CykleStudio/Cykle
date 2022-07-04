import classes from "./checkbox.module.css";

const Checkbox = ({ text, _id, name, setPayload }) => {
  return (
    <>
      <label htmlFor={_id} className={classes.container}>
        <input
          id={_id}
          type="checkbox"
          defaultChecked={false}
          name={name}
          onChange={(e) =>
            setPayload((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.checked,
            }))
          }
        />
        <span className={classes.checkmark}></span>
        {text}
      </label>
    </>
  );
};

export default Checkbox;

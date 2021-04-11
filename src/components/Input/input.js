import "./style.css";

const Input = ({ name, type, ...rest }) => {
  return (
    <>
      <input {...rest} name={name} type={type} />
    </>
  );
};

export default Input;

import "./style.css";

const Button = ({ title, ...rest }) => {
  return (
    <>
      <button {...rest}>{title}</button>
    </>
  );
};

export default Button;

import "./style.css";

const Button = ({ title, ...rest }) => {
    return (
        <>
            <button {...rest} className="w-full shadow bg-gray-800 text-white outline-none focus:outline-none hover:bg-gray-900">{title}</button>
        </>
    );
};

export default Button;

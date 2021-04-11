// import "./style.css";

const Input = ({ name, type, ...rest }) => {
    return (
        <>
            <input {...rest} name={name} type={type} className="w-full focus:outline-none 
            border-2 h-10 p-2 border-gray-800 rounded-md" />
        </>
    );
};

export default Input;

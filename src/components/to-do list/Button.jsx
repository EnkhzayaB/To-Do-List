const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
      className={` ${
        props.isSmall ? "h-[32px] py-1 px-3 text-xs" : "h-[40px] py-2 px-4"
      } ${
        props.isGray ? "bg-[#f68edf] text-white" : "bg-[#f3f4f6] text-[#363636]"
      }
    rounded-md`}
    >
      {props.text}
    </button>
  );
};

export default Button;

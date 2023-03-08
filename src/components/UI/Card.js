const Card = (props) => {
  return (
    <div className="hover:shadow-md w-full text-black cursor-pointer p-2">
      {props.children}
    </div>
  );
};

export default Card;

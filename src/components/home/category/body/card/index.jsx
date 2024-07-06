const Card = ({ title, main_image, price }) => {
  return (
    <div className="w-[258px]">
      <div className="w-full h-[300px] bg-[#fbfbfb]">
        <img className="w-full h-full" src={main_image} alt="as" />
      </div>
      <h3>{title}</h3>
      <p className="font-bold text-[#46A358]">$ {price}</p>
    </div>
  );
};

export default Card;

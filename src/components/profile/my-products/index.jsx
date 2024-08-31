import Body from "./customs/body";
import Header from "./customs/header";

const MyProducts = () => {
  return (
    <div className="w-full">
      <button
        className={
          "bg-[#46a358] flex rounded-md items-center justify-center gap-1 text-base text-white px-[15px] py-[8px] ml-auto"
        }
      >
        Add
      </button>
      <Header />
      <Body />
    </div>
  );
};

export default MyProducts;

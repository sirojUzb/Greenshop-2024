import { useNavigate } from "react-router-dom";

const Pages = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-[50px] max-md:flex-col max-md:w-[75px]">
      <h3
        onClick={() => navigate("/")}
        className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer"
      >
        Home
      </h3>
      <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
        Shop
      </h3>
      <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
        Plane Care
      </h3>
      <h3 className="relative hover:font-bold hover:before:bg-[#46A358] before:w-full before:h-1 before:absolute before:left-0 before:bottom-[-28px] cursor-pointer">
        Blogs
      </h3>
    </div>
  );
};

export default Pages;

import Categories from "./categories";
import PriceRange from "./price-range";

const SideNav = () => {
  return (
    <div className="w-[310px] mt-[46px] bg-[#f5f5f5] px-[18px] py-[14px]">
      <Categories />
      <PriceRange />
    </div>
  );
};

export default SideNav;

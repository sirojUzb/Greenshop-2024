import Category from "./category";
import SideNav from "./side-nav";
import SliderSection from "./slider-section";

const Home = () => {
  return (
    <div>
      <SliderSection />
      <div className="flex w-[80%] m-auto mt-[46px] gap-6">
        <SideNav />
        <Category />
      </div>
    </div>
  );
};

export default Home;

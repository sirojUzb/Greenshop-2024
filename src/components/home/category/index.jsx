import Body from "./body";
import Header from "./header";
import CategoryModal from "./modals/category";

const Category = () => {
  return (
    <div>
      <CategoryModal />
      <div className="w-full">
        <Header />
        <Body />
      </div>
    </div>
  );
};

export default Category;

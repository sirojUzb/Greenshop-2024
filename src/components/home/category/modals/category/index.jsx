import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryModal } from "../../../../../redux/generic-slices/modals";
import Categories from "../../../side-nav/categories";
import PriceRange from "../../../side-nav/price-range";
import SortSelector from "../../header/sort-selector";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      onCancel={() => dispatch(setCategoryModal())}
      open={categoryModal}
      title="Categories"
    >
      <Categories />
      <PriceRange />
      <SortSelector />
    </Modal>
  );
};

export default Category;

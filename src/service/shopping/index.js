import { useDispatch, useSelector } from "react-redux";
import { setShoppingProducts } from "../../redux/slices/shopping";
import { notification } from "antd";

export const useShoppingService = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(({ shopping }) => shopping);
  const onAdd = (product) => {
    const index = products.findIndex((item) => item.id === product.id);

    notification.success({ message: "Product added to cart" });

    if (index === -1)
      return dispatch(
        setShoppingProducts([...products, { ...product, quantity: 1 }])
      );

    dispatch(
      getShoppingProducts().map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  return { onAdd };
};

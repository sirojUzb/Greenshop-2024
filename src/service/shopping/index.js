import { useDispatch, useSelector } from "react-redux";
import { setShoppingProducts } from "../../redux/slices/shopping";
import { notification } from "antd";

export const useShoppingService = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(({ shopping }) => shopping);

  const onAdd = (product) => {
    const index = products.find((item) => item._id === product._id);

    notification.success({ message: "Product added to cart" });

    if (!index)
      return dispatch(
        setShoppingProducts([...products, { ...product, quantity: 1 }])
      );

    dispatch(
      setShoppingProducts(
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    );
  };

  return { onAdd, products };
};

import { useDispatch, useSelector } from "react-redux";
import { setCoupon, setShoppingProducts } from "../../redux/slices/shopping";
import { notification } from "antd";
import useAxios from "../../hooks/axios";

export const useShoppingService = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const { products, coupon } = useSelector(({ shopping }) => shopping);

  const onAdd = (product) => {
    const index = products.find((item) => item._id === product._id);

    notification.success({ message: "Product added to cart" });

    if (!index) {
      const newProduct = { ...product, quantity: 1 };
      const updatedProducts = [...products, newProduct];
      localStorage.setItem(
        "products",
        JSON.stringify([...products, updatedProducts])
      );
      return dispatch(setShoppingProducts(updatedProducts));
    }

    const updatedProducts = products.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    dispatch(setShoppingProducts(updatedProducts));
  };

  const onDelete = (product) => {
    const newProduct = products.filter((item) => item._id !== product._id);

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
    notification.success({ message: "Product removed from cart" });
  };

  const onIncrement = (product) => {
    const newProduct = products.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
  };

  const onDecrement = (product) => {
    const newProduct = products.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
  };

  const applyCoupon = async (coupon_code) => {
    const { data } = await axios({
      url: "/features/coupon",
      method: "GET",
      params: { coupon_code },
    });
    notification.success({ message: "Coupon applied successfully" });

    dispatch(setCoupon(data?.data));
  };

  return {
    onAdd,
    products,
    onDelete,
    onIncrement,
    onDecrement,
    applyCoupon,
    coupon,
  };
};

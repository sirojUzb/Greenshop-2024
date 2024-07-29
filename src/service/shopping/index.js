import { useDispatch, useSelector } from "react-redux";
import { setCoupon, setShoppingProducts } from "../../redux/slices/shopping";
import { notification } from "antd";
import { useAxios } from "../../hooks/useAxios";

export const useShoppingService = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const { products, coupon } = useSelector(({ shopping }) => shopping);

  const onAdd = (product) => {
    const index = products.find((item) => item._id === product._id);

    notification.success({ message: "Product added to cart" });

    if (!index) {
      const newProduct = [...products, { ...product, quantity: 1 }];
      localStorage.setItem("products", JSON.stringify(newProduct));
      return dispatch(setShoppingProducts(newProduct));
    }

    const newProduct = products.map((item) =>
      item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("products", JSON.stringify(newProduct));

    dispatch(setShoppingProducts(newProduct));
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

  const onClear = () => {
    localStorage.removeItem("products");
    dispatch(setShoppingProducts([]));
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

  const setInitial = () => {
    localStorage.removeItem("products");
    dispatch(setShoppingProducts([]));
    dispatch(setCoupon(null));
  };

  return {
    onAdd,
    products,
    onDelete,
    onIncrement,
    onDecrement,
    applyCoupon,
    onClear,
    setInitial,
    coupon,
  };
};

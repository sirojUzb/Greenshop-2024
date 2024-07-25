import { HeartOutlined } from "@ant-design/icons";
import { Divider, Rate, Tag, Tooltip } from "antd";
import { useProductFeatures } from "../../../features";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { useAuth } from "../../../../../configs/auth";
import { useParams } from "react-router-dom";

const Details = () => {
  const { productId, category } = useParams();
  const { isAuthed } = useAuth();
  const dispatch = useDispatch();
  const {
    product: { data },
    user: { data: user },
  } = useProductFeatures();

  const addToWishList = () => {
    if (!isAuthed()) {
      return dispatch(setAuthModal());
    }
  };

  return (
    <div className="flex-1">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Tooltip
            className="w-[50px] h-[50px] rounded-full"
            title={`${user?.name} ${user?.surname}`}
          >
            <img
              className="rounded-full w-[50px] h-[50px] cursor-pointer"
              src={user?.profile_photo}
              alt={`${user?.name} ${user?.surname}`}
            />
          </Tooltip>
        </div>
        <div>
          <h3 className="text-[28px] font-bold">{data?.title}</h3>
          <h3 className="text-[28px] font-bold text-[#46A358]">
            ${data?.price}
          </h3>
        </div>
        <div className="flex gap-2 items-end">
          <Rate />
          <p className="text-[12px]">
            {data?.comments?.length} Customer Review
          </p>
        </div>
      </div>

      <Divider />

      <div>
        <h3 className="text-[15px] font-medium mt-[15px]">
          Short description:
        </h3>
        <p className="text-[14px] text-[#727272] mt-[10px]">
          {data?.short_description}
        </p>
      </div>

      <div>
        <h3 className="text-[15px] font-medium mt-[24px]">Size:</h3>
        <div className="text-[14px] text-[#727272] flex gap-[10px]">
          <div className="border border-[#EAEAEA] rounded-full flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
            S
          </div>
          <div className="border border-[#EAEAEA] rounded-full flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
            M
          </div>
          <div className="border border-[#EAEAEA] rounded-full flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
            L
          </div>
          <div className="border border-[#EAEAEA] rounded-full flex items-center justify-center w-[28px] h-[28px] cursor-pointer">
            XL
          </div>
        </div>
      </div>

      <div className="flex gap-[26px] items-center mt-[24px]">
        <div className="flex items-center justify-center gap-[23px] ">
          <button className="bg-[#46A358] text-white w-[33px] h-[35px] rounded-full flex  justify-center text-3xl">
            -
          </button>
          count
          <button className="bg-[#46A358] text-white w-[33px] h-[35px] rounded-full flex  justify-center text-2xl">
            +
          </button>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="w-[130px] h-[40px] rounded-[6px] flex gap-2 bg-[#46A358] text-white font-bold text-[14px] justify-center items-center cursor-pointer">
            BUY NOW
          </button>
          <button
            onClick={addToWishList}
            className="w-[130px] h-[40px] rounded-[6px] flex gap-2 border border-[#46A358] text-[#46A358] font-bold text-[14px] justify-center items-center cursor-pointer"
          >
            ADD TO CART
          </button>
          <button className="w-[40px] h-[40px] rounded-[6px] flex gap-2 border border-[#46A358] text-[#46A358] font-bold text-[14px] justify-center items-center cursor-pointer">
            <HeartOutlined className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-[24px]">
        <p className="text-[14px]  mt-[10px]">
          <span className="text-[15px] text-[#727272] font-medium mr-2">
            SKU:
          </span>
          {productId}
        </p>
        <p className="text-[14px]  mt-[10px]">
          <span className="text-[15px] font-medium text-[#727272] mr-2">
            Categories:
          </span>
          {category?.toUpperCase()}
        </p>
        <p className="text-[14px]  mt-[10px]">
          <span className="text-[15px] font-medium text-[#727272] mr-2">
            Tags:
          </span>
          {data?.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Details;

const Slide1 = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-[60%] pl-[40px]">
        <h5 className="mt-[68px] mb-2 text-[14px]">WELCOME TO GREENSHOP</h5>
        <h1 className="text-[70px] font-black leading-[70px]">
          LET{"'"}S MAKE A BETTER <span className="text-[#46A358]">PLANET</span>
        </h1>
        <p className="mt-2 text-[14px] w-[60%]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <button
          type="button"
          className="mt-[48px] w-[100px] h-[35px] bg-[#46A358] rounded-[6px] gap-2 flex justify-center items-center text-white cursor-pointer"
        >
          SHOP NOW
        </button>
      </div>
      <div className="w-[40%] relative flex items-center justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="slide1-big"
        />
        <img
          className="w-[150px] h-[150px] absolute left-[50px] bottom-0"
          src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d"
          alt="slide1-small"
        />
      </div>
    </div>
  );
};

export default Slide1;

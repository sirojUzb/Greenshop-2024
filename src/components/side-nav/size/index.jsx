const Sizes = () => {
  return (
    <div className="mt-[38px]">
      <h3 className="font-bold">Sizes</h3>
      <div className="pl-[12px] w-full">
        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46a358] cursor-pointer">
          <h3>Samll</h3>
          <h3>(119)</h3>
        </div>
        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46a358] cursor-pointer">
          <h3>Medium</h3>
          <h3>(86)</h3>
        </div>
        <div className="w-full flex justify-between items-center mt-[7px] hover:text-[#46a358] cursor-pointer">
          <h3>Large</h3>
          <h3>(78)</h3>
        </div>
      </div>
    </div>
  );
};

export default Sizes;

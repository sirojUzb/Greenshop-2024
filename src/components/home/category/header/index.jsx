import { Select } from "antd";
import { useSearchParams } from "../../../../hooks/useSearchParams";

const Header = () => {
  const { setParams, getParams } = useSearchParams();
  const activeSelection =
    "text-[#46a358] font-bold border-b-2 border-[#46a358]";
  const options = [
    {
      value: "default-sorting",
      label: "Default Sorting",
    },
    {
      value: "the-cheapest",
      label: "The Cheapest",
    },
    {
      value: "most-expensive",
      label: "Most Expensive",
    },
  ];

  const type = getParams("type") ?? "all-plants";
  const sort = getParams("sort") ?? "default-sorting";

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-8">
        <h3
          onClick={() => setParams({ type: "all-plants" })}
          className={`cursor-pointer ${
            type === "all-plants" && activeSelection
          }`}
        >
          All Plants
        </h3>
        <h3
          onClick={() => setParams({ type: "new-arrivals" })}
          className={`cursor-pointer ${
            type === "new-arrivals" && activeSelection
          }`}
        >
          New Arrivals
        </h3>
        <h3
          onClick={() => setParams({ type: "sale" })}
          className={`cursor-pointer ${type === "sale" && activeSelection}`}
        >
          Sale
        </h3>
      </div>
      <div className="flex items-center gap-2">
        <h3>Sort By:</h3>
        <Select
          // defaultValue={{ value: sort }}
          value={options?.filter((item) => item.value === sort)[0]}
          onChange={(value) => {
            setParams({ sort: value });
          }}
          style={{
            width: 150,
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default Header;

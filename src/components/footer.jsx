import { FaCopyright, FaShopware } from "react-icons/fa";

export default () => {
  return (
    <div className="p-3">
      <div className="flex ">
        <FaShopware className=" text-sm text-pink-700 inline" />
        <h2 className="inline mx-2 text-xs text-gray-700 roboto">
          Shopie 2023
          <sup>
            <FaCopyright className="inline mx-1" />
          </sup>
        </h2>
        <p className="text-xs roboto text-gray-600">By Sediq</p>
      </div>
    </div>
  );
};

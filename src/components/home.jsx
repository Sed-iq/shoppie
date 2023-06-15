import { FaCoffee, FaShopware } from "react-icons/fa";
import Card from "./card";

export default () => {
  return (
    <div className="w-full ">
      <nav className="flex sticky top-0 bg-white z-10 justify-center">
        <div className="p-4 w-full sm:w-4/5 flex items-center justify-between">
          <div>
            <FaShopware className="text-4xl mr-2 text-pink-700" />
          </div>
          <div className="px-2">
            <button className="mx-3 text-xs bg-pink-700 p-2 px-3 rounded duration-200 hover:bg-transparent hover:text-black hover:border-pink-700 border-2 border-transparent text-white">
              SignIn
            </button>
            <button className="hover:bg-pink-700 hover:border-transparent hover:text-white duration-200  mx-3 roboto text-xs border-2 p-2 px-3 rounded border-pink-700">
              Donate <FaCoffee className="inline text-gray-600" />
            </button>
          </div>
        </div>
      </nav>
      <div
        id="card_holder"
        className=" flex border-2 justify-center items-center"
      >
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
        <Card name={"Jordan mike's"} />
      </div>
    </div>
  );
};

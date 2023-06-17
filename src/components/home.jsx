import {
  FaBasketballBall,
  FaBlender,
  FaCar,
  FaCoffee,
  FaDesktop,
  FaPhone,
  FaShoppingBag,
  FaShoppingCart,
  FaShopware,
  FaTrophy,
  FaTshirt,
} from "react-icons/fa";
import Card from "./card";
import laptop from "./../assets/images/laptop.png";
import red_shoe from "./../assets/images/shoe.jpg";
import { useEffect, useState } from "react";
import Footer from "./footer";
import Category_list from "./category_list";
import Single_item_modal from "./single_item_modal";
export default () => {
  const [items, setItems] = useState([]);
  const [cart, addCart] = useState(
    Number(localStorage.getItem("cart_no")) || 0
  );
  const [modal, showModal] = useState(false);
  const categories = [
    {
      name: "Fashion",
      icon: <FaShoppingBag className="text-xs" />,
    },
    {
      name: "Sport",
      icon: <FaBasketballBall className="text-xs" />,
    },
    {
      name: "Electronics",
      icon: <FaBlender className="text-xs" />,
    },
    {
      name: "Mobiles",
      icon: <FaPhone className="text-xs" />,
    },
    {
      name: "Computers",
      icon: <FaDesktop className="text-xs" />,
    },
    {
      name: "Automobiles",
      icon: <FaCar className="text-xs" />,
    },
    {
      name: "Clothing",
      icon: <FaTshirt className="text-xs" />,
    },
  ];
  useEffect(() => {
    setItems([
      {
        name: "Clean Macbook pro 2018 model",
        price: "1300",
        quantity: 14,
        product_image: laptop,
      },
      {
        name: `Nike Airsoft "Red" snickers, good conditions`,
        price: "200",
        quantity: 24,
        product_image: red_shoe,
      },
    ]);
  }, []);
  return (
    <div
      className={`w-full ${
        modal ? "h-screen overflow-hidden" : "min-h-screen"
      } relative flex flex-col justify-between  bg-gray-300`}
    >
      <nav className="flex sticky top-0 animate__animated animate__fadeIn bg-white z-10 justify-center">
        <div className="sm:p-4 p-3 w-full sm:w-4/5 flex items-center justify-between">
          <div>
            <FaShopware className="sm:text-4xl text-2xl hover:animate-spin mr-2 text-pink-700" />
          </div>
          <div className="px-2 flex items-center">
            <button className="mx-3 text-xs bg-pink-700 p-2 sm:px-3 rounded duration-200 hover:bg-transparent hover:text-black hover:border-pink-700 border-2 border-transparent text-white">
              Sign in
            </button>
            <button className="hover:bg-pink-700 hover:border-transparent hover:text-white duration-200  mx-3 roboto text-xs border-2 p-2 sm:px-3 rounded border-pink-700">
              Donate <FaCoffee className="inline text-gray-600" />
            </button>
            <FaShoppingCart className="ml-2 text-gray-700" />
            <sup className="">
              <span className="bg-red-600 text-white p-0.5 rounded-full">
                {cart}
              </span>
            </sup>
          </div>
        </div>
      </nav>
      {modal ? (
        <div className="absolute left-0 backdrop-blur flex justify-center items-center right-0 top-0 bottom-0 w-full h-screen z-20">
          <Single_item_modal setModal={showModal} />
        </div>
      ) : null}
      <div>
        <div className="inline-block px-3 mt-5 bg-white mx-3 rounded-2xl">
          <div className="flex items-center">
            <h2 className="sm:p-3 p-2 text-xs sm:text-sm roboto text-gray-800">
              Top Shelf
            </h2>
            <FaTrophy className="text-xs text-gray-600 sm:text-sm" />
          </div>
        </div>
        <div id="card_holder" className=" flex justify-center items-center">
          {items.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                product_img={item.product_image}
                show_modal={showModal}
                addCart={addCart}
                cart_no={cart}
              />
            );
          })}
        </div>
        <div className="flex overflow-y-auto my-6 justify-center px-2 ">
          {categories.map((item, index) => {
            return (
              <Category_list
                key={index}
                catergory={item.name}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

import { FaHeart, FaSave, FaWindowClose } from "react-icons/fa";
import RedShoe from "./../assets/images/shoe.jpg";
export default ({ setModal }) => {
  return (
    <div className="sm:w-1/2 flex animate_animated animate__bounceIn  flex-col w-3/4 h-4/5 rounded bg-white p-2">
      <div
        style={{
          backgroundImage: `url(${RedShoe})`,
        }}
        className="w-full relative rounded bg-cover bg-no-repeat bg-center h-4/5 "
      >
        <FaWindowClose
          onClick={() => {
            setModal(false);
          }}
          className="absolute text-xl right-2 top-2 hover:scale-150 duration-200 text-black"
        />
      </div>
      <div className="px-5">
        <div className="flex mt-3 mb-2 items-center">
          <h2 className="roboto text-xs text-gray-600">Clothing</h2>
          <p className="font-bold text-green-700 mx-1.5 roboto text-xs">$200</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="sm:text-xl roboto">Red Nike Shoe</h2>
          <FaHeart className="text-yellow-500" />
        </div>
        <div className="flex my-2">
          {/* CTA */}
          <button className="roboto hover:bg-pink-700 hover:text-white duration-200 hover:border-transparent text-xs sm:text-sm border-2 p-0.5 sm:p-2 w-10/12 rounded border-pink-800">
            Add to cart
          </button>
          <div className="w-1/6 hover:bg-slate-700 hover:text-white hover:border-transparent duration-200 border-2 mx-2 flex justify-center items-center rounded border-slate-700 text-center">
            <FaSave className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

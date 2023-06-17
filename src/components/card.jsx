import { FaShoppingCart } from "react-icons/fa";
export default ({
  name,
  price,
  quantity,
  product_img,
  show_modal,
  addCart,
  cart_no,
}) => {
  return (
    <div
      onClick={(e) => modalClickAction(show_modal, e, addCart, cart_no)}
      id="card"
      className="duration-200 border-2 relative flex flex-col justify-between items-center border-gray-300 rounded-xl sm bg-white"
    >
      <div
        style={{
          backgroundImage: `url(${product_img})`,
        }}
        className="w-full rounded-t-xl bg-cover bg-center sm:h-4/5 h-3/5 "
      >
        {/* Image */}
      </div>
      <div className="w-full sm:h-1/3 flex flex-col justify-between h-2/5 px-2 py-1">
        <div className=" flex pt-4 h-1/2 overflow-hidden justify-center">
          <p className="roboto text-xs w-4/5 font-light sm:text-sm ">
            {/* item name */}
            {name}
          </p>
        </div>
        <div className="h-1/2 ">
          <div className="w-full p-2 h-1/2 flex justify-between">
            <p className="font-bold text-green-700 roboto text-xs sm:text-sm">
              ${price}
            </p>
            <p className="sm:text-sm text-xs roboto">
              {/* Quantity */}
              {quantity}
              <FaShoppingCart className="inline mx-1" />
            </p>
          </div>
          <div className="h-1/2">
            <button
              id="add-cart"
              className="roboto hover:bg-pink-700 hover:text-white duration-200 hover:border-transparent text-xs sm:text-sm border-2 p-1 sm:p-1.5 w-full rounded border-pink-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
function modalClickAction(showModal, event, addCart, cart_no) {
  if (event.target.attributes[0].textContent == "add-cart") {
    addCart((p) => p + 1);
    // localStorage.clear();
    localStorage.setItem("cart_no", cart_no + 1);
  } else {
    showModal(true);
  }
}

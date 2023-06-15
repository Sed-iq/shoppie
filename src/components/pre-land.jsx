import lion from "./../assets/images/lion.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function () {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth > 640) navigate("/home");
  }, []);
  return (
    <div className="h-full overflow-hi3dden">
      {/* Mobile */}
      <div
        style={{
          backgroundImage: `url(${lion})`,
        }}
        className="sm:hidden text-white p-2 flex flex-row items-end bg-center bg-cover bg-no-repeat h-full"
      >
        <div className="flex flex-col  justify-between  overflow-hidden w-full p-4">
          <p className="text-4xl text-gray-300 my-10 font-extrabold">
            Unleash <br /> your <br /> inner <br />{" "}
            <span className="text-slate-600 text-5xl"> Lion.</span>
          </p>
          <div className="flex justify-end w-full">
            <Link to={"/home"}>
              <button className="border-2 active:text-gray-700 active:border-gray-700 hover:translate-x-9 duration-300  text-xs p-3 rounded-full">
                <p>Shop with us</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

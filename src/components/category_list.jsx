export default ({ catergory, icon }) => {
  return (
    <div className="roboto hover:bg-white duration-200 sm:pr-3 pr-4 rounded-full mx-3 py-1 sm:py-2 text-xs bg-gray-200 sm:text-sm flex justify-between items-center flex-row">
      <div className="p-2 bg-white mx-1 rounded-full ">{icon}</div>
      <div>{catergory}</div>
    </div>
  );
};

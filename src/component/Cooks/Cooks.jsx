import Preparing from "../Preparing/Preparing";
import CooksList from "../CooksList/CooksList";
import PropTypes from "prop-types";

const Cooks = ({ cooksItem, preparing, handleCurrentCooking, preparingTime, calories }) => {
  // console.log(cooksItem);
  // const { name, id, preparing_time } = cookItems;
  return (
    <div className="w-full my-4">
      <div className="lg:m-5 lg:p-5 rounded-3xl border-2 border-[#0BE58A]">
        <div className="text-start lg:p-4 p-2">
          <h1 className="text-2xl lg:text-3xl text-center font-bold">
            Want to cook : {cooksItem.length}
          </h1>
          <hr className="m-5" />
          <ul className="grid grid-cols-6 text-center">
            <li className=""></li>
            <li className="col-span-2">Name </li>
            <li className="">Time </li>
            <li className="">Calories </li>
            <li className=""></li>
          </ul>

          {cooksItem?.map((cook, index) => (
            <CooksList
              key={index}
              index={index + 1}
              cook={cook}
              handleCurrentCooking={handleCurrentCooking}
              // cookTime={cookTime}
            ></CooksList>
          ))}
        </div>

        <div>
          <div className="text-start lg:p-4 p-2">
            <h1 className="text-2xl lg:text-3xl text-center font-bold">
              Currently Cooking : {preparing.length}
            </h1>
            <hr className="m-5" />
            <ul className="grid grid-cols-5 text-center">
              <li className=""></li>
              <li className="col-span-2">Name </li>
              <li className="">Time </li>
              <li className="">Calories </li>
              <li className=""></li>
            </ul>

            {preparing?.map((prepareItem, index) => (
              <Preparing
                key={index}
                index={index + 1}
                prepareItem={prepareItem}
                handleCurrentCooking={handleCurrentCooking}
                preparingTime={preparingTime}
                calories={calories}

              ></Preparing>
            ))}
          </div>

          <div className="flex flex-col justify-end">
            <ul className="grid grid-cols-2 lg:grid-cols-3 lg:gap-5 items-center lg:flex flex-col lg:flex-row justify-end m-3">
              <li className="bg-green-400 rounded-xl mr-2 p-2">Total : {preparingTime} min </li>
              <li className="bg-red-200 rounded-xl p-2">total : {calories} calories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Cooks.propTypes = {
  cooksItem : PropTypes.array,
  preparing : PropTypes.array,
  handleCurrentCooking : PropTypes.func,
  preparingTime : PropTypes.array,
  calories : PropTypes.array,
}

export default Cooks;

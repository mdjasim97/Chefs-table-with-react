import React from "react";

const CooksList = ({ cook, index, handleCurrentCooking }) => {
  const {id, name, preparing_time, calories} = cook
  return (
    <div>
      <div className="my-2">
        {/*   */}
        <ul className="grid grid-cols-6 text-center">
          <li className="">{index}</li>
          <li className="col-span-2">{name}</li>
          <li className="">{preparing_time}</li>
          <li className="">{calories}</li>
          <button
            onClick={() => handleCurrentCooking(cook)}
            className="btn bg-[#0BE58A] p-2 rounded-xl"
          >
            Preparing
          </button>
        </ul>
      </div>
    </div>
  );
};

export default CooksList;

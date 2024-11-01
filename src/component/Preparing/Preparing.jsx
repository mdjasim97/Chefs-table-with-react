import PropTypes from "prop-types";

const Preparing = ({ index, prepareItem }) => {
  //   console.log(preparing);
  const { name, preparing_time, calories } = prepareItem;
  return (
    <div>
      <div>
        <ul className="grid grid-cols-5 bg-base-200 my-2 p-2 text-center">
          <li className="">{index}</li>
          <li className="col-span-2">{name}</li>
          <li className="">{preparing_time}</li>
          <li className="">{calories}</li>
        </ul>
      </div>
    </div>
  );
};

Preparing.propTypes  = {
    index : PropTypes.number,
    prepareItem : PropTypes.array
};

export default Preparing;

// import banner_img from "../../assets/images/Rectangle 1.png"

const Banner = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-[url('https://i.postimg.cc/85qPbG3C/Rectangle1.png')] lg:min-h-[550px]">
      {/* <img src={banner_img} alt="" /> */}

      <div className=" w-2/3 text-center mx-auto space-y-4">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-white lg:px-28">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex flex-row justify-center lg:my-5">
          <button className="btn bg-[#0BE58A] p-1 lg:p-2 text-base lg:rounded-2xl rounded-lg font-bold mr-2 lg:mr-5">
            Explore Now
          </button>
          <button className="btn border-2 p-2 lg:p-2 rounded-lg lg:rounded-2xl text-white font-bold border-white bg-transparent">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

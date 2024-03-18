import React from 'react';
// import banner_img from "../../assets/images/Rectangle 1.png"

const Bannar = () => {
    return (
        <div>
            <div className="p-4 lg:p-20 bg-cover" style={{backgroundImage: "url('https://r2.easyimg.io/pzr8q83ju/rectangle_1.png')"}}>
                {/* <img src={banner_img} alt="" /> */}

                <div className='lg:space-y-10 text-center space-y-4'>
                    <h1 className='text-2xl lg:text-7xl font-bold text-white'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-white lg:px-28'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='flex flex-row justify-center lg:my-5'>
                        <button className='btn bg-green-600 p-1 lg:p-4 text-base lg:text-xl lg:rounded-2xl rounded-lg font-bold mr-2 lg:mr-5'>Explore Now</button>
                        <button className='btn border-2 p-2 lg:p-4 text-xl rounded-lg lg:rounded-2xl text-white font-bold border-white bg-transparent'>Our Feedback</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Bannar;
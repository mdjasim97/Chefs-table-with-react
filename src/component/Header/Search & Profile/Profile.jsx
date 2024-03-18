import React from 'react';
import img_profile from "../../../assets/images/Frame (5).png"

const Profile = () => {
    return (
        <div className='flex items-center'>
            <div className="text-white my-2 lg:my-0 p-2 flex lg:w-2/5">
                <input className=' border-2 rounded-3xl px-4 py-1' type="text" placeholder='Search Here' />
                <img className='rounded-full' src={img_profile} alt="" />
            </div>
        </div>
    );
};

export default Profile;
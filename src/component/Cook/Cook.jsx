import React from 'react';

const Cook = ({ cook, index, handleRemovetoCart}) => {
    // console.log(cook)
    return (
        <div>
            <div className='my-2'>
            {/*   */}
                <ul className='flex flex-row items-center bg-red-200'>
                    <li className='p-2 my-2'>{index}</li>
                    <li className='text-base m-0 py-2 pl-2 lg:w-16'>{cook.name}</li>
                    <li className='p-2 lg:ml-10 lg:w-16'>{cook.preparing_time}</li>
                    <li className='p-2'>{cook.calories}</li>
                    <button onClick={()=>handleRemovetoCart(cook)} className='btn bg-[#0BE58A] p-2 rounded-xl'>Preparing</button>
                </ul>
            </div>
        </div>
    );
};

export default Cook;
import React from 'react';

const Cook = ({ cook, index, handleRemovetoCart}) => {
    // console.log(cook)
    return (
        <div>
            <div className='my-2'>
                <ul className='flex items-center bg-red-200 justify-around '>
                    <li className='p-2 my-2'>{index}</li>
                    <li className='text-base m-0 p-2'>{cook.name}</li>
                    <li className='p-2'>{cook.preparing_time}</li>
                    <li className='p-2'>{cook.calories}</li>
                    <button onClick={()=>handleRemovetoCart(cook)} className='btn bg-[#0BE58A] p-2 rounded-xl'>Preparing</button>
                </ul>
            </div>
        </div>
    );
};

export default Cook;
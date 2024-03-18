import React from 'react';

const Preparing = ({ index, cook}) => {
    // console.log(cook)
    return (
        <div>
            <div>
                <ul className='flex space-y-2 justify-around bg-slate-100 my-2'>
                    <li className='p-2 my-2'>{index}</li>
                    <li className='text-base p-2'>{cook.name}</li>
                    <li className='p-2'>{cook.preparing_time}</li>
                    <li className='p-2'>{cook.calories}</li>
                </ul>
            </div>
        </div>
    );
};

export default Preparing;
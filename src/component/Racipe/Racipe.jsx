import React from 'react';
import { IoMdTime } from "react-icons/io";
import { SlFire } from "react-icons/sl";

const Racipe = ({ racipes, handleAddToCooks }) => {
    // console.log(handleAddToCooks)
    // const ["recipe_img", name, description]=racipes
    return (
        <div className='mt-4 lg:p-2'>
            <div id='card' className='text-start rounded-3xl border-2 border-[#0BE58A] p-4'>
                <img  className='rounded-3xl' src={racipes.recipe_img} alt="" />
                <h1 className='text-xl my-2 lg:text-2xl font-bold'>{racipes.name}</h1>
                <p className='my-2'>{racipes.description}</p>
                <div className='p-2'>
                    <hr className=' border-cyan-900 text-start justify-start ' />
                </div>
                <h1 className='text-xl'>Ingredients: {racipes.item.length}</h1>
                {
                    racipes.item.map((items, idx) => <li key={idx}>{items}</li>)
                }
                <div className='p-2'>
                    <hr className='border-cyan-900 text-start justify-start ' />
                </div>

                <div className='flex justify-between my-2'>
                    <div className='flex items-center'>
                        <p className='mr-2'><IoMdTime /></p>
                        <p>{racipes.preparing_time} minutes</p>
                    </div>

                    <div className='flex items-center'>
                        <p className='mr-2'><SlFire /></p>
                        <p>{racipes.calories} calories</p>
                    </div>
                </div>

                <button onClick={() => handleAddToCooks(racipes)} className='btn bg-[#0BE58A] text-xl p-2 lg:p-4 font-bold rounded-lg lg:rounded-2xl'>Want to Cook</button>
            </div>
        </div>
    );
};

export default Racipe;
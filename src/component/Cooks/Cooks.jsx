import React from 'react';
import Cook from '../Cook/Cook';
import Preparing from '../Preparing/Preparing';

const Cooks = ({ cooks, handleRemovetoCart, cook, preparingTime, calories }) => {
    // console.log(cooks)
    // const [name] = cooks
    return (
        <div className='lg:w-2/5 my-4'>
            <div className='lg:m-5 lg:p-5 rounded-3xl border-2 border-[#0BE58A]'>
                <div className='text-start lg:p-4 p-2' >
                    <h1 className='text-2xl lg:text-3xl text-center font-bold'>Want to cook : {cooks.length} </h1>
                    <hr className='m-5' />
                    <ul className='flex justify-around'>
                        <li>Name </li>
                        <li>Time </li>
                        <li>Calories </li>
                    </ul>

                    {
                        cooks.map((cook, index) => <Cook
                            key={index}
                            index={index + 1}
                            handleRemovetoCart={handleRemovetoCart}
                            cook={cook}></Cook>)
                    }

                </div>

                <div>
                    <div className='text-start p-4' >
                        <h1 className='text-2xl lg:text-3xl text-center font-bold'>Currently cooking : {cook.length}</h1>
                        <hr className='m-5' />
                        <ul className='grid grid-cols-3'>
                            <li className='text-center'>Name </li>
                            <li>Time </li>
                            <li>Calories </li>
                        </ul>

                        {
                            cook.map((cook, index) => <Preparing
                                key={index}
                                index={index + 1}
                                handleRemovetoCart={handleRemovetoCart}
                                cook={cook}
                            // cookTime={cookTime}
                            ></Preparing>)
                        }

                    </div>

                    <div className='flex flex-col justify-end'>
                        <ul className='grid grid-cols-2 lg:grid-cols-3 lg:gap-5 items-center lg:flex flex-col lg:flex-row justify-end m-3'>
                            <li className='bg-green-400 rounded-xl mr-2 p-2'>Total : {preparingTime} min </li>
                            <li className='bg-red-200 rounded-xl p-2'>total : {calories} calories</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cooks;
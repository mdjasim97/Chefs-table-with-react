import React, { useEffect, useState } from 'react';
import Racipe from '../Racipe/Racipe';
import Cooks from './../Cooks/Cooks';

// toast package import 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Racipes = () => {
    const [recipes, setRecipes] = useState([])
    const [cooks, setCooks] = useState([])

    useEffect(() => {
        fetch("racipes.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const customToast = () => {
        toast("This product already exit")
    }

    const handleAddToCooks = (racipes) => {
        const newCooks = [...cooks, racipes]
        const isExit = cooks.find(item => item.id == racipes.id)
        if (!isExit) {
            setCooks(newCooks)
        }
        else {
            return customToast()
        }
    }



    const [cook, setCook] = useState([])


    const [preparingTime, setPreparingTime] = useState(0)
    const [calories, setCalories] = useState(0)

    const handleRemovetoCart = (preparingItem) => {
        const itemFilter = cooks.filter(item => item.id !== preparingItem.id)
        setCooks(itemFilter);

        const newCook = [...cook, preparingItem]
        setCook(newCook)

        setPreparingTime(preparingTime + preparingItem.preparing_time)
        setCalories(calories + preparingItem.calories)
        
    }

    return (
        <div>
            <div className='space-y-5 text-center'>
                <h1 className='text-3xl mt-4 font-semibold'>Our Racipes</h1>
                <p className='lg:px-52 text-base'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='grid grid-col-1 lg:grid-cols-2 lg:w-2/3'>
                    {
                        recipes.map((racipes, index) => <Racipe
                            key={index}
                            handleAddToCooks={handleAddToCooks}
                            racipes={racipes}></Racipe>)
                    }
                </div>

                <Cooks
                    cooks={cooks}
                    cook={cook}
                    preparingTime = {preparingTime}
                    calories = {calories}
                    handleRemovetoCart={handleRemovetoCart}
                ></Cooks>
            </div>
        </div>
    );
};

export default Racipes;
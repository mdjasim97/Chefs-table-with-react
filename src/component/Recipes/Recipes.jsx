import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooks from "../Cooks/Cooks";

// // toast package import
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([]);

  console.log(cooks);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const customToast = () => {
    toast("This product already exit");
  };

  const handleAddToCooks = (recipe) => {
    const newCooks = [...cooks, recipe];
    const isExit = cooks.find((item) => item.id == recipe.id);
    if (!isExit) {
      setCooks(newCooks);
    } else {
      return customToast();
    }
  };

  const [preparing, setPreparing] = useState([]);

  const [preparingTime, setPreparingTime] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleCurrentCooking = (preparingItem) => {
    // console.log("preparing button click");
     const itemFilter = cooks.filter((item) => item.id !== preparingItem.id);
     setCooks(itemFilter);

      const prepare = [...preparing, preparingItem];
      setPreparing(prepare);

      setPreparingTime(preparingTime + preparingItem.preparing_time);
      setCalories(calories + preparingItem.calories);
  };

  return (
    <div className="my-16">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-bold">Our Recipes</h1>
        <p className="lg:px-52 text-base">
          Delicious and diverse, our recipes boast a fusion of flavors, from
          comforting classics to innovative creations. Explore our collection
          for culinary inspiration that will tantalize your taste buds and
          elevate your meals.
        </p>
      </div>

      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-5">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              recipe={recipe}
              handleAddToCooks={handleAddToCooks}
            ></Recipe>
          ))}
        </div>

        <div>
          <div>
            <Cooks
              cooksItem={cooks}
              handleCurrentCooking={handleCurrentCooking}
              preparing={preparing}
              preparingTime={preparingTime}
              calories={calories}
            ></Cooks>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

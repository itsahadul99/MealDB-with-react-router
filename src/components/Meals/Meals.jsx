import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData();
    console.log(meals);
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                {
                    meals.categories.map((meal) => <Meal key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default Meals;
import { Link } from "react-router-dom";

const Meal = ({ meal }) => {
    console.log(meal);
    
    return (
        <div className="shadow-lg rounded-lg border">
            <div className="flex flex-col justify-center items-center p-5 space-y-3">
                <img className="w-11/12 rounded-xl" src={meal.strCategoryThumb} alt="" />
                <h1 className="text-2xl font-bold">{meal.strCategory}</h1>
                <p className="text-sm">{meal.strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default Meal;
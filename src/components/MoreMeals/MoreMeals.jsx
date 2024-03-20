import { useLoaderData } from "react-router-dom";

const MoreMeals = () => {
    const meals = useLoaderData();
    console.log(meals);
    return (
        <div className="grid grid-cols-3 justify-center gap-10">
            {
                meals.meals.map((meal) => {
                    return (
                        <div key={meal.idMeal} className="w-96 border flex flex-col justify-center shadow-md rounded-md p-5 space-y-3">
                            <img className="rounded-xl h-2/3" src={meal.strMealThumb} alt="" />
                            <h1 className="text-2xl font-bold">{meal.strCategory}</h1>
                            <p className="text-sm flex-grow">{meal.strInstructions.slice(0, 500)}</p>
                            <li>{meal.strMeasure1}</li>
                            <li>{meal.strMeasure2}</li>
                            <li>{meal.strMeasure3}</li>
                            <li>{meal.strMeasure4}</li>
                            <li>{meal.strMeasure5}</li>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MoreMeals;
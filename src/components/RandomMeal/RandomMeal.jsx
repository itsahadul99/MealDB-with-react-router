import { useLoaderData } from "react-router-dom";

const RandomMeal = () => {
    const { meals } = useLoaderData();
    console.log(meals);
    return (
        <div className="flex justify-center">
            {
                meals.map((item) => {
                    return (
                        <div key={item.idCategory} className=" flex justify-center gap-12 items-center p-5 space-y-3  border shadow-lg rounded-md">
                            <div>
                                <img className="rounded-xl" src={item.strMealThumb} alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{item.strMeal}</h1>
                                <p className="font-bold text-lg">Instruction:  <small className="font-normal">{item.strInstructions.slice(0, 1000)}</small></p>
                                <h1 className="text-xl font-bold">Measurement: </h1>
                                <li>{item.strIngredient1}</li>
                                <li>{item.strIngredient2}</li>
                                <li>{item.strIngredient3}</li>
                                <li>{item.strIngredient4}</li>
                                <li>{item.strIngredient5}</li>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RandomMeal;
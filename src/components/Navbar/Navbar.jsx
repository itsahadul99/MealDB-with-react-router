import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="bg-slate-50">
            <div className="flex justify-between py-10 container mx-auto px-10">
                <h1 className="text-3xl font-bold text-black uppercase">Meals Organizer</h1>
                <div className="flex gap-5 items-center *:text-lg *:font-semibold *:p-2 *:rounded-lg">
                    <Link className="hover:bg-slate-200" to='/'>Home</Link>
                    <Link className="hover:bg-slate-200" to='/listMeals'>List Meal</Link>
                    <Link className="hover:bg-slate-200" to='/randomMeals'>Random Meal</Link>
                    <Link className="hover:bg-slate-200" to='/'>Blogs</Link>
                </div>
                <div className="text-5xl text-green-400">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
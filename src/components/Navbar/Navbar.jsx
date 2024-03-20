import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="bg-slate-50 text-black">
            <div className="flex justify-between py-10 container mx-auto px-10">
                <h1 className="text-3xl font-bold text-black uppercase">Meals Organizer</h1>
                <nav className="flex gap-5 items-center *:text-lg *:font-semibold *:p-2 *:rounded-lg">
                    <NavLink className="hover:bg-slate-200"  to='/'>Home</NavLink>
                    <NavLink  className="hover:bg-slate-200" to='/listMeals'>List Meal</NavLink>
                    <NavLink className="hover:bg-slate-200" to='/randomMeals'>Random Meal</NavLink>
                    <NavLink className="hover:bg-slate-200" to='/moreMeals'>More Meals</NavLink>
                </nav>
                <div className="text-5xl text-green-400">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="bg-slate-50">
            <div className="flex justify-between py-10 container mx-auto px-10">
                <h1 className="text-3xl font-bold text-black uppercase">Meals Organizer</h1>
                <div className="flex gap-5 *:text-lg *:font-semibold  *:p-2 *:rounded-lg">
                    <Link className="hover:bg-slate-200" to='/home'>Home</Link>
                    <Link className="hover:bg-slate-200" to='/about'>About</Link>
                    <Link className="hover:bg-slate-200" to='/meals'>Meals</Link>
                </div>
                <div className="text-5xl text-green-400">
                    <FaUserCircle/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import { FcAlarmClock, FcHome } from "react-icons/fc";
import { FaLock, FaRegistered } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import logo from "../../assets/img/logo.png";
import default_profile from "../../assets/img/default-profile.jpg";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
    const navLink = <>
        <li className="mx-3 my-2 hover:text-yellow-500"><NavLink to="/">Home</NavLink></li>
        <li className="mx-3 my-2 hover:text-yellow-500"><NavLink to="/">Assignments</NavLink></li>
        <li className="mx-3 my-2 hover:text-yellow-500"><NavLink to="/">Create assignments</NavLink></li>
        <li className="mx-3 my-2 hover:text-yellow-500"><NavLink to="/">MyAssignments</NavLink></li>
        <li className="mx-3 my-2 hover:text-yellow-500"><NavLink to="/">Submitted Assignments</NavLink></li>
    </>
    return (
        <div>
            <div className="w-full py-4 bg-yellow-500 flex xl:flex-row flex-col">
                <div className="flex lg:flex-row flex-col gap-x-4 w-[350px] lg:w-[1000px] xl:w-full mx-auto lg:pl-12">
                    <div className="flex items-center">
                        <AiOutlinePhone className="text-2xl text-white"></AiOutlinePhone>
                        <h2 className="ml-2 text-xl text-white"> Phone : 8801 923 154 259</h2>
                    </div>
                    <div className="flex items-center">
                        <FcAlarmClock className="text-2xl"></FcAlarmClock>
                        <h2 className="ml-2 text-xl text-white"> Opening Time : 9:30am-5:30pm</h2>
                    </div>
                    <div className="flex items-center">
                        <FcHome className="text-2xl"></FcHome>
                        <h2 className="ml-2 text-xl text-white">Address : Labartisan 1205 Dhaka</h2>
                    </div>
                </div>

                <div className="flex text-xl w-[350px] mx-auto">
                    <div className="flex items-center text-white">
                        <FaRegistered className="mr-3 text-2xl"></FaRegistered>
                        <Link to="/register">Register</Link>
                    </div>
                    <span className="mx-2 text-white text-2xl font-bold">|</span>
                    <div className="flex items-center text-white">
                        <FaLock className="mr-3 text-2xl"></FaLock>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between 2xl:justify-around xl:flex-row flex-col px-8 2xl:px-20 py-4 xl:py-2 items-center bg-white">
                <div className="bg-white p-2 rounded-lg">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <ul className="flex text-center py-4 xl:py-0 lg:flex-row flex-col text-xl text-gray-700 font-bold">
                        {navLink}
                    </ul>
                </div>

                <div>
                    <img className="w-[50px] border-2 shadow-2xl rounded-full" src={default_profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;




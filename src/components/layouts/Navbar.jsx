import { FcAlarmClock, FcHome } from "react-icons/fc";
import { FaLock,FaRegistered } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";


const Navbar = () => {
    return (
        <div>
            <div className="w-full py-6 bg-yellow-500 flex xl:flex-row flex-col">
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
                        <a href="">Register</a>
                    </div>
                    <span className="mx-2 text-white text-2xl font-bold">|</span>
                    <div className="flex items-center text-white">
                        <FaLock className="mr-3 text-2xl"></FaLock>
                        <a href="">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


import banner from "../../assets/img/banner.jpg";
import "../../assets/css/Banner.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../provider/Provider";

const Banner = () => {

    const { user } = useContext(Context);
    return (
        <div className="w-full h-[70vh] relative">
            <img className="h-[100%] w-[100%] object-cover image" src={banner} alt="" />
            <div className="overly"></div>
            <div className="absolute left-3 top-5 md:top-16 lg:top-32 md:left-20 lg:left-48 text-white">
                <h2 className="text-2xl lg:text-4xl font-semibold">Better Education for better World</h2>
                <h2 className=" text-4xl lg:text-6xl my-6 font-bold text-[#FFB400]">The Best Education Time</h2>
                <p className="text-xl">Rapidiously expedite granular imperatives before economically sound web services. <br /> Credibly actualize pandemic strategic themeplatform.</p>
                <div className="mt-6">
                    {
                        user ? "" : <button className="bg-yellow-500 text-2xl text-white px-8 py-2 border-2 shadow-2xl"> <Link to="/register">Register</Link> </button>
                    }
                    <button className={`bg-[#6C5EBF] text-2xl text-white px-4 md:px-8 py-2 border-2 shadow-2xl ${user ? "ml-0" : "ml-2"}`}>Learn More..</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
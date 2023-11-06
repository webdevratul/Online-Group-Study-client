import { FaGraduationCap, FaBookOpen, FaAvianex, FaAnglesRight } from "react-icons/fa6";
const Features = () => {
    return (
        <div className="my-20 text-gray-700">
            <div className="text-center">
                <h2 className="text-5xl font-bold text-[#6C5EBF]">Services & Features</h2>
                <p className="py-8 text-xl">Rapidiously expedite granular imperatives before economically sound web services. <br /> Credibly actualize pandemic strategic themeplatform.</p>
            </div>

            <div className="w-[65%] mx-auto text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8">
                <div className=" bg-white shadow-2xl px-2 py-6 border-t-4 border-yellow-500">
                    <FaGraduationCap className="mx-auto text-[130px] text-yellow-500"></FaGraduationCap>
                    <h2 className="text-3xl my-4">Skilled Lecturers</h2>
                    <p className="text-xl">Aolaboraively eenable vira niche market Uniquely maintain hghly eficient prduct for and goaloriented human.</p>
                    <div className="my-4 flex justify-center items-center gap-x-2">
                        <button>Read More </button>
                        <FaAnglesRight></FaAnglesRight>
                    </div>
                </div>
                <div className=" bg-white shadow-2xl mt-4 md:mt-0 px-2 py-6 border-t-4 border-yellow-500">
                    <FaBookOpen className="mx-auto text-[130px] text-yellow-500"></FaBookOpen>
                    <h2 className="text-3xl my-4">Books & Library</h2>
                    <p className="text-xl">Aolaboraively eenable vira niche market Uniquely maintain hghly eficient prduct for and goaloriented human.</p>
                    <div className="my-4 flex justify-center items-center gap-x-2">
                        <button>Read More </button>
                        <FaAnglesRight></FaAnglesRight>
                    </div>
                </div>
                <div className=" bg-white shadow-2xl mt-4 xl:mt-0 px-2 py-6 border-t-4 border-yellow-500">
                    <FaAvianex className="mx-auto text-[130px] text-yellow-500"></FaAvianex>
                    <h2 className="text-3xl my-4">Scholarship Facility</h2>
                    <p className="text-xl">Aolaboraively eenable vira niche market Uniquely maintain hghly eficient prduct for and goaloriented human.</p>
                    <div className="my-4 flex justify-center items-center gap-x-2">
                        <button>Read More </button>
                        <FaAnglesRight></FaAnglesRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
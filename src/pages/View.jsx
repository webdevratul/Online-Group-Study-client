
import { Link, useLoaderData } from "react-router-dom";
import { Context } from "../provider/Provider";


const View = () => {

    const viewAssignment = useLoaderData();
    const { title, description, marks, photo, difficulty, dueDate, email } = viewAssignment;

    


    return (
        <div className="w-[100%] py-20 bg-[#E7E3FD] text-gray-700">
            <div className="w-[70%] mx-auto flex flex-col xl:flex-row justify-center gap-y-4 gap-x-8 items-center">
                <div>
                    <img className="h-[310px] md:max-w-[500px] object-cover shadow-2xl" src={photo} alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <h3 className="my-6 text-xl">{description}</h3>
                    <h3 className="text-2xl font-semibold">Dificulty: {difficulty}</h3>
                    <h4 className="text-xl font-semibold my-4">Due Date: {dueDate}</h4>
                    <Link to="/createIndividual">
                        <button className="px-6 py-2 bg-yellow-500 text-white text-xl">Take Assignment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default View;
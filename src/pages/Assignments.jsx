import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";



const Assignments = () => {
    const assignments = useLoaderData();

    const [allAssignments, setAllAssignment] = useState(assignments);

    return (
        <div className="bg-[#e7e3fd] pt-20 pb-32">
            <h2 className="text-5xl text-center font-bold text-[#6C5EBF] pt-2 pb-4">Assignments Gallery</h2>
            <hr className="h-2 bg-[#6C5EBF] w-[30%] mx-auto mb-16 rounded-2xl" />
            <div className="w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    allAssignments.map((assignment, idx) => <div key={idx} className="bg-white p-4 shadow-2xl">
                        <img className="object-cover h-[300px] w-[100%]" src={assignment.photo} alt="" />
                        <div className="text-gray-700">
                            <h2 className="mt-4 text-2xl font-bold">{assignment.title}</h2>
                            <h3 className="py-4 text-xl">{assignment.description}</h3>
                            <h4 className="text-xl font-semibold">Difficulty: {assignment.difficulty} </h4>
                            <h5 className="mt-4 font-semibold">Due Date: {assignment.dueDate} </h5>
                            <div className="py-4 flex gap-x-4">
                                <Link to={`/update/${assignment._id}`}>
                                    <button className="bg-[#6C5EBF] px-4 md:px-6 py-2 text-white text-xl font-semibold">Update</button>
                                </Link>
                                <button className="bg-red-700 px-4 md:px-6 py-2 text-white text-xl font-semibold">Delete</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Assignments;


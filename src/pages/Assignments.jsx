import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { Context } from "../provider/Provider";


const Assignments = () => {
    const assignments = useLoaderData();

    const { user } = useContext(Context);

    const [allAssignments, setAllAssignment] = useState(assignments);

    const handleDelete = (id, email) => {
        if (user.email === email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    const proceed = Swal.fire({
                        title: "Deleted!",
                        text: "Your Assignment has been deleted.",
                        icon: "success"
                    });

                    if (proceed) {
                        fetch(`http://localhost:500/createAssignment/${id}`, {
                            method: "DELETE"
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.deletedCount > 0) {
                                    Swal.fire({
                                        title: 'success!',
                                        text: 'Assignment Deleted !',
                                    });
                                }
                            })
                    }
                }
            });


        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please Chose That you have to created',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }


    }

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
                            <h3 className="py-4 text-justify">{assignment.description}</h3>
                            <h4 className="text-xl font-semibold">Difficulty: {assignment.difficulty} </h4>
                            <h5 className="mt-4 font-semibold">Due Date: {assignment.dueDate} </h5>
                            <h5 className="mt-4 font-semibold">Marks: {assignment.marks} </h5>
                            <div className="py-4 flex gap-x-4">
                                <Link to={`/update/${assignment._id}`}>
                                    <button className="bg-[#6C5EBF] px-4 md:px-6 py-2 text-white text-xl font-semibold">Update</button>
                                </Link>
                                <button className="bg-red-700 px-4 md:px-6 py-2 text-white text-xl font-semibold" onClick={() => handleDelete(assignment._id, assignment.email)}>Delete</button>
                                <Link to={`/view/${assignment._id}`}>
                                    <button className="bg-yellow-500 px-4 md:px-6 py-2 text-white text-xl font-semibold">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Assignments;




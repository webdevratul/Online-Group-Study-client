import { useContext, useEffect } from "react";
import assignmen2 from "../assets/img/assignment2.png";
import { Context } from "../provider/Provider";
import { useLoaderData } from "react-router-dom";

const Update = () => {



    const { user } = useContext(Context);

    const assignment = useLoaderData();

    const { _id, title, description, marks, photo, difficulty, dueDate, email } = assignment;


    const handleAddAssignmentUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const difficulty = form.difficulty.value;
        const dueDate = form.dueDate.value;
        const currentEmail = user.email;

        const updateAssignment = { title, description, marks, photo, difficulty, dueDate, email };


        if (currentEmail === email) {
            // send data to the server 
            fetch(`http://localhost:500/createAssignment/${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateAssignment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        } else {
            alert("Please Choose that you have created");
        }


    }

    return (
        <div className="py-40 text-gray-700 bg-[#e7e3fd]">
            <div className="w-[100%] flex flex-col xl:flex-row justify-around items-center">
                <div className="w-[80%] md:w-[50%] relative">
                    <div className="bg-[#6C5EBF] rounded-2xl mx-auto shadow-2xl h-[500px] w-[100%] xl:w-[50%]"></div>
                    <div className="bg-yellow-500 rounded-2xl mx-auto shadow-2xl h-[500px] w-[100%] xl:w-[50%] absolute top-[5%] right-2 md:right-[21%]"></div>
                    <img className="mx-auto w-[90%] md:w-[80%] xl:w-[41%] absolute top-[0%] right-3 md:right-[23%]" src={assignmen2} alt="" />
                </div>
                <div className=" w-[100%] xl:w-[50%] mt-48 md:mt-60 xl:mt-0 text-center xl:text-left">
                    <h2 className="text-5xl font-bold pb-8 text-[#6C5EBF]">Update Assignment</h2>
                    <form className="w-[100%]" onSubmit={handleAddAssignmentUpdate}>
                        <input className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" placeholder="Title" type="text" name="title" defaultValue={title} required />
                        <br />
                        <textarea className="w-[82%] h-20 bg-white outline-none rounded-md m-2 px-2 py-2" name="description" placeholder="Description" defaultValue={description} required></textarea>
                        <br />
                        <input className="w-[40%] h-10 bg-white outline-none rounded-md xl:ml-2 px-2" placeholder="Marks" type="text" name="marks" defaultValue={marks} required />
                        <input className="w-[40%] h-10 bg-white outline-none rounded-md ml-2 2xl:ml-6 px-2" placeholder="Image URL" type="text" name="photo" defaultValue={photo} required />
                        <br />
                        <br />
                        <b className="m-2 text-xl">Difficulty</b>
                        <br />
                        <select className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" name="difficulty" defaultValue={difficulty} required>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>

                        <br />
                        <input className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" type="date" name="dueDate" defaultValue={dueDate} required />
                        <br />
                        <input className="w-[82%] h-10 outline-none rounded-md m-2 px-2 bg-[#6C5EBF] text-white text-xl font-semibold cursor-pointer" type="submit" value="Submit Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
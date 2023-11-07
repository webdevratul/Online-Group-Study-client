import assignment from "../assets/img/assignment.png";


const CreateAssignment = () => {
    return (
        <div className="py-40 text-gray-700 bg-[#e7e3fd]">
            <div className="w-[100%] flex flex-col xl:flex-row justify-around items-center">
                <div className="w-[80%] md:w-[50%] relative">
                    <div className="bg-[#6C5EBF] rounded-2xl mx-auto shadow-2xl h-[500px] w-[100%] xl:w-[50%]"></div>
                    <div className="bg-yellow-500 rounded-2xl mx-auto shadow-2xl h-[500px] w-[100%] xl:w-[50%] absolute top-[5%] right-2 md:right-[21%]"></div>
                    <img className="mx-auto w-[90%] md:w-[80%] xl:w-[43%] absolute top-[8%] right-3 md:right-[23%]" src={assignment} alt="" />
                </div>
                <div className=" w-[100%] xl:w-[50%] mt-48 md:mt-60 md:mt-36 xl:mt-0 text-center xl:text-left">
                    <h2 className="text-5xl font-bold pb-8 text-[#6C5EBF]">Create Assignment</h2>
                    <form className="w-[100%]">
                        <input className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" placeholder="Title" type="text" name="title" />
                        <br />
                        <textarea className="w-[82%] h-20 bg-white outline-none rounded-md m-2 px-2 py-2" name="description" placeholder="Description"></textarea>
                        <br />
                        <input className="w-[40%] h-10 bg-white outline-none rounded-md xl:ml-2 px-2" placeholder="Marks" type="text" name="marks" />
                        <input className="w-[40%] h-10 bg-white outline-none rounded-md ml-2 2xl:ml-6 px-2" placeholder="Image URL" type="text" name="photo" />
                        <br />
                        <br />
                        <b className="m-2 text-xl">Difficulty</b>
                        <br />
                        <select className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" name="difficulty">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>

                        <br />
                        <input className="w-[82%] h-10 bg-white outline-none rounded-md m-2 px-2" type="date" name="dueDate" />
                        <br />
                        <button className="w-[82%] h-10 outline-none rounded-md m-2 px-2 bg-[#6C5EBF] text-white text-xl font-semibold">Submit Assignment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;
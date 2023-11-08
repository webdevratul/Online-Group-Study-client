import { useContext } from "react";
import Swal from 'sweetalert2';
import { Context } from "../provider/Provider";


const SubmitIndividualAssignment = () => {

    const { user } = useContext(Context);


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const pdf = form.pdf.value;
        const quickNote = form.quickNote.value;
        const currentUserEmail = user.email;
        const status = "Pending";
        const createIndividualAssignment = { title, pdf, quickNote, currentUserEmail, status };

        fetch("http://localhost:500/individualCreateAssignment", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(createIndividualAssignment)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    Swal.fire({
                        title: 'success!',
                        text: 'Assignment Created Successfully !',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    })
                }
            })
    }


    return (

        <div className="w-[100%] bg-[#E7E3FD]">
            <div className="hero bg-[#E7E3FD] py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Title" name="title" className="input border-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PDF Link</span>
                                </label>
                                <input type="text" placeholder="PDF URL" name="pdf" className="input border-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Quick Note</span>
                                </label>
                                <textarea className="rounded-lg p-2" name="quickNote" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="py-2 bg-yellow-500 text-white text-xl w-full mb-2 rounded-lg">Submit Assignment</button>
                            </div>
                            <p className="text-xl px-2">Make your individual assignment</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitIndividualAssignment;
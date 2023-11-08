import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../provider/Provider";


const Register = () => {

    const { createUser, profileUpdate } = useContext(Context);

    const [registerError, setRegisterError] = useState("");

    const navigate = useNavigate();

    const handleRegister = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        if (password.length < 6) {
            setRegisterError("Password length must be at least 6 characters");
        } else if (!/[A-Z]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
            setRegisterError("You have to use at least a Uppercase letter and have a special character");
        } else {
            createUser(email, password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    profileUpdate(name, photo);
                    e.target.reset();
                    navigate("/");
                    window.location.reload();
                })
                .catch((error) => {
                    setRegisterError(error.message);
                });

        }
    }

    return (
        <div className="hero py-20 bg-[#E7E3FD]">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-[100%] max-w-sm shadow-2xl bg-base-400">
                    <form className="card-body" onSubmit={handleRegister}>
                        {
                            registerError && <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Registration Failed</span>
                            </div>
                        }

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        </div>
                        <p className="text-red-600">{registerError}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-2">Register</button>
                        </div>
                        <p>If you have Already an account please <Link to="/login" className="underline text-blue-600 text-xl">Login</Link>  </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
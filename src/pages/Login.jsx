import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../provider/Provider";


const Login = () => {

    const { signIn, googleSignIn } = useContext(Context);

    const [loginError, setLoginError] = useState();

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        signIn(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                e.target.reset();
                navigate("/");
            })
            .catch((error) => {
                setLoginError(error.message);
            });
    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                navigate("/");
            }).catch((error) => {
                console.log(error.message);
            });
    }


    return (
        <div className="hero bg-[#E7E3FD] py-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-400">
                    <form className="card-body" onSubmit={handleLogin}>
                        {
                            loginError && <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{loginError}</span>
                            </div>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary mb-2">Login</button>
                            <button className="btn btn-primary mb-2 bg-[#4285F4] border-none" onClick={handleGoogleLogin}>Login With Google</button>
                        </div>
                        <p>If you are new in this website please <Link to="/register" className="underline text-blue-600 text-xl">Register</Link>  </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;


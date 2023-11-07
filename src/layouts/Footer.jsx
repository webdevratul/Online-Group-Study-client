
import logo from "../assets/img/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="w-[100%] bg-[#6C5EBF] py-10">
            <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
                <div>
                    <div className="bg-white p-2 rounded-lg">
                        <img src={logo} alt="" />
                    </div>
                    <p className="my-4 text-white text-xl">Rutrum tellus pellentesque eu tincidunt. Venenatis cras sed felis eget velit aliquet sagittis id consectetur</p>
                    <div className="flex gap-x-4 justify-center md:justify-start mb-4">
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <AiOutlineMail className="mx-auto text-yellow-600"></AiOutlineMail>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaFacebook className="mx-auto text-yellow-600"></FaFacebook>
                        </p>
                        <p className="text-3xl bg-white h-[35px] w-[35px] rounded-full flex items-center cursor-pointer">
                            <FaInstagram className="mx-auto text-yellow-600"></FaInstagram>
                        </p>
                    </div>
                </div>
                <div className="md:ml-28 mx-auto md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Links</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to="/hero">Hero</Link> </p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/feature">Features</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"> <Link to='/faq'>FAQ</Link> </p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto md:ml-8 md:mx-0 mb-4 text-white">
                    <h2 className="text-3xl font-bold mb-4">Pages</h2>
                    <div className="mx-auto flex flex-col gap-y-4 cursor-pointer">
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/">Home</Link></p>
                        </div>
                        <div className="flex items-center">
                            <AiFillCaretRight className="text-3xl text-[#FFD32B]"></AiFillCaretRight>
                            <p className="text-xl"><Link to="/assignment">Assignments</Link></p>
                        </div>
                    </div>
                </div>
                <div className="text-white text-xl">
                    <h2 className="text-3xl font-bold mb-4">Latest Post</h2>
                    <div>
                        <div className="flex item items-center">
                            <h5 className="ml-2">Better Education for better World</h5>
                        </div>
                        <div className="flex items-center my-4">
                            <h5 className="ml-2">The Best Education Time</h5>
                        </div>
                        <div className="flex items-center">
                            <h5 className="ml-2">Awesome Solutions a Study</h5>
                        </div>
                        <div className="flex items-center mt-4">
                            <h5 className="ml-2">Disenatre Are Colaborative</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[80%] mx-auto h-1 bg-yellow-500 mt-10 rounded-xl border-2" />
            <h2 className="text-center mt-10 text-xl font-bold">All Rights Reserved by &copy; All  <span className="text-yellow-600">Study</span> </h2>
        </div>
    );
};

export default Footer;
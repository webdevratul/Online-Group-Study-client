

const Faq = () => {
    return (
        <div className="my-20 text-gray-700">
            <div className="text-center px-4">
                <h2 className="text-5xl font-bold text-[#6C5EBF]">Frequently Asked Questions</h2>
                <p className="text-xl mt-4 py-4 max-w-[900px] mx-auto">Incorporate an FAQ section into our online study platform to enhance user experience and provide quick answers to common queries. The FAQ section will serve as a valuable resource for our students, making it easier for them to find information and solutions to their questions.</p>
            </div>

            <div className="w-[60%] mx-auto flex flex-col gap-y-4 mt-10">
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What courses are available on our platform?
                    </div>
                    <div className="collapse-content">
                        <p>Our platform offers a wide range of courses spanning various subjects, including mathematics, science, languages, programming, and more. You can explore our course catalog to find the subject that interests you.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How do I enroll in a course?
                    </div>
                    <div className="collapse-content">
                        <p>Enrolling in a course is simple. After creating an account and logging in, browse the course catalog, select the course you want to take, and click the 'Enroll' button. Follow the prompts to complete the enrollment process.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        Can I access the courses on multiple devices?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can access our courses on multiple devices, including your computer, tablet, and smartphone. We provide a responsive design for a seamless learning experience.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        What if I encounter technical issues while using the platform?
                    </div>
                    <div className="collapse-content">
                        <p>If you experience any technical issues, please visit our 'Contact Support' page and submit a support ticket. Our technical support team will assist you in resolving any problems you encounter.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How do I track my progress in a course?
                    </div>
                    <div className="collapse-content">
                        <p>You can track your course progress through your user dashboard. It will show your completed lessons, quiz scores, and any assignments submitted. This helps you stay organized and monitor your learning journey.</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        How do I cancel my enrollment in a course?
                    </div>
                    <div className="collapse-content">
                        <p>To cancel your enrollment in a course, go to your 'My Courses' page and click on the course you wish to unenroll from. You'll find an 'Unenroll' option there.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
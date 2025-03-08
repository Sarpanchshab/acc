import React from "react";

const StudentReview = () => {
    return (
        <div className="container-fluid">
            <div className="bg-slate-200  flex flex-col items-center p-6">
                <h1 className="text-black text-5xl font-bold mb-6  min-[320px]:text-center pb-8 "> Our Student Feedback</h1>

                {/* Mobile Screens Section */}
                <div className="flex flex-col md:flex-row gap-18 mb-6">
                    <img src="/img/studentreview/1.png" alt="App Screenshot 1" className="w-60 shadow-md rounded-4xl" />
                    <img src="/img/studentreview/2.png" alt="App Screenshot 2" className="w-60 shadow-md rounded-4xl" />
                    <img src="/img/studentreview/3.png" alt="App Screenshot 3" className="w-60 shadow-md rounded-4xl" />
                    <img src="/img/studentreview/4.png" alt="App Screenshot 3" className="w-60 shadow-md rounded-4xl" />
                    <img src="/img/studentreview/5.png" alt="App Screenshot 3" className="w-60 shadow-md rounded-4xl" />
                </div>
            </div>
        </div>
    );
};

export default StudentReview;
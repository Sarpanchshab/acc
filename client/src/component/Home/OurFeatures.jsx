import React from 'react';

function OurFeatures() {
    return (
        <section id="mu-features" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Hindi English Typing & Computer Skills</h2>
                    <p className="text-gray-600 mt-2">Prepare for CPCT and other government exams with expert-led training in Hindi and English typing, computer proficiency, and interactive learning sessions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <span className={`text-4xl text-blue-500 ${feature.icon}`}></span>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">{feature.title}</h4>
                            <p className="text-gray-600 mt-2">{feature.description}</p>
                            <a href="#" className="text-blue-500 font-medium mt-4 inline-block hover:underline">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    { icon: "fa fa-book", title: "Hindi English Typing", description: "Prepare for CPCT, SSC Stenographer C&D, MP High Court Stenographer, Rajasthan High Court, JJA Exam & all Govt. exams with typing practice in both Hindi and English." },
    { icon: "fa fa-users", title: "Expert Guidance", description: "Learn from experienced instructors who provide step-by-step guidance and personalized support for CPCT exam success." },
    { icon: "fa fa-laptop", title: "Comprehensive Computer Skills", description: "Master MS Office, operating systems, internet basics, and essential computer skills tested in CPCT and other government exams." },
    { icon: "fa fa-microphone", title: "Interactive Audio Lessons", description: "Improve learning with high-quality audio lessons covering key CPCT topics, explanations, and preparation tips." },
    { icon: "fa fa-film", title: "LIVE Classes & Mock Tests", description: "Join live sessions, take practice tests, and assess your readiness with real-time CPCT mock exams." },
    { icon: "fa fa-certificate", title: "Certification & Job Assistance", description: "Earn a recognized certification upon course completion and receive career support for government job exams requiring CPCT." }
];

export default OurFeatures;

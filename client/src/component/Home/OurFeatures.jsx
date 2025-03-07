import React from 'react';

function OurFeatures() {
    return (
        <section id="mu-features" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Our Platform Features</h2>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ipsa ea maxime mollitia, vitae voluptates, quod at, saepe reprehenderit totam aliquam architecto fugiat sunt animi!</p>
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
    { icon: "fa fa-book", title: "Hindi English Typing", description: "FOR CPCT, SSC STENOGRAPHER C&D, M.P HIGHCOURT STENOGRAPHER EXAM, RAJASTHAN HIGHCOURT, JJA EXAM & ALL GOVT. EXAM ETC...." },
    { icon: "fa fa-users", title: "Expert Teachers", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum." },
    { icon: "fa fa-laptop", title: "Online Learning", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum." },
    { icon: "fa fa-microphone", title: "Audio Lessons", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum." },
    { icon: "fa fa-film", title: "LIVE Classes", description: "Offers video classes and PDF notes for CPCT preparation. They also provide online mock tests for practice." },
    { icon: "fa fa-certificate", title: "Professional Certificate", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus non dolorem excepturi libero itaque sint labore similique maxime natus eum." }
];

export default OurFeatures;

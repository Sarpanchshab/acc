import { useState, useEffect } from "react";
import axios from "axios";

function LatestCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(4); // Default for desktop

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/api/getNumberCourse");
                setCourses(response.data.recentCourses);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError("Failed to load courses. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Handle screen size changes
    useEffect(() => {
        const updateCardsToShow = () => {
            const width = window.innerWidth;
            if (width < 640) { // mobile
                setCardsToShow(1);
            } else if (width >= 640 && width < 1024) { // tablet
                setCardsToShow(2);
            } else { // desktop
                setCardsToShow(4);
            }
        };

        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);

        return () => window.removeEventListener("resize", updateCardsToShow);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % courses.length);
    };

    const visibleCourses = courses.slice(currentIndex, currentIndex + cardsToShow);

    const coursesToShow =
        visibleCourses.length < cardsToShow
            ? [...visibleCourses, ...courses.slice(0, cardsToShow - visibleCourses.length)]
            : visibleCourses;

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 py-10 px-4 w-full">

            {/* Heading */}
            <h1 className="text-3xl font-bold uppercase mb-8 text-center bg-white text-transparent bg-clip-text">
                Latest Courses
            </h1>


            {loading && <p className="text-blue-500">Loading courses...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {courses.length > 0 && !loading && (
                <div className="relative flex items-center justify-center w-full max-w-[1500px]">

                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-900"
                    >
                        ❮
                    </button>

                    {/* Cards */}
                    <div className={`grid gap-8 mx-4 sm:mx-12 w-full`} style={{ gridTemplateColumns: `repeat(${cardsToShow}, minmax(0, 1fr))` }}>
                        {coursesToShow.map((course, index) => (
                            <div key={course.id || index} className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col w-full">
                                <img
                                    src={course.image?.url || "/default-image.jpg"}
                                    alt={course.title}
                                    className="w-full h-56 object-contain bg-white"
                                />

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                                    <p className="text-gray-600 mb-1">Duration: {course.duration}</p>
                                    <p className="text-gray-800 font-bold mb-4">₹{course.price}</p>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-auto">
                                        Get this course
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-2 bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-900"
                    >
                        ❯
                    </button>

                </div>
            )}
        </div>
    );
}

export default LatestCourse;

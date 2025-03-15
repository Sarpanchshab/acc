import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CourseDisplay() {
    const [courses, setCourses] = useState([]);
    const [visibleCourses, setVisibleCourses] = useState(12); // Initially show 12 courses
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/api/getAllCourse");
                setCourses(response.data.allCourse || []); // Ensure courses is always an array
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError("Failed to load courses. Please try again.");
                toast.error("Failed to load courses. Please try again."); // Show toast message for errors
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // Function to show more courses
    const showMoreCourses = () => {
        setVisibleCourses((prev) => prev + 12);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <div className="max-w-7xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Course List</h2>

                {loading && <p className="text-center text-blue-500">Loading courses...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {courses.length > 0 ? (
                        courses.slice(0, visibleCourses).map((course) => (
                            <div key={course._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                                <img
                                    src={course.image?.url || "/default-image.jpg"}
                                    alt={course.title || "Course"}
                                    className="w-full h-40 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-bold text-gray-700 text-center">{course.title || "No Title"}</h3>
                                <p className="text-gray-600">Duration: {course.duration || "N/A"}</p>
                                <p className="text-gray-800 font-semibold">Price: {course.price || "Free"}</p>
                            </div>
                        ))
                    ) : (
                        !loading && <p className="text-center text-gray-500">No courses available.</p>
                    )}
                </div>

                {/* Show More Button */}
                {visibleCourses < courses.length && (
                    <div className="text-center mt-6">
                        <button
                            onClick={showMoreCourses}
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseDisplay;

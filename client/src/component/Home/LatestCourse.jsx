import { useState, useEffect } from "react";
import axios from "axios";

function LatestCourse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("http://localhost:4700/api/getNumberCourse");
                setCourses(response.data.recentCourses);
                console.log(response.data.recentCourses)
            } catch (error) {
                console.error("Error fetching courses:", error);
                setError("Failed to load courses. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className=" flex items-center justify-center bg-gray-100 p-6">
            <div className="max-w-7xl w-full">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Course List</h2>

                {loading && <p className="text-center text-blue-500">Loading courses...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <div key={course.id} className="bg-white shadow-lg rounded-lg p-4 ">
                            <img
                                src={course.image?.url || "/default-image.jpg"}
                                alt={course.title}
                                className="w-full h-50 object-cover rounded-md mb-4"
                            />

                            <h3 className="text-xl font-bold text-gray-700">{course.title}</h3>
                            <p className="text-gray-600">Duration: {course.duration}</p>
                            <p className="text-gray-800 font-semibold">Price: ${course.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LatestCourse;

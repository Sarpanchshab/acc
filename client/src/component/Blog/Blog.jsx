import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from 'framer-motion';
import { Link } from "react-router";

const Blog = () => {
  const [posts, setPosts] = useState([]); // Ensure it's an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/getAllBlog")
      .then((res) => {
        // console.log("API Response:", res.data.allBlog); // Debugging
        if (Array.isArray(res.data.allBlog)) {
          setPosts(res.data.allBlog);
        } else {
          setPosts([]); // Ensure posts is always an array
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
        setError("Failed to load posts");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (

    <div className="container mx-auto my-10 p-6 md:p-8 border rounded-2xl shadow-xl bg-gray-900">
      <div className="max-w-8xl mx-auto p-4 md:p-6 rounded-xl">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 md:mb-8 text-yellow-400 drop-shadow-lg">
          LATEST VACANCY & IMPORTANT UPDATES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post) => (
            <motion.div
              key={post._id} // ✅ Fixed: Using _id instead of id
              className="p-4 md:p-6 border rounded-xl shadow-xl bg-gray-100 transition-all duration-200 relative overflow-hidden group hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
              <Link
                to={`/blogview/${post._id}`} // ✅ Fixed: Template literals for cleaner code
                className="text-base md:text-lg hover:underline font-semibold text-blue-500 hover:text-black transition-colors duration-150 relative z-10"
              >
                {post.name}
              </Link>
            </motion.div>
          ))}
        </div>


      </div>
    </div>

  );
};

export default Blog;


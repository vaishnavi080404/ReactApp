import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (err) {
      console.log("Error fetching blog:", err);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <div className="w-full max-w-4xl mx-auto px-4 mt-26 mb-20">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
          >
            ← Back
          </button>
        </div>

        {/* Main Content */}
        {loading ? (
          <p className="text-center font-semibold text-xl text-gray-700">
            Loading...
          </p>
        ) : blog ? (
          <div className="space-y-10 mt-10">
            <BlogDetails post={blog} />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Related Blogs
              </h2>
              <div className="space-y-8">
                {relatedBlogs.map((post) => (
                  <div key={post.id}>
                    <BlogDetails post={post} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg font-semibold text-red-500">
            No Blog Found
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blog() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="min-h-screen w-full flex justify-center items-start overflow-y-auto px-4 py-8 bg-gray-100 mt-[70px] mb-[70px]">
      <div className="w-full max-w-3xl flex flex-col gap-y-10">
        {loading ? (
          <div className="w-full min-h-[80vh] flex justify-center items-center">
            <p className="text-center font-bold text-3xl text-blue-600">Loading...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="w-full min-h-[80vh] flex justify-center items-center">
            <p className="text-center font-bold text-3xl text-red-500">No Blogs Found!</p>
          </div>
        ) : (
          posts.map((post) => (
            <BlogDetails key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}

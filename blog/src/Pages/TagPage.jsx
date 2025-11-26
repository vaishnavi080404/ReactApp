import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex flex-col items-center w-full mt-6 px-4">
        {/* Top Section: Back Button + Heading */}
        <div className="w-full max-w-4xl mt-16">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
          >
            ← Back
          </button>

          <h2 className="mt-4 text-3xl font-bold text-center text-gray-800">
            Blogs Tagged with <span className="text-blue-600">#{tag}</span>
          </h2>
        </div>

        {/* Blog Posts */}
        <Blog />

        {/* Pagination */}
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default TagPage;

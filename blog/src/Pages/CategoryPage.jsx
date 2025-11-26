import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Blogs from '../components/Blog';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

const CategoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const category = location.pathname.split('/').at(-1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="flex flex-col items-center w-full mt-26 px-4">
        <div className="w-full max-w-4xl mb-6">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
          >
            ← Back
          </button>

          {/* Category Title */}
          <h2 className="mt-4 text-3xl font-bold text-center text-gray-800">
            Blogs on <span className="text-green-600 capitalize">{category}</span>
          </h2>
        </div>

        {/* Blog List */}
        <Blogs />

        {/* Pagination */}
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

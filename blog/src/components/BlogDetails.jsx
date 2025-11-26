import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}
      
      >
        <span className="font-bold text-[18px] hover:underline">{post.title}</span>
      </NavLink>
      <p className="mt-2">
        By
        <span className="italic text-[15px]">{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-[13px] mt-1">Posted on {post.date}</p>
      <p>{post.content}</p>
      <div className="flex gap-x-2">
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-blue-700 font-bold text-[14px] underline">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

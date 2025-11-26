import Card from "./Card";
import { useState } from 'react';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (!courses) return [];
    if (category === "All") {
      return Object.values(courses).flat();
    } else {
      return courses[category] || [];
    }
  }

  return (
    <div className="w-11/12 max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;

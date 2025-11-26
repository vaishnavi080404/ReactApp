import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = ({ course, likedCourses, setLikedCourses }) => {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Removed from liked");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked!");
    }
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <div className="relative">
        <img src={course.image.url} alt="course" className="w-full h-48 object-cover" />
        <button
          onClick={clickHandler}
          className="absolute right-3 bottom-[-16px] bg-white rounded-full shadow p-2"
        >
          {likedCourses.includes(course.id)
            ? <FcLike fontSize="1.75rem" />
            : <FcLikePlaceholder fontSize="1.75rem" />
          }
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-[#1a1a2e]">{course.title}</h2>
        <p className="text-gray-600 mt-2 text-sm">
          {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;

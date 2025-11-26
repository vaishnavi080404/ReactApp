const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => setCategory(data.title)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition duration-300 border 
            ${category === data.title
              ? "bg-[#00feba] text-black border-[#00feba] scale-105 shadow-md"
              : "bg-white text-gray-700 border-gray-300 hover:scale-105 hover:shadow"
            }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState(null);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] font-sans">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      <Cards courses={courses} category={category} />
      <ToastContainer />
    </div>
  );
}

export default App;

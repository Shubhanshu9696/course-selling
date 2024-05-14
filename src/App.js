
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import Spinner from './components/Spinner';

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(data);
      setCourses(output.data)
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {

    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col justify-items-center justify-center main-container'>
      
        <Navbar />
      
      <div className='filter-container'>
      <Filter
          filterData={filterData}
          category = {category}
          setCategory = {setCategory}
        />
      </div>

      <div >
        {
          loading ? (<Spinner />) :
          (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
  );
}

export default App;
import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";
const Card = (props) => {
  let course = props.course; 
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle se like hua pada tha 
      setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) ) );
      toast.warning("like removed");
    }
    else{
      //pehle se like nahi hai ye course 
      //insert harna hei ye liked course me
      if(likedCourses.length === 0)
        setLikedCourses([course.id]);
      else
        setLikedCourses((prev) => [...prev,course.id]);

      toast.success("Liked Successfully");
    }
  }
  return (
    <div className='card'>
      <div>
        <img src={course.image.url} alt={course.image.alt} className='image'></img>
      </div>

      <div className='like-btn-container'>
        <button className='like-button' onClick={clickHandler}>
          {
            likedCourses.includes(course.id) ? (<FcLike />) : (<FcLikePlaceholder/>)
          }
        </button>
      </div>

      <div className='course-info'>
        <p className='courseName'>{course.title} </p>
        <p className='courseDescription'>
          {
            course.description.length >100 ? (course.description.substr(0,120)) + "..." : (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card
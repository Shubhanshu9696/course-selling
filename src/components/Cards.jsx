import React, { useState } from 'react'
import Card from './Card';
// import { useState } from 'react';
const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else {
            // sirf specific category ka data array krenge 
            return courses[category];
        }
    }
    return (
        <div className='cards'>
            {
                getCourses().map((course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                ))

            }
        </div>
    )
}
export default Cards; 
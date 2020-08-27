import React from 'react';
import './Course.css';

const Course = (props) => {

    console.log(props);
    const {img,name,code,price}= props.courseName;
    return (
        <div className='main-content'>
            
            <div className='course-content'>
                <h1>Course : {name}</h1>
                <h2> Price :{price} </h2>
                <h3>Code : {code}</h3>
                <button onClick={()=>props.enrollNow(props.courseName)}> Enroll Now </button>
            </div>
            <div>
                <img src={img} alt=""/>
            </div>
            {/* <h1>This is a course</h1>
            <h2>{props.courseName.name}</h2> */}
        </div>
    );
};

export default Course;
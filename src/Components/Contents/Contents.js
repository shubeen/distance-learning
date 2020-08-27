import React from 'react';
import './Contents.css';
import fakeData from '../../fakeData/courseList';
import Cart from '../Cart/Cart'

import { useState } from 'react';
import Course from '../Course/Course';

const Contents = () => {
    // console.log(fakeData);


const first12 = fakeData.slice(0,12)
 const [courseName, setCourseName] = useState(first12);

 const [cart, setCart]= useState([]);

 const enrollNow = (course) => {
     console.log('button clicked' ,course);
     const newCart = [...cart, course];
     setCart(newCart);
 }


    return (
        <div className='main'>
            <div className='map-data'>
            {
                // courseName.map(courseName => <Course name={courseName.name} code={courseName.code} price={courseName.price} picture={courseName.img}></Course> )
            }
    {
        courseName.map(courseName=> <Course enrollNow={enrollNow} courseName={courseName}></Course>)
    }
            </div>
            <div className='cart-container'>
                {/* <h1> Your Wish List</h1>
                <h3>Course Order : {cart.length}</h3> */}
                <Cart cart={cart}></Cart>
                
            </div>
            
        </div>
        
        
    );
};

export default Contents;
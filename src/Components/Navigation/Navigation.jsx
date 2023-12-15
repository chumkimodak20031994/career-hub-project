import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='px-6 py-4 bg-yellow-50 mx-4 my-4 sm: 640px md:768px lg:1024px xl:1280px mx=4 sm:d-flex'>
      <div className='relative flex items-center justify-between p-2'>
        <Link
          aria-label='StartCareer'
          title='StartCareer'
          className='inline-flex items-center'
        >
          <span className='ml-4 text-xl font-semibold tracking-wide text-gray-800 p-4'>
          StartCareer
          </span>
        </Link>
        <ul className='items-center hidden space-x-8 lg:flex mr-7'>
          <li>
            <Link to='/'>Start
            </Link>
            </li>
            <li>
            <Link to='/About Us'>About US</Link>
            </li>
            <li>
            <Link to='/Interview'>Interview</Link>
            </li>
            <li>
            <Link to='/Result'>Result</Link>
          </li>
          <li>
           <Link to='/applynow'>Appied job</Link>
           </li>
          </ul>
          <div>
            <button className='bg-gradient-to-r  from-blue-500 to-purple-500 text-base text-white px-5 py-4 rounded-md'>Learn More</button>
          </div>
        </div>
  </div>
    );
};

export default Navigation;
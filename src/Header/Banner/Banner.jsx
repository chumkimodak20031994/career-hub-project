import React from 'react';
import photo from "../Banner/P3OLGJ1 copy 1.png";
const Banner = () => {
    return (
        <div>
            <div className='bg-yellow-50 m-4'>
            <div className='flex flex-col-reverse md:flex-row  gap-5 max-w-4xl mx-auto px-5 py-2'>
                <div className='my-auto'>
                    <h1 className='text-4xl text-center md:text-left font-black py-4 mr-8 break-words'>One Step <br />  Closer To Your <br /> <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-4xl font-black"> Dream Job</span></h1>
                    <p className='text-black text-center md:text-left py-4  lg:ml-1 break-words w-11/12 md:w-96 mx-auto'>Explore thousands of job opportunities with all  the  information you need. Its your future. Come find it. Manage all  your job application from start to finish.</p>
                    <div className='mx-auto w-full text-center md:text-left'>
                        <button className=' bg-gradient-to-r  from-blue-500 to-purple-500 text-base text-white px-5 py-2  rounded-md '>Get Started</button>
                    </div>
                </div>
                <div className='my-5'>
                    <img className='object-fill w-full h-auto' src={photo} alt="photo" />
                </div>
            </div>
        </div>
       
        </div>
    );
};

export default Banner;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Featurejob from '../Featurejob/Featurejob';

const Companyjobs = () => {
    const {details} = useLoaderData();
    const [seeMore, setSeeMore] = useState(false);
    const handleShowAll = () => {
        setSeeMore(!seeMore);
    }
    return (
        <div>
         <div className='text-center py-6 w-11/12 mx-auto'>
                <h3 className='text-3xl font-bold py-4'>Featured Jobs</h3>
                <p className='text-base pb-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl justify-items-start mx-auto my-5'>
                {
                 details.slice(0, seeMore ? 6 : 4).map(detail=><Featurejob key={detail.id}detail={detail}></Featurejob>)   
                }
                </div>   
                <div className=' max-w-4xl mx-auto my-5 grid grid-cols-1 place-content-center'>
                <button className=' bg-gradient-to-r  from-blue-500 to-purple-500 text-base text-white px-5 py-2 mx-auto  rounded-md' onClick={handleShowAll} >
                    {
                        seeMore ? "See Less" : "See More"
                    }
                </button>

            </div>
        </div>
    );
};

export default Companyjobs;
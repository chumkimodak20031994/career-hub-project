import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Company from './Company';
import Banner from './Banner/Banner';
import Companyjobs from './Companyjobs/Companyjobs';


const Header = () => {
    // const data=useLoaderData();
    const {jobdetails} = useLoaderData();
    console.log(jobdetails);
    return (
        <div>
            <Banner></Banner>
          <div className='text-center py-6 w-11/12 mx-auto'>
                <h3 className='text-3xl font-bold py-4'>Job Category List</h3>
                <p className='text-base pb-2 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl justify-items-center  mx-auto my-5'>
                {
                    jobdetails.map(jobdetail=><Company key={jobdetail.id}jobdetail={jobdetail}></Company>)
                }
                    </div> 
                    <Companyjobs></Companyjobs> 
        </div>
    );
};

export default Header;
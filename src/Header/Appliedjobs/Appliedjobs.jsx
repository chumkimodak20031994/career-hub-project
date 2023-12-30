import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
  import Nojob from './Nojob/Nojob';
 import Fulltimejob from './Fulltimejob/Fulltimejob';
import { getShoppingCart } from '../../Components/utilitig/fakedb';

const Appliedjobs = () => {
 const jobDatas =useLoaderData();
 const storedJob =getShoppingCart();
 
 console.log(storedJob);
    const savedJob = [];

    for (const id in storedJob) {
        const addedJob = jobDatas.find(detail => detail.id === id);
        savedJob.push(addedJob);
        console.log(savedJob);
    }
    return (
        <div>
         <div className="container max-w-6xl mx-auto px-5 py-0 bg-yellow-50 ">
                <div className="bg-image top-left">
                
                <div className="bg-image bottom-right">
                <img src='/src/assets/All images/Vector-1.png'></img>
                <div className="grid h-32 place-content-center">
                    <h1 className='text-2xl font-bold'>Applied Jobs</h1>
                </div>
                </div>
                </div>
               
                <div className='py-20'>
                {savedJob.length === 0 ? <Nojob></Nojob> :

savedJob.map((job, i) => <Fulltimejob job={job} key={i}></Fulltimejob>)

}
</div>
          </div>
            <div className='ml-80'>
            <Link
        to='/'
        className='px-8 py-3 font-semibold rounded bg-yellow-400 text-gray-900 border-2 border-violet-500 ml-80'
      >
        Back to homepage
      </Link>
      
        </div>
        </div>
    );
};

export default Appliedjobs;
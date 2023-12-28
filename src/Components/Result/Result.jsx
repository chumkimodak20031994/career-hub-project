import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
    return (
        
        <div className='max-w-md text-center ml-80'>
          <h1 className='font-semibold text-3xl p-4 ml-60'>Error page</h1>
          <h2 className='mb-4 font-extrabold text-9xl text-gray-600 ml-60'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-4 ml-60'>
            not found
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-yellow-400 ml-60 text-gray-900 border-2 border-violet-500
            '
          >
            Back to homepage
          </Link>
        </div>    
        
    );
};

export default Result;
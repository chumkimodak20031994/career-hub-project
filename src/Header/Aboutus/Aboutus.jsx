import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const Aboutus = () => {
    const data = useLoaderData();
    return (
        <div className='max-w-5xl mx-auto'>
        <div className='my-5'>
            <h1 className='text-center text-5xl'>Assignment Result</h1>
        </div>

        <div className='w-full h-64 mx-auto'>
            <ResponsiveContainer >
                <AreaChart data={data} margin={{ top: 50, right: 20, bottom: 5, left: 0 }}>
                    <Area type="monotone" dataKey="mark" stroke="#000000" />
                    <CartesianGrid stroke="#000" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </div>

    </div>
    );
};

export default Aboutus;
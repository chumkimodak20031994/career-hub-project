 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Result from './Components/Result/Result.jsx';
import Intrview from './Components/Interview/Intrview.jsx';
// import Applynow from './Components/Applynow/Applynow.jsx';
import Header from './Header/Header.jsx';
import Aboutus from './Header/Aboutus/Aboutus.jsx';
import Viewdetails from './Header/Viewdetails/Viewdetails.jsx';
import Appliedjobs from './Header/Appliedjobs/Appliedjobs.jsx';
// import AppliedJobs from './Components/utilitig/Loader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

  children:[
   
    {
      path:'/',
      element:<Header></Header>,
    // loader:()=>fetch('jobdetails.json')
    loader: async () => {
      const res1 = await fetch('/public/jobdetails.json');
      const jobdetails = await res1.json();
       const res2 = await fetch('/public/details.json');
      const details = await res2.json();
       return {jobdetails,details};
    },
      
    },
    {
path:'/details/:id',
element:<Viewdetails></Viewdetails>,
loader: async ({ params }) => {
const res2 = await fetch('/public/details.json');
const details=await res2.json();
const Viewdetails=details.find(detail=>detail.id==params.id);
return Viewdetails;

    },
  },
  {
    path:'/applynow',
    element:<Appliedjobs></Appliedjobs>,
    loader: async ({ params }) => {
      const res2 = await fetch('/public/details.json');
      const details=await res2.json();
      return details
    }
  },
   
     {
       path:'/About US',
      element:<Aboutus></Aboutus>,
      loader: () => fetch('/public/assighmentdata.json'),
     },
     {
      path:'/Interview',
      element:<Intrview></Intrview>,
    },
    {path:'/Result',
  element:<Result></Result>,
  },
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

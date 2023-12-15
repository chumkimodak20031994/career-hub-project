import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
// import ErrorPage from './Components/ErrorPage/ErrorPage';


const App = () => {
  return (
    <div>
     
  <Navigation></Navigation>
  
  <Outlet></Outlet>
  <Footer></Footer>
  {/* <ErrorPage></ErrorPage> */}
    </div>
    
  );
};

export default App;
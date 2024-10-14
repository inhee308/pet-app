import React from 'react';
import MainSlider from '../componenets/MainSlider';
import Best from '../componenets/Best';
import FreshBox from '../componenets/FreshBox';


const MainPage = () => {
   return (
      <div>
         <section className='section01'>
            <MainSlider />
         </section>
         <section className='section02'>
            <Best />
         </section>
         <section className='section03'>
            <FreshBox />
         </section>
      </div>
   );
};

export default MainPage;
import React from 'react';
import MainSlider from '../componenets/MainSlider';
import Best from '../componenets/Best';
import FreshBox from '../componenets/FreshBox';
import New from '../componenets/New';


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
         <section className='section04'>
            <New />
         </section>
      </div>
   );
};

export default MainPage;
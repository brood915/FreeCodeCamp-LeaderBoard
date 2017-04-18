import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DataContainer from './DataContainer';



function MainContainer () {
	    return (
      <div>
    <Header />
        <DataContainer />
        <Footer />
        </div>
    );
}


export default MainContainer;

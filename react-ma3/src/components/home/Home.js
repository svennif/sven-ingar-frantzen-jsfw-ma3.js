import React from 'react';
import Heading from '../Heading';
import HomeContent from './HomeContent';


function Home() {
    return (
        <div>
            <Heading content='HOME'/>
            <HomeContent content='This is a paragraph'/>
            <HomeContent content='This is also a paragraph'/>
        </div>
    )
}

export default Home;

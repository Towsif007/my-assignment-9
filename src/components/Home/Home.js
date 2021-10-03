import React, { useEffect, useState } from 'react';
import ExtraSection from '../ExtraSection/ExtraSection';
import Homedata from '../Homedata/Homedata';
import './Home.css';

const Home = () => {
    const [homes, setHome] = useState([]);

    useEffect( ()=>{
        fetch('./homedata.json')
        .then(res => res.json())
        .then(data =>  setHome(data))
    }, []);

    return (
        <div>
            <ExtraSection></ExtraSection>
            {
                homes.map(homedata => <Homedata homedata={homedata} ></Homedata> )
            }
    </div>    
    );
};

export default Home;
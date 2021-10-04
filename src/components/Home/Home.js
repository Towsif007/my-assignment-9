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
        <div >
            <ExtraSection className="extra-section"></ExtraSection>
            <div className="collumn">
            {
                homes.map(homedata  => <Homedata
                    key={homedata.id}
                    homedata={homedata} ></Homedata> )
            }
            </div>
    </div>    
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('./details.json')
        .then(res => res.json())
        .then(data =>  setServices(data))
    }, []);
    return (
        <div>
         <h1>Courses we offer</h1>
        <h3>Best IELTS and English language teaching center.</h3>
        {
                services.map(service => <Service service={service} ></Service>)
            }
        </div>
    );
};

export default Services;
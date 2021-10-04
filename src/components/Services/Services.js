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
        <div className="py-5">

        <div className="text-danger">
         <h1>Courses We Offer</h1>
        <h3>Best IELTS and English language teaching center.</h3>
        </div>
        {
                services.map(service => <Service 
                    key= {service.id}
                    service={service} ></Service>)
            }
        </div>
    );
};

export default Services;
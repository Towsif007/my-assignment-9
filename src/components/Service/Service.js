import React from 'react';

const Service = (props) => {
    const {coursename, duration, coursefee, img} = props.service;
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
    <div className="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Course Name: {coursename}</h5>
        <h5 className="card-text">Duration: {duration}</h5>
        <h5 className="card-text">Course Fee: {coursefee}</h5>
      </div>
    </div>
  </div>
        </div>
        </div>
    );
};

export default Service;
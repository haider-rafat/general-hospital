import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { name, description, img, id } = service;
    return (
        <div className="service">
            <div className="">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{description}</h5>
                <Link to={`/product/${id}`}><button className="btn btn-danger btn-sm p-3 m-3" >View Details</button></Link>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Ductor = ({ ductor }) => {
    const { name, Qualification, img, post, Visiting } = ductor;
    return (
        <div className="col-lg-4 col-md-4 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{Qualification}</h5>
            <h5 className="text-danger">{post}</h5>
            <h5>{Visiting}</h5>
        </div>
    );
};

export default Ductor;
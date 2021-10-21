import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from '../../Images/404.png'

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <div className="pt-5">
                <Link to="/">
                    <Button variant="outline-success" size="" >Go To Back</Button>{' '}
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
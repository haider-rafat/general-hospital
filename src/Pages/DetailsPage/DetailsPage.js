import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const DetailsPage = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const detailsFound = data.find(data => data.id == id)
                setDetail(detailsFound)
            })
    }, [])

    return (
        <div style={{ height: "500px" }}>
            <h1>{detail.name}d</h1>
            <h3>{detail.description}</h3>
            <p>The Accident and Emergency Services Department of Central Hospital Limited is a 24-hour, full service emergency department, responding promptly with the highest degree of commitment to delivering quality emergency care. This department is the mirror of Central Hospital Limited where mostly very critically ill and injured patients are received and managed.</p>

            <p>Central Hospital Limited Emergency and Accident department is supported by a dedicated team of health workers comprising of Emergency Medical Officers, Nursing staffs and paramedics. The department is well equipped with observation beds, procedure room and has all sorts of equipments to treat critical patients. Specialty rooms are maintained to handle cases of cardiovascular illness, trauma, orthopedic injuries and pediatric patients.</p>

            <Link to="/">
                <Button variant="outline-success" size="" >Go To Back</Button>{' '}
            </Link>
        </div>
    );
};

export default DetailsPage;
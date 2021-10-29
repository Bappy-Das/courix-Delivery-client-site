import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is single service {id}</h1>
            <Link to="/shipping">
                <Button>Send Parcel <FaArrowRight /></Button>
            </Link>
        </div>
    );
};

export default ServiceDetails;
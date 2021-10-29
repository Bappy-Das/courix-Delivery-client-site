import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/0ec0dbf1e9a008acb9955d3246970e15.gif'
import './NotFound.css'
const NotFound = () => {
    return (

        <div class="text-center">
            <img className="img-fluid" src={notfound} alt="" srcset="" />
        </div>

    );
};

export default NotFound;
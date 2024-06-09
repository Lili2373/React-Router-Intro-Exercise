import React from "react";
import { Link } from "react-router-dom";
import './Styles.css'; // Import the CSS file

const Snack = ({ name }) => {
    return (
        <div className="container">
            <h1 className="snack">{name}</h1>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default Snack;

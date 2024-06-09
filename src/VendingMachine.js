import React from "react";
import { Link } from "react-router-dom";
import './Styles.css'; // Updated to match the actual file name

const VendingMachine = () => {
    return (
        <div className="container">
            <h1>Vending Machine</h1>
            <h2>Select a snack:</h2>
            <ul>
                <li><Link to="/chips">Chips</Link></li>
                <li><Link to="/soda">Soda</Link></li>
                <li><Link to="/candy">Candy</Link></li>
            </ul>
        </div>
    );
};

export default VendingMachine;

import React from "react";

export default function Card({ image, subject, days }) {
    var isSoon = false;
    if (days <= 10) {
        isSoon = true;
    }
    return <div className="card">
        <img 
        className="picture"
        src={image}
        />
        <h1>{subject}</h1>
        {isSoon && <p className="soon">upcoming!</p>}
        <input placeholder="type anything..."></input>
    </div>;
}
import React, { useState } from "react";
import Like from "./Like";

export default function TotalLike() {
    const [cnt, setCnt] = useState(0);
    const handleClick = () => setCnt((prev) => prev + 1)

    return (
    <div>
        <span> total like : {cnt} {cnt > 10 ? 'hot' : 'good'}</span>
        <Like
            onClick={handleClick}
        />
        <Like
            onClick={handleClick}
        />
    </div>
    );
}
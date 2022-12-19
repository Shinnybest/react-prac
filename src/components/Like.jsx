import React, { useState } from "react";

export default function Like({ onClick }) {
    const [cnt, setCnt] = useState(0);

    return (
    <div>
        <span>좋아요 : {cnt}</span>
        <button onClick={() => {
            setCnt(cnt + 1);
            onClick();
        }}>좋아요 클릭!</button>
    </div>
    );
}
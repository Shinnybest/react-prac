import React, { useState } from "react";
import Cards from "./Cards";

export default function AppCard() {
    const [showCards, setShowCards] = useState(true);

    return <div>
        <button onClick={() => setShowCards((show) => !show)}>button</button>
        {showCards && <Cards />}
        </div>
}
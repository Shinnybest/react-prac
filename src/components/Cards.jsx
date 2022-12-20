import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards({}) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('data/card.json')
        .then((res) => res.json())
        .then((data) => {
            console.log("데이터 추출완료!");
            setCards(data);
        });
        return () => {
            console.log("데이터 청소완료!");
        }
    }, [])
    
    return <>
    {cards.map((card) => <Card image={card.image} subject={card.subject} days={card.days} />)};
    </>
    
}
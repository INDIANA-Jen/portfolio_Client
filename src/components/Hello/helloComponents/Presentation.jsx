import React from 'react'
import PresentationCard from '../helloPages/PresentationCard'

const presentationData = [
    {
    salutation: 'Hi all, I am',
    name: 'Michael Weaver',
    profession: 'Front-end developer',
    }
];

export default function Presentation() {
    return (
    <div>
        {presentationData.map((item) => (
            <PresentationCard
            
            salutation={item.salutation}
            name={item.name}
            profession={item.profession}
        />
        ))}
    </div>
    );
}

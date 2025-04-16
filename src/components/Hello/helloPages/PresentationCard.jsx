import React from 'react'

export default function PresentationCard({salutation, name, profession}){

    return (

        <div>
            <p className='style'>{salutation}</p>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            {/*
                    <p>
                <span></span>
                <span></span>
                <a></a>
            </p> 
            */}
            
        </div>
);
}

import React from 'react';
import redCanImg from '../assets/red_can_v2.png';

export default function RedCan({ className = '' }) {
    return (
        <div className={`relative flex flex-col items-center justify-start ${className}`}>
            <img
                src={redCanImg}
                alt="Always Tired Red Can"
                className="w-[300px] md:w-[480px] max-w-[85vw] h-auto drop-shadow-2xl filter [filter:drop-shadow(10px_10px_0_rgba(0,0,0,1))]"
            />
        </div>
    );
}

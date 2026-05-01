import React from 'react';
import purpleCanImg from '../assets/purple_can_v2.png';

export default function PurpleCan({ className = '' }) {
    return (
        <div className={`relative flex flex-col items-center justify-start ${className}`}>
            <img
                src={purpleCanImg}
                alt="Always Tired Purple Can"
                className="w-[300px] md:w-[480px] max-w-[85vw] h-auto drop-shadow-2xl filter [filter:drop-shadow(10px_10px_0_rgba(0,0,0,1))]"
            />
        </div>
    );
}

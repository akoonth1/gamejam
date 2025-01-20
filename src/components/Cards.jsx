import { useState, useContext } from 'react';
import { StatsContext } from './StateContext.jsx';

export const Cards = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    let CardNumber = 1;
    return (
        <div className='cards'>
            <button
                onClick={handleClick}
                style={{ 
                    backgroundColor: active ? 'green' : 'red', 
                    color: 'white',
                    padding: '10px'
                }}
            >
                Card {CardNumber}
            </button>
        </div>
    );
}

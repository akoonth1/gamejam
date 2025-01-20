import { useState, useContext } from 'react';
import { StatsContext } from './StateContext.jsx';
import './Gameboard.css';

export const Gameboard = () => {
    const { Health, Wealth, Friends, Education, Fame, Luck, Round } = useContext(StatsContext);

    return (
    <>
            <h1>Gameboard {Round}</h1>

        <div className='stats'>

            <p> Health: {Health} </p> <br />
            <p> Wealth: {Wealth} </p>
            <p> Friends: {Friends} </p>
            <p> Education: {Education} </p>
            <p> Fame: {Fame} </p>
            <p> Luck: {Luck} </p>
        </div>
    </>
    );
}
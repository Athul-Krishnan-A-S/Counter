import React, { useState } from 'react'
import { Button } from '../button/Button';
import './counter.css';

export const Counter = () => {

    const [count, setCount] = useState(0);
    const [range, setRange] = useState(1);

    const addCount = () => {
        setCount(count + parseInt(range));
    }
    const decreaseCount = () => {
        setCount(count - range);
    }
    const handleNumberChange = (event) => {
        setRange(event.target.value);
    }
    const setToZero = () => {
        setCount(0);
    }

    return (
        <div className='counter-container'>
            <p>{count}</p>
            <div className='buttons-container'>
                <Button value='Add' onclick={() => addCount} />
                <Button value='Decrease' onclick={() => decreaseCount} />
                <Button value='Set To Zero' onclick={() => setToZero} />
                <input type='number' placeholder='range' onChange={handleNumberChange}></input>
            </div>
        </div>
    )
}

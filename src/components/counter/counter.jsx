import React, { useState } from 'react'
import { Button } from '../button/Button';

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

    return (
        <div>
            <p>{count}</p>
            <div className='buttons-container'>
                <Button value='Add' onclick={() => addCount} />
                <Button value='Decrease' onclick={() => decreaseCount} />
                <input type='number' placeholder='action value' onChange={handleNumberChange}></input>
            </div>
        </div>
    )
}

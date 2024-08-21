import React from 'react'

export const Button = ({ onclick, className, value }) => {
    return (
        <button onClick={onclick()} className={className}>{value}</button>
    )
}

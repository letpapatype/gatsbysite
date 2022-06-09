import React from 'react'

const Frame = ({ children }) => {
    return (
        <div>
            <h1> This is the page tile</h1>
            { children }
        </div>
    )
}

export default Frame
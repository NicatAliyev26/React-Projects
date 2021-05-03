import React from 'react'

export default function Navbar() {
    return (
        <div className="words">
            <h1>Lastest News</h1>
            <p>Covering March & April 2021</p>
            <p>Time:{new Date().toLocaleTimeString()}</p>
        </div>
    )
}


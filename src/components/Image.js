import React from 'react'
import './Image.css'


const Image = ({src, alt}) => {
    return (
        <div className="image-container">
            <img src={src} alt={alt} loading="lazy" className="image"/>
        </div>
    )
}

export default Image
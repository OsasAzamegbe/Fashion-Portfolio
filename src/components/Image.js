import React from 'react'
import './Image.css'


const Image = ({src, alt, width, height}) => {
    return (
        <div className="image-container">
            <img style={{width, height}} src={src} alt={alt} loading="lazy" className="image"/>
        </div>
    )
}

export default Image
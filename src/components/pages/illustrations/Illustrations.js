import React from 'react'
import './Illustrations.css'

import {imageObjs} from './Data'
import Image from '../../Image'


const Illustrations = () => {
    return(
        <div className="illustrations">
            <h1>PORTFOLIO</h1>
            {imageObjs.map(
                (image, index) => <Image {...image} key={index}/>
            )}
        </div>
    )
}

export default Illustrations
import React from 'react'
import './About.css'

import {Link} from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'
import Image from '../../Image'


const About = () => {
    return (
        <div className="about">
            <header className="about-header"><h1>ABOUT</h1></header>
            <section className="about-section">
                <Image width="40vmin" height="40vmin" src="/images/profile.webp" alt="Mobola Ande profile" />
                <div className="about-description-container">
                    <p className="about-headliner">
                        Mobola Andé is a Nigerian self-taught womenswear fashion illustrator based in Lagos, Nigeria.
                    </p>
                    <p className="about-text">
                        <br/>
                        She thinks of fashion and design as her alter ego. Mobola draws inspiration for her fashion illustration from within. Her designs are based on her ever dynamic fashion tastes and subtle ingenuity with colors. Mobola's style is comforting, ingenious and expressive. 
                        <br/><br/>Mobola's ultimate goal as an artist is to produce high quality wears that keep challenging design possibilities, pioneer new frontiers in Fashion whilst commandeering timeless aesthetics.
                    </p>
                </div>
            </section>
            <div className="about-contact">
                <div className="about-contact-items">
                    <p>mobola240@gmail.com </p>
                    <Link to="//www.instagram.com/ande.illus_/" target="_blank" rel="noreferrer" className="instagram-icon">
                        <FaInstagram/>
                    </Link>
                    <p>Lagos, Nigeria.</p>
                </div>
            </div>          
        </div>
    )
}

export default About
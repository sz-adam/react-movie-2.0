import '../styles/Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default function Footer() {
    const socialMediaElements = [
        { name: "Facebook", href: "https://facebook.com", icon: <BsFacebook /> },
        { name: "Instagram", href: "https://instagram.com", icon: <BsInstagram /> },
        { name: "Twitter", href: "https://twitter.com", icon: <BsTwitter /> },
    ];

    return (
        <div className="footer">
            <div className='socialMedia'>
                {socialMediaElements.map((element, index) => (
                    <span className='social' key={index} >
                        <a href={element.href}> {element.icon} </a>
                     
                    </span>
                ))}
               
            </div>

        </div>
    )
}
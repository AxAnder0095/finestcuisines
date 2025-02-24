import './FooterStyles.css'
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaSquareInstagram} from "react-icons/fa6";

function Footer() {
    return (
        <div className='container-fluid'>
            <div className='row d-flex justify-content-center p-5' id='footer-container'>
                <div className='col-3 text-center'>
                    <ul style={{ listStyleType: 'none' }}>
                        <li><h4>About us</h4></li>
                        <li>About</li>
                        <li>Nutrition</li>
                        <li>Locations</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h4>Social Media</h4>
                    <span className='socials'><FaSquareXTwitter/></span>
                    <span className='socials'><FaSquareInstagram/></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
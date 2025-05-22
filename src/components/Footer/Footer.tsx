import './Footer.css'
import logo from '../../assets/img/logo.png'
import facebook from '../../assets/img/footer/facebook.svg'
import twitter from '../../assets/img/footer/twitter.svg'
import linkedin from '../../assets/img/footer/linkedin.svg'

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div id="footer1">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
              felis vitae sit est quisque.
            </p>
          </div>
          <ul id="footer2">
            <li className='firstLi'>Service</li>
            <li>Payment & Tax</li>
            <li>Features</li>
            <li>View Booking</li>
            <li>Support</li>
          </ul>
          <ul id="footer3">
            <li className='firstLi'>About</li>
            <li>About us</li>
            <li>News</li>
            <li>Pricing</li>
            <li>New Property</li>
          </ul>
          <div id="footer4">
            <h3>Our Location</h3>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
            <div className="footer-icons">
              <span><img src={facebook} alt="" /></span>
              <span><img src={twitter} alt="" /></span>
              <span><img src={linkedin} alt="" /></span>
            </div>
          </div>
        </div>
        <div className="down-footer">
          <p>Copyright 2024 flora. All Rights Reserved</p>
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  )
}

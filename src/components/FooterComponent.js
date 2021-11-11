import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div className="footer">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="text-center">
                        <img src="assets\images\terra-clone-logo.png" alt="Logo" width="175px" height="100px"/>
                        <div>
                        <a href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h5>Solutions</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Products</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h5>Company</h5>
                    <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>                
                <div className="col">
                    <h5>Contact Info</h5>
                    <address>                        
                        <i className="fa fa-phone fa-lg"></i> +852 1234 5678<br />
                        <i className="fa fa-envelope fa-lg"></i> <a href="mailto:info@terragroup.com">
                            info@terragroup.com</a>
                        <i className="fa fa-home fa-lg"></i> <span className="">2 Ahmed Onibudo <br />
                                                            Street opposite Law School,<br />
                                                            Victoria Island, Lagos.<br /></span>
                         
                        
                    </address>
                </div>

            </div>
            <hr />
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>Copyright 2021 Terragon Group All rights reserved.</p>
                </div>
            </div>
        </div>

    );

}

export default Footer;
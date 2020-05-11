import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () =>(
    <div className="Footer">
        <div className="Footer-container">
            <div className="Footer-content">
                <div className="Footer-logo">
                    Manzana
                </div>
                <div className="Footer-social">
                    <Link to="/social" style={{textDecoration:'none'}}>Social</Link>
                    
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
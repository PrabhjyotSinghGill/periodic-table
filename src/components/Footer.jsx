import React, { useState } from 'react';
import "../views/Footer.css";

function Footer() {
    const col1= [
           "Alkali Metals",
           "Metalloids",
           "Actinides",
        ];
    const col2= [
            "Alkaline earth metals",
            "Reactive nonmetals",
            "Unknown properties",
        ];
    const col3= [
            "Transition Metals",
            "Noble gases",
        ];
    const col4= [
            "Post-transition metals",
            "Lanthanides",
        ];

    return <div className='footer'>
        <div className='footerCol'>
            {col1.map(col =><h7 className="footerRow__elements">{col}</h7>)}
        </div>
        <div className='footerCol'>
            {col2.map(col =><h7 className="footerRow__elements">{col}</h7>)}
        </div>
        <div className='footerCol'>
            {col3.map(col =><h7 className="footerRow__elements">{col}</h7>)}
        </div>
        <div className='footerCol'>
            {col4.map(col =><h7 className="footerRow__elements">{col}</h7>)}
        </div>
    </div>;
}

export default Footer;
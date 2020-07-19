import React from 'react';
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <div>
                <h1>Search for Most Popular Articles from <span>The New York Times</span></h1>
                <div>
                    <span>API:  </span>
                    <a href="https://developer.nytimes.com/docs/most-popular-product/1/overview">https://developer.nytimes.com/docs/most-popular-product/1/overview</a>
                    <h3>step 1. select the period of time</h3>
                    <h3>step 2. click the button and see the result</h3>
                </div>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import './Header.css';

function Header()
{
    return (
        <div className="header">
            <div>
                <h1><span id="head">Search for Most Popular Articles from  </span><span id="nyt">The New York Times</span></h1>
                <div>
                    <h3 id="api">API:  <a href="https://developer.nytimes.com/docs/most-popular-product/1/overview" id="api-link">https://developer.nytimes.com/docs/most-popular-product/1/overview</a></h3>
                </div>
            </div>
        </div>
    )
}

export default Header;
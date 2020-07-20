import React from 'react';
import './ResultMessage.css';

interface IResultMessageProps
{
    UsernameQuery: (string | null);
    TimePeriod: (string | null);
}

function ResultMessage(props: IResultMessageProps)
{
    return (
        <div className="result-message">
            <div>
                <h3 className="result">🌹 Dear   <span id="name">{props.UsernameQuery}</span> 🌹</h3>
            </div>
            <div>
                <h3 className="result">following is most popular articles within <span id="day">{props.TimePeriod} days</span></h3>
                <h3 className="result">by clicking "learn more", you can visit the origin website</h3>
            </div>
        </div>
    )
}

export default ResultMessage;
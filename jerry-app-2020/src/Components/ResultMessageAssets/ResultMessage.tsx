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
                <h3>🌹 Dear <span>{props.UsernameQuery}</span> 🌹</h3>
            </div>
            <div>
                <h3>following is most popular articles within <span>{props.TimePeriod}</span> days</h3>
            </div>
        </div>
    )
}

export default ResultMessage;
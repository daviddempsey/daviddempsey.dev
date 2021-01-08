import React from 'react';
import github from './Logos/github.svg';

export const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <li>
                    <img alt="GitHub" src={github}/>
                </li>
            </ul>
        </div>
    );
}
import React from 'react';
import github from './Logos/github.svg';
import './index.css';

export const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <li>
                    <img alt="GitHub" width="250" height="250" src={github}/>
                </li>
            </ul>
        </div>
    );
}
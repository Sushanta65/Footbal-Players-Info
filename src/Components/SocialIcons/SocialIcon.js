import React from 'react';
import Facebook from '../../Images/Icons/Facebook.png'
import Twitter from '../../Images/Icons/Twitter.png'
import Youtube from '../../Images/Icons/YouTube.png'
import './SocialIcons.css'

const SocialIcon = (props) => {
    const {strTeam} = props.socialLink;
    return (
        <div className="socialIcons">
            <ul className="">
                <li><a href={`https://facebook.com/${strTeam}`}><img src={Facebook} alt=""/></a></li>
                <li><a href={`https://twitter.com/${strTeam}`}><img src={Twitter} alt=""/></a></li>
                <li><a href={`https://youtube.com/${strTeam}`}><img src={Youtube} alt=""/></a></li>
            </ul>
        </div>
    );
};

export default SocialIcon;
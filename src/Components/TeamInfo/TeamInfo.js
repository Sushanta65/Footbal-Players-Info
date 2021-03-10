import React from 'react';
import Icon1 from '../../Images/Icons/found.png'
import Icon2 from '../../Images/Icons/flag.png'
import Icon3 from '../../Images/Icons/football.png'
import Icon4 from '../../Images/Icons/male-gender-sign.png'
import Male from '../../Images/PlayerGender/male.png'
import Female from '../../Images/PlayerGender/female.png'
import './TeamInfo.css'
import SocialIcon from '../SocialIcons/SocialIcon';
const TeamInfo = (props) => {
    const { strTeam, strTeamBadge, strTeamFanart3, strSport, strGender, strCountry, intFormedYear, strStadiumDescription, strDescriptionEN } = props.teamInfo;

    // Gender Condition----------
    let gender;
    if (strGender === "Male") {
        gender = <img src={Male} alt="Male" />
    } else {
        gender = <img src={Female} alt="Female" />
    }

    return (
        <div className="bg-dark">
            <div style={{
                backgroundImage: `url(${strTeamFanart3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
            }} className="teamInfoBanner">
                <div className="bgOverlay">
                    <img src={strTeamBadge} alt="" />
                </div>
            </div>

            <div className="container">
                <div className="teamBasicInfo">
                    <div className="row">
                        <div className="col-md-6 teamInfo p-3 pl-5">
                            <h3 className="pb-2">{strTeam}</h3>
                            <p><img src={Icon1} alt="" /> Founded : {intFormedYear}</p>
                            <p><img src={Icon2} alt="" /> Country : {strCountry}</p>
                            <p><img src={Icon3} alt="" /> Sport Type :  {strSport}</p>
                            <p><img src={Icon4} alt="" /> Gender :  {strGender}</p>
                        </div>
                        <div className="col-md-6">
                            <div className="playerImage">
                                {gender}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="teamDesription text-light pt-3">
                    <p>{strStadiumDescription}</p>
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="socialLinks row">
                    <SocialIcon socialLink={props.teamInfo}></SocialIcon>
                </div>
            </div>

        </div>
    );
};

export default TeamInfo;
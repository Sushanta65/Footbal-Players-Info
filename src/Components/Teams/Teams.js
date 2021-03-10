import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Teams.css'

const Teams = (props) => {
    const { idTeam, strTeamBadge, strTeam, strSport, } = props.team;
    return (

        <div className="col-md-4 pt-3">
            <div className="team p-3 m-2 text-center">
                <img src={strTeamBadge} alt={strTeam} />
                <h4 className="pt-3">{strTeam}</h4>
                <p>Sport Type: {strSport}</p>
                <Link to={`/team/${idTeam}`}><Button variant="contained" color="primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight} /></Button></Link>
            </div>
        </div>

    );
};

export default Teams;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamInfo from './../TeamInfo/TeamInfo';

const TeamDitails = () => {
    const { idTeam } = useParams();
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [idTeam])

    return (
        <div>
            {
                team.map(teamInfo => <TeamInfo teamInfo={teamInfo}></TeamInfo>)
            }
        </div>
    );
};

export default TeamDitails;
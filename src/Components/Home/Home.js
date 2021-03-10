import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import HeaderBanner from '../../Images/headerBanner.jpg'
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div style={{
                backgroundImage: `url(${HeaderBanner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%"
            }} className="headerBanner">
                <div className="bgOverlay">
                    <h3>Get All Team Information</h3>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Teams key={team.idTeam} team={team}></Teams>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
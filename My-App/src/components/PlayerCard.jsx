import StatBox from "./StatBox.jsx"; 
import "../styles/PlayerCard.css";



function PlayerCard({ name, position, rating, stats = {}, tier = 'bronze', teamColor = '#333333' }) {
  return (
    <div
      className={`player-card ${tier}`}
      style={{ borderTop: `8px solid ${teamColor}` }}
    >
            <div className = " ">
                <span> {rating}</span>
                <span> {position}</span>
            </div>
            <h2 className = " ">{name}</h2>
            <div className = " ">
                <StatBox label = "PAC" value = {stats.pac}/>
                <StatBox label = "SHO" value = {stats.sho}/>
                <StatBox label = "PAS" value = {stats.pas}/>
                <StatBox label = "DRI" value = {stats.dri}/>
                <StatBox label = "DEF" value = {stats.def}/>
                <StatBox label = "PHY" value = {stats.phy}/>
            </div>
        </div>
         
    )
}

export default PlayerCard
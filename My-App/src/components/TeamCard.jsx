import '../styles/TeamCard.css'

function TeamCard({ teamName, teamColor = '#1e6b34', wins, losses, goals, children }) {
  const winPercent = Math.round((wins / (wins + losses)) * 100)

  return (
    <section className="team-card">
      <header className="team-header" style={{ background: teamColor }}>
        <h1>{teamName}</h1>
        <p>{wins} W · {losses} L · {goals} goals · {winPercent}% wins</p>
      </header>
      <div className="team-squad">{children}</div>
    </section>
  )
}

export default TeamCard
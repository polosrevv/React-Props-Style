import './App.css'
import './styles/PlayerCard.css'
import './styles/TeamCard.css'
import PlayerCard from './components/PlayerCard'
import TeamCard from './components/TeamCard'
function App() {
  

  return (
    <main>
      <TeamCard teamName="Newark Comets" teamColor="#1e6b34" wins={7} losses={2} goals={21}>
        <div className = "squad">
        <PlayerCard name="Leo Santos" position="ST" rating={88} tier="gold" teamColor="#1e6b34" stats=
        {{ pac: 94
        , sho: 88
        , pas: 79
        , dri: 90
        , def: 35
        , phy: 76
         }} />
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" 
        stats={{
             pac: 94
           , sho: 88
           , pas: 79
           , dri: 90
           , def: 35
           , phy: 76 
           }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        <PlayerCard name="Leo Santos" position="ST" rating={89} tier="gold" teamColor="#1e6b34" stats={{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
        </div>
      </TeamCard>
      <PlayerCard name = "Mbappe" position = "ST" rating = {91} stats = {{ pac: 94, sho: 88, pas: 79, dri: 90, def: 35, phy: 76 }}/>
    </main>
  )
}

export default App

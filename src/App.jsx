import './styles.css'
import TitleStat from './components/TitleStat'
import PokeStat from './components/PokeStat'
import PokeInfo from './components/PokeInfo'
import CardDescription from './components/CardDescription'
import TypeTag from './components/TypeTag'
import CardImage from './components/CardImage'
import CardHeader from './components/CardHeader'

function App() {

  return (
    <>
      <div className="card">
        <div className="header">
          <CardHeader/>
        </div>
        <CardImage/>
        <div className="poke-info">
          <div className="types-container">
            <TypeTag/>
          </div>
          <PokeInfo/>
          <CardDescription/>
          <div className="base-stats">
            <TitleStat/>
            <PokeStat/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

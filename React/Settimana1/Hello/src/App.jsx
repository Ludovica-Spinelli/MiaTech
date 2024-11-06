import Counter from './Counter'
import Card from './components/Card'
import ItemList from './components/ItemList'
import LoginForm from './components/LoginForm'
import TextInput from './components/TextInput'
import UncontrolledInput from './components/UncontrolledInput'

function App() {

  const colors = ["Red", "Blue", "Green", "Yellow", "Orange"];

  return (
    <>
      <Counter/>
      <TextInput/>
      <LoginForm/>
      <UncontrolledInput/>
      <ItemList  colors={colors}/>
      <Card>
          <img src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg" alt="Parigi" />
          <div>
              <a class="lowercase" href="https://www.hashtagmagazine.it/la-citta-della-belle-epoque-seducente-e-romantica-parigi/">LA CITTÀ DELLA BELLE ÉPOQUE, SEDUCENTE E ROMANTICA: PARIGI</a>
          </div>
      </Card>
    </>
  )
}

export default App

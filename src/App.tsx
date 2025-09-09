import './App.css'
import ExtensionCard, { type ExtensionCardType } from './components/ExtensionCard'

function App() {

  let Hello: ExtensionCardType = {icon: "😁", title: "Hello", description: "Lorem ipsum2"}

  let CardList: ExtensionCardType[] = [
    {icon: "💯", title: "tuz", description: "Lorem ipsum4"},
    {icon: "😍", title: "Love", description: "Lorem ipsum3"}
  ]

  return (
    <div className='cardHolder'>
      <ExtensionCard icon='❤️' title='DevLens' description='Lorem ipsum'/>
      <ExtensionCard {...Hello}/>
      { CardList.map((e, idx) => <ExtensionCard key={idx} {...e} />)}
    </div>
  )
}

export default App

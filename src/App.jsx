import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';
import quotes from './json/quotes.json'
import color from './utils/color';

function App() {

  //Calculo esta funcion un indice random
  const getIndexRandom = arr =>  Math.floor(Math.random() * arr.length) 

  // Aqui extrae el elemento segun el indice random
  const firstQuote = quotes[getIndexRandom(quotes)]

  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setrandomQuote] = useState(firstQuote)
  
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObjetc = {
    backgroundColor: randomColor
  }

  //Esta funcion calcula tanto un quote como un color random
  const getRandomALL = () => {
    setrandomQuote(quotes[getIndexRandom(quotes)])

    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObjetc} className="App">
      <QuoteBox  randomQuote={randomQuote}
                randomColor={randomColor}
                getRandomALL={getRandomALL}/>
    </div>
  )
}

export default App

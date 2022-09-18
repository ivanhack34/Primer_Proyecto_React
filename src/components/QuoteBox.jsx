import React from 'react'
import Quoteicon from './Quoteicon'

const QuoteBox = ({randomQuote, randomColor, getRandomALL}) => {

    console.log(getRandomALL)

    const colorObj = {
        color: randomColor
    }

    const backgroundObj ={
        backgroundColor: randomColor
    }

  return (
    <article style={colorObj} className='card'>
        <p className='card__quote'><Quoteicon/>{randomQuote.quote} </p>
        <h1 className='card__autor'>{randomQuote.author}</h1>
        <button className='card__btn' style={backgroundObj}
        onClick={getRandomALL}>&#62;</button>
    </article>
  )
}

export default QuoteBox
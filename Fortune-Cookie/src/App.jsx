import './App.css'
import Title from './Components/Title'
import RandomText from './Components/RandomText'
import Footer from './Components/Footer'
import phrases from './assets/data/phrases.json'
import { useState,useEffect } from 'react'

function App() {

  const backgrounds = [ 'url(/fondo1.png)', 'url(/fondo2.png)', 'url(/fondo3.png)', 'url(/fondo4.png)', 'url(/fondo5.png)'  ]

  const [ index, setIndex ] = useState ( 0 )
  const [ indexBackground, setIndexBackground] = useState ( 0 )

  
  const changePhrase = () =>{
    //ultimo elemento
    if ( index === phrases.length - 1  &&  indexBackground === phrases.length - 1 ){
      //regresar al primer elemento
      setIndex( 0 )
      setIndexBackground ( 0 )
    }else{
      //continua avanzando
      //avanzar 
      const random = Math.floor( 1 + Math.random()* 9 )
      const backgroundRandom = Math.floor( Math.random()* 5 )

      setTimeout(() =>{
        setIndex( random )
        setIndexBackground (backgroundRandom)
      }, 500)
    
  }
}


  return (
    <div className="App" style={{ 
      backgroundImage: backgrounds[indexBackground],
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100vh',
      transition: '1s'
      }}>
      <Title />

      <RandomText 
      phraseData = { phrases[index] }
      />

      <button className="Random-btn" onClick={ changePhrase }>
        Try Again
        </button>

        <Footer />
    </div>
  )
}

export default App

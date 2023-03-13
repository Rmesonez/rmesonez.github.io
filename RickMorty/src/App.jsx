import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import LocationSearch from './components/LocationSearch'
import Location from './components/Location'
import ResidentsInfo from './components/ResidentsInfo'
import Loader from './components/Loader'


function App() {

  const idRandom = Math.round(Math.random() * 126)


  const [isLoading, setIsLoading] = useState(true)
  const [RickData, setRickData] = useState({})
  const [newId, setNewId] = useState(idRandom)


  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://rickandmortyapi.com/api/location/${newId}`)
    .then(res => {
      setRickData(res?.data)
      console.log(res?.data)
      setTimeout(() => {
        setIsLoading(false)
    }, 5000)
    })
    .catch(err => {
      console.log(err)
    })
  }, [newId])



  const handleSearch = (id) => {
    setNewId(id)
  }

  return (
    <div className="App">

      { isLoading ? <Loader /> : null}
      
      <Header />

      <LocationSearch
        search={ handleSearch }
      />


      <Location
      data={ RickData }
      />

      <ResidentsInfo 
      data={ RickData }
      /> 
      
    </div>
  )
}

export default App

import axios from "axios";
import { useState, useEffect } from 'react'
import Loader from './Loader'


const Characters = ({ resident }) => {
    const [info, setInfo] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    
    useEffect(() => {
        setLoading(true)
        axios.get(resident)
        .then(res => {
            setInfo(res?.data)
            console.log(res?.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

  return (
    <div className='card-container'>
    <figure className='card-figure'>
      <img className='card-img' src={ info?.image } alt={ info?.name } />
      <div className='status'>
      <span className='status-span'> 
        <div className='circle'
        style={
          {backgroundColor: info?.status === 'Alive' ? '#1aec1a' : info?.status && info?.status === 'Dead' ? 'red' : 'yellow'}
          }
        ></div>
        Status: { info?.status }
      </span>
      </div>
        </figure>
    <h1>{info?.name}</h1>
    <p>Species: { info?.species }</p>
    <p>Origin: { info?.origin?.name }</p>
    <p>Episodes: { info?.episode?.length }</p>
  </div>
    
  )
}

export default Characters

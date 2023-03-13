import './Location.css'

const Location = ({ data }) => {
  return (
    <div className='location'>
      <h2 className='title'>Nombre:</h2>
      <p className='info'>{ data?.name }</p>

      <h2 className='title1'>Tipo:</h2>
      <p className='info1'>{ data?.type }</p>

      <h2 className='title2'>Dimensión:</h2>
      <p className='info2'>{ data.dimension }</p>

      <h2 className='title3'>Población:</h2>
      <p className='info3'>{ data?.residents?.length}</p>
    </div>
  )
}

export default Location

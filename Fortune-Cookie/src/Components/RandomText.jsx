

export default function RandomText( { phraseData } ) {
  return (
    
    <div className="Card">
        <p> { phraseData.phrase } </p>
        <h3>{ phraseData.author }</h3>
    </div>
    
    
  )
}

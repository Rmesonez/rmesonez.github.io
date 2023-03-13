import'./LocationSearch.css';
import { useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

const LocationSearch = ({ search }) => {

    const[ data, setData ] = useState([]);
const[ localization, setlocalization ] = useState([]);
const[ value, setValue ]= useState("");
const[ localizationSelected, setlocalizationSelected ] = useState({});
const [newId, setNewId] = useState(1)

const obtenerData = () => {
  axios.get("https://rickandmortyapi.com/api/location")
  .then(response=>{
    console.log(response?.data?.results);
    setlocalization(response?.data?.results);
    setData(response?.data?.results);
  })
}

useEffect(()=>{
obtenerData();
}, []);

const onSuggestionsFetchRequested = ({ value }) => {
  setlocalization(filtrarlocalization(value));
}

const filtrarlocalization = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  let filterData = data?.filter((local) => {
  let completeText = local.name;

    if(completeText.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .includes(inputValue)){
      return local;
    }
  });

  return inputLength === 0 ? [] : filterData;
}

const onSuggestionsClearRequested = () => {
  setlocalization([]);
}

const getSuggestionValue=(suggestion)=>{
  return `${suggestion.name}`;
}

const renderSuggestion = (suggestion) => (
  <div 
  className='suggestion' 
  onClick={ () => selectionLocal(suggestion)}>
  {`${suggestion.name}`}
  </div>
);

const selectionLocal = (local) => {
  setlocalizationSelected(local);
  setNewId(local.id);
}


const onChange=(e, { newValue }) => {
  setValue(newValue);
}

const inputProps = {
placeholder:"Enter a localization",
value,
onChange
};

const eventEnter = (e) => {
if(e.key == "Enter"){
  var localActual = data?.filter(p => p?.name == e.target.value.trim());

  //console.log(localActual);
  let local = {
    id: localActual?.[0]?.id,
    name: localActual?.[0]?.name,
  };
  selectionLocal(local);
}
}

  return (
    <div className='search-bar'>
    <Autosuggest 
      suggestions = { localization }
      onSuggestionsFetchRequested = { onSuggestionsFetchRequested }
      onSuggestionsClearRequested = { onSuggestionsClearRequested }
      getSuggestionValue = { getSuggestionValue }
      renderSuggestion = { renderSuggestion }
      inputProps = { inputProps }
      onSuggestionSelected = { eventEnter }
     />
     <br />
     <button 
     type='submit'
     className='btn btn-primary' 
     onClick={ () => newId ? search(newId) : null }
     ><span 
     className='span'>Search</span><i></i></button>
    </div>
  )
}

export default LocationSearch

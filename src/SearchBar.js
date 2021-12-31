import React,{useEffect,useState} from 'react'


function SearchBar({handleSearch}) {
    
    return (
        <div>
             <input className="pa3 ba b--green bg-lightest-blue tc ma3 " type="text" onChange={(event)=>handleSearch(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))} placeholder='Enter the Country Name' ></input>
        </div>
    )
}

export default SearchBar;

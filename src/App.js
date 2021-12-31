
import './App.css';
import 'tachyons'
import { useEffect,useState } from 'react';
import SearchBar from './SearchBar';
import Detail from './Detail';
import Quoto from './Quoto';



function App() {

  const [country, setCountry]=useState();
  const [detail,setDetail]=useState();
  useEffect(()=>{
    fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "39bdaadb39msh6420bbcec00787bp191b7ejsncf1f3b199f72"
	}
})
.then(response => response.json()).then(data => setDetail(data));
// .catch(err => {
// 	console.error(err);
// });
  },[country])

  const handleSearch=(event)=>{
        setCountry(event);
  }
  return (
    <div className="App">
       
       <Quoto/>
       <h1>Covid Tracker </h1>
       <SearchBar handleSearch={handleSearch}/>
       {country && <Detail detail={detail}/>}
       
                   
    </div>
  );
}

export default App;

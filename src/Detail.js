import React,{useEffect, useState} from 'react'
import Card from './Card';


function Detail({detail}) {
   // console.log(detail.data)
const [allState, setAllState]=useState();
const [On,setOn]=useState(false);
const handleShow=()=>{
     setOn((On)=>!On);
}

    useEffect( async() => {
         if(detail.data.location === "India")
          {
             // console.log(detail.data.location)
      await fetch('https://api.rootnet.in/covid19-in/stats/latest')
        .then(response => response.json())
        .then(data=> {setAllState(data.data.regional)
         // console.log(allState);
        });
    }
    }, [detail]);

    return (
        <>
        <div className={`bg-light-blue tc dib ma5 pa5 bw3 br3 shadow-5  ${detail.data.location === "India" ?"w-70":"grow w-40"} `}>
                <img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-collections.s3.amazonaws.com/c57945f3-0334-4c45-afbe-de4fb2e0e57f.png"  alt="corona-img"/>
               <div className='bg-purple tc white ma3 pa1 bw2 br3 shadow-5 grow'><h2>{detail.data.location}</h2></div>
                 <div className='bg-blue tc white ma3 pa1 bw2 br3 shadow-5 grow' ><h3 >Confirmed : {detail.data.confirmed}</h3></div>
                 <div className='bg-light-red tc white ma3 pa1 bw2 br3 shadow-5 grow'><h3>Deaths : {detail.data.deaths}</h3></div>
                 <div className=' bg-light-purple tc white ma3 pa1 bw2 br3 shadow-5 grow'> <h3>Last Check : {detail.data.lastChecked.substring(0,9)}</h3></div>
              
             <button className="bg-blue white grow br2 tc w-20 h3 " onClick={handleShow}> { On && detail.data.location === "India" ? "Hide Detail": "Show State Detail"}</button>
            
             { On && allState && detail.data.location === "India"  && allState.map((x,index)=> <Card key={index} data={x} />) }
        </div>
       
        </>
    )
}

export default Detail;

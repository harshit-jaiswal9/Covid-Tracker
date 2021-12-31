import React from 'react'

function Card({data}) {
    return (
        <div className='bg-washed-green ma3 pa3 bw3 br3 shadow-2 grow'>
            <div >
             <div className='tc'> <h2 className='purple tc'>{data.loc}</h2></div>
              <h3 className='blue tc'>Confirmed : {data.confirmedCasesIndian}</h3>
              <h3 className='light-red tc'>Deaths : {data.deaths}</h3>
              <h3 className='light-purple tc'>Discharged : {data.discharged}</h3>
              
              </div>
          
        </div>


//totalConfirmed: 7720
    )
}

export default Card;

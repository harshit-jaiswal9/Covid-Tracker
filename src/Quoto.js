import React from 'react';
//import { getQuote } from 'inspirational-quotes';
import './App.css';



const Quote = require('inspirational-quotes');

class Quoto extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data: Quote.getRandomQuote(),
            aurthor: Quote.getQuote().author
        }
    }

   
    handleQuoto=(event)=>{
         
        window.location.reload();
        
      //  console.log("hii");
       // console.log(event, Quote.getRandomQuote(),Quote.getQuote({author: false}).text);
        //const val=Quote.getQuote({author: false} ); 
        this.setState({data: Quote.getQuote().text, aurthor: Quote.getQuote().author});
    }
    componentDidMount(){
       // window.location.reload(true);
      // setTimeout(this.handleQuoto(),60000);
       
    }
    
   render(){
       return (
           <div className='bg-light-blue ma4 pa4 br4 bw4 shadow-2  tc'>
               
               <h2 className='dark-gray'>{this.state.data}</h2>
               <h3 className='washed-blue tr'>{this.state.aurthor}</h3>
               <button className='bg-blue white tc grow br3 w-10 h3' onClick={this.handleQuoto}>See More</button></div>
          
       );
   }
}

export default Quoto;
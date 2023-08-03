import React,{ useState } from 'react';

const Funfact=()=>{
    //use effect 
    const[facts,setFacts]=useState('');
    //make api request
    const getFact = async()=> {
    const response= await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
    "method": "GET"
    });
    const json= await response.json();
     const newFact= json.text;
     //console.log(facts);
     setFacts(newFact);
     return ()=>null;
}

React.useEffect(()=> {
        getFact();},
        []);
    //get response as state variable
    return(
       <p>Fun fact:
            {facts}
       </p> );

}
export default Funfact;
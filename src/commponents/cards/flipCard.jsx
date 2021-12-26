import React, { useEffect } from "react";
import './flip.css'
import '../../utils/utils.css'
import Spinner1 from "../loader/spinner1";
const FlipCard = ({obj,nextCard,correct,setCorrect}) => {
    useEffect(()=>{nextCard()})
    const handleAnswer=(statue)=>{
       if(statue===1){
           setCorrect(correct+1);
           nextCard();  
       }
       nextCard();   
    }
    const shuffleAnswer=()=>{
        setCorrect(0);
        nextCard();   
     }
   

    if(!obj){
      
         return <Spinner1/>}
    return (
        <div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front flexing-center">
                    <h1>{obj.question}</h1>
                </div>
                <div className="flip-card-back flexing-center">
                   <h1>{obj.answer}</h1>
                </div>
                
          
            </div>
            <br/>
      
        </div>
              <h1>{correct}/5</h1>
              {correct===5?
              <div className="flexing-center">   
              <button className="ui button" onClick={()=>shuffleAnswer()}>Re Shuffle</button>
            </div>:
              <div className="flexing-center">   
                <button className="ui button" onClick={()=>handleAnswer(1)}>Correct</button>
                <button className="ui button" onClick={()=>handleAnswer(0)}>Wrong</button>
              </div>}
              </div>
    );
}
export default FlipCard;
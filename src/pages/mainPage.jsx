import React,{useEffect} from "react";
import '../utils/utils.css'
import './style.css'
import { getPayload } from "../api/firebaseApi";
import Spinner1 from "../commponents/loader/spinner1";
import FlipCard from "../commponents/cards/flipCard";
import { getRandomCards } from "../utils/utils";
const MainPage=()=>{
  const [correct,setCorrect]=React.useState(0);
  const[cards,setCards]=React.useState(null)
  const [data,setData]=React.useState([]);
  useEffect(()=>{
      async function getCards(){
         await getPayload('',setData);
      }
      getCards();
  },[data.length])
  if(!data){
      return <Spinner1/>
  }


  const showCards=()=>{
      let card=getRandomCards(Object.values(data));
      setCards(card)
      return card
  }


    return(
      <div className="flexing-center container space">
         <FlipCard obj={cards} nextCard={showCards} correct={correct} setCorrect={setCorrect}/>
      </div>
    );
}
export default MainPage;
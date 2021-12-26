import React,{useEffect} from "react";
import './style.css'
import '../utils/utils.css'
import CardForm from "../commponents/froms/cardForm";
import Spinner1 from "../commponents/loader/spinner1";
import { getPayload } from "../api/firebaseApi";
import QuetionCard from "../commponents/cards/card";
const ManageCards=()=>{

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
        return Object.values(data).map((item)=>{
          return <QuetionCard obj={item} key={item.id}/>
        })
    }

 
    return (
        <div className="flexing-center container">
           <div className="box2 flexing-center">
           {showCards()}
           </div>
           <div className="box1">
               <h1>From Here You Enter Your Cards</h1>
               <br />
               <CardForm/>
           </div>
        </div>
    )
}
export default ManageCards;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { removeData } from "../../api/firebaseApi";
const QuetionCard = ({obj}) => {
   
    return (
        <div>
            <div className="ui card">
                <div className="content">
                    <a className="header">Question :{obj.question}</a>
                    <div className="description">
                       Answer :{obj.answer}
                    </div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                    <Link to={`/manage-cards/${obj.id}`} className="item ui basic green button">
                       Update
                     </Link>
                        
                    <div className="ui basic red button" onClick={()=>{removeData(obj.id)}}>Delete</div>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default QuetionCard;
import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/user";

const Conversations = () => {
   

    const nav = useNavigate()
    const dis = useDispatch()

   


    return (
        <div className="d-flex flex-column">
           Conversations
        </div>
    );
};

export default Conversations;
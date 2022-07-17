import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../features/user";

const AllUsers = () => {
   

    const nav = useNavigate()
    const dis = useDispatch()

   


    return (
        <div className="d-flex flex-column">
            All users
        </div>
    );
};

export default AllUsers;
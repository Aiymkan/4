import React from 'react';
import {Outlet} from "react-router-dom"
import {useNavigate} from "react-router-dom";

function DashboardTwo(props) {
    const navigate = useNavigate()
    const goToBack = ()=>{
        navigate(-1)
    return (
        <div>
            <Outlet/>
            <button onClick={goToBack}>back</button>
        </div>
    );
}

export default DashboardTwo;
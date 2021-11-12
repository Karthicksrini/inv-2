import React,{useEffect} from "react";
import {useHistory} from "react-router-dom";
const token= localStorage.getItem("token");

function Logout(){
    const history = useHistory();
    useEffect(()=>{
       history.push("/");
    },[]);
    return(
        <>
        </>
    )
}

export default Logout;
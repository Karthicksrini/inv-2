import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from "react";
import {Link } from "react-router-dom";
import ShopIcon from '@material-ui/icons/Storefront';
import GroupIcon from '@material-ui/icons/Group';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';
import {useState,useEffect} from "react";
import {useHistory } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";
const token= localStorage.getItem("token");
function Dashboard(){
  

    const[dashstore,setdashstore]=useState();
    const[dashbrand,setdashbrand]=useState();
    const[dashuser,setdashuser]=useState();
   
    const array= ["store","brand","user"];

    const history= useHistory();
  
    useEffect(()=>{
      //var decoded= jwt.decode(token);
      // if(decoded.exprire*1000<=Date.now()){
      //   history.push("/")
      // }else{
      const fetchdata=()=>{
      array.map(async(arr)=>{
        var response= await axios.get(`https://inv-1.herokuapp.com/${arr}/get${arr}`,{
          headers:{
            token:token
          }
        });
        console.log(response.data);
        var value= response.data.reduce((accumulator)=>{
          return accumulator+1;
        },0);
        console.log(value);
        if(arr==="store")setdashstore(value);
        if(arr==="brand")setdashbrand(value);
        if(arr==="user")setdashuser(value);
      })
      }
    fetchdata();
  
    
    
    },[]);
        
      
      



    return(
        <>
        <div className="dash1">
        <h1>Dashboard <span className="dash_title">Control Panel</span></h1>
       </div>

       <div className="dash_contain">
        <div className="pro_container">
        <div className="product">
            <div>
            <h1>{dashstore}</h1>
            <h3>Total Stores</h3>
            </div>
            <div >
              <ShopIcon 
              style={{fontSize:100}}
                 className ="pro_icon"/>
            </div>

            <Link to="/stores" ><div className="moreinfo"><span className="info">More info</span><ArrowForwardIcon/></div></Link>
        </div>
        </div>
        <div className="pro_container">
        <div className="product">
            <div>

            <h1>{dashbrand}</h1>
            <h3>Total Brands</h3>
            </div>
            <div >
              <BrandingWatermarkIcon 
              style={{fontSize:100}}
                 className ="pro_icon"/>
            </div>

        <Link to="/brands" ><div className="moreinfo"><span className="info">More info</span><ArrowForwardIcon/></div></Link>
        </div>
        </div>
       
        <div className="pro_container">
        <div className="product">
            <div>
            <h1>{dashuser}</h1>
            <h3>Total Users</h3>
            </div>
            <div >
              <GroupIcon 
              style={{fontSize:100}}
                 className ="pro_icon"/>
            </div>
            <Link to="/users" ><div className="moreinfo"><span className="info">More info</span><ArrowForwardIcon/></div></Link>
        </div>
        </div>
        <div className="pro_container">
        <div className="product">
            <div>
            <h1></h1>
            <h3>Total Products</h3>
            </div>
            <div >
              <ShoppingBasketIcon 
              style={{fontSize:100}}
                 className ="pro_icon"/>
            </div>

            <Link to="/products" ><div className="moreinfo"><span className="info">More info</span><ArrowForwardIcon/></div></Link>
        </div>
        </div>
        </div>
        </>
    )
}

export default Dashboard;
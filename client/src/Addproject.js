import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

function Addproject(){
    const [loading ,setLoading]= useState( false)
    
    const handleAdd =()=>{
        setLoading(true);
        console.log(loading);
    }
    const handleSubmit =()=>{
        setLoading(false)
    }
   const renderButton=()=>{
        return(
            <div className="renderbutton">
                <p>
                <button onClick={handleAdd} 
                color="primary"
                type="submit"> Addproject

                </button>
                </p>
            </div>
        )
    }
    const Addproject=()=>{
        if(loading){
            return(
                <div className="project">
                     <form onSubmit={handleSubmit}>
                <label> Name:</label>
                <input name="details"
                type = "text"
                placeholder="Enter the name of your Project"/>
                <br/>
                <label> Details:</label>
                <input
                 type ="text"
                 placeholder="Few Details of your Project"/>
                <br/>
                <label> Amount to be raised:</label>
                 <input
                 type="Number"
                 placeholder="In ether"/>
                 <br/>
                 <label> Due Date: </label>
                 <input
                 type = "Date"
                 placeholder="Date"/>
                 <br/>
                 <button
                 type="submit"
                 color="primary"> Submit</button>
            </form>
                </div>
            )
        }

    }
    return(
    <div className ="Main">
    
     {renderButton()}
     {Addproject()}
  </div>)
}
export default Addproject;
import React ,{useState}from "react"
function ProjectList(){
  const [isloggedIn,setIsLoggedIn] = useState(false);
    if(isloggedIn){
        return(
            <div>
                Loading...
            </div>
        )
    }
    else{
    return(
        <div className ="container">
            <div>
                <h2>Project list</h2>
                Will Dispaly the project here
                <ul >
                    <li> 
                        <h2> Title</h2>
                        <h5> Proposed by:</h5>
                        <p> Name:</p>
                        <p>Details:</p>
                        <p> Fundraised:</p>
                        <p>Due date:</p>
                        <button>Fund</button>
                        <hr/>
                    </li>
                </ul>
            </div>
        
        </div>
    )
}}
export default ProjectList;
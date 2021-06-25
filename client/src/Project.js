import React ,{useState}from "react"
import {Button} from 'react-bootstrap';

import moment from "moment";
function ProjectList(props){
    const idRef = React.useRef();
    const valueRef = React.useRef();
  const [isloggedIn,setIsLoggedIn] = useState(false);
  const [projects,setProject] =useState([]);

//   var format ={
//       day:"numeric",
//       month:"2-digit",
//       year:"numeric"
//   };
     const project=   props.projects.map((project)=>({
            'title':project.title,
            "creator":project.creator,
            "name":project.title,
            "details":project.details,
            "fundraise": project.fundraised,
            "date":new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit'}).format(project.duedate)
        }));
        // setProject(project)


    // if(isloggedIn){
    //     return(
    //         <div>
    //             Loading...
    //         </div>
    //     )
    // }
    // else{
    return(
        <div className ="container">
            <div>
                <h2>Project list</h2>
                Will Dispaly the project here
                <ul >{props.projects.map((project,key)=>(
                    <div className="list" key ={key}>
               
                    <li> 
                        <h2> Title:{project.title}</h2>
                        <h5> Proposed by:{project.creator}</h5>
                        <p> Name:{project.title}</p>
                        <p>Details:{project.details}</p>
                        <p> Fundraised:{project.fundraised}</p>
                        <p>{project.duedate}</p>
                        <p>Due date:{Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format((project.duedate)*1000)}</p>
                        <form  onSubmit 
                //         ={(event)=>{
                //     event.preventDefault();
                //     const id =idRef.current.value;
                //     const value = valueRef.current.value;
                //     props.handlefund(id,value);
                // }}
                >
                    <input type ="Number" placeholder="ether"
                    ref ={valueRef}/>
                        <Button name ={project.id}
                        onClick ={(e)=>{
                            e.preventDefault();
                            const value = valueRef.current.value;
                            props.handlefund(e.target.name,value)
                        }}
                        >Fund</Button>
                        </form>
                        <hr/>
                    </li>
                    </div> ))}
                </ul>
            </div>
            <div>
                <button onClick={props.balancecheck}> Balance Check</button>
            </div>
        
        </div>
    )
}
// }
export default ProjectList;
// import React, { Component } from "react";
// import axios from "axios";
// import SideMenu from "../../SideMenu.js";

// export default class DisplayTeacherLeave extends Component{

//     constructor(props){
//     super(props);
//     this.state={
//     teacher:{}
// };
//     }

//     componentDidMount(){
//          const id=this.props.match.params.id;
        

//         axios.get(`http://localhost:8091/teacherLeave/${id}`).then((res)=>{
//         if(res.data.success){
//           this.setState({
//           teacher:res.data.teacher
//             });
//               console.log("teacher is",this.state.teacher);
        
//     }
// });



// }
//     render(){
//          const{name,photo,age,gender,email,qualification,mobile,subject,date}=this.state.teacher;
        
       
//         return(
//             <div><SideMenu/>
//             <div style={{marginLeft:"325px",width:"76%"}}>
                
//              <h1>Teacher Detail</h1><hr></hr>
//               <dl className='row'>
                
//               <dt className='col-sm-3'> Name:</dt><dd className='col-sm-9'>{name}</dd>
//               <dt className='col-sm-3'> Photo:</dt><dd className='col-sm-9'><img src={photo} width="100px" height="100px"></img></dd>
//               <dt className='col-sm-3'> Age:</dt><dd className='col-sm-9'>{age}</dd>
//               <dt className='col-sm-3'> Gender:</dt><dd className='col-sm-9'>{gender}</dd>
//               <dt className='col-sm-3'> Email:</dt><dd className='col-sm-9'>{email}</dd>
//               <dt className='col-sm-3'> Qulifications:</dt><dd className='col-sm-9'>{qualification}</dd>
//               <dt className='col-sm-3'> Contact:</dt><dd className='col-sm-9'>{mobile}</dd>
//               <dt className='col-sm-3'> Subject:</dt><dd className='col-sm-9'>{subject}</dd>
//               <dt className='col-sm-3'> Date:</dt><dd className='col-sm-9'>{date}</dd>
              


              
//               </dl>
 

              

              
//               </div>
// </div>

              
//         )
//     }
// }
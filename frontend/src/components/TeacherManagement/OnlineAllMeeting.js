import React from "react";
import axios from "axios";

export default class OnlineAllMeeting extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    meetings:[],
    
  };
} 

componentDidMount(){
  this.retrieveMeetings();//this method gather the all sub comp and comps

  
}


retrieveMeetings(){
axios.get("http://localhost:8091/AllMeetings")
.then(res=>{
if(res.data.success){
this.setState({
  meetings:res.data.existingMeetings
})
console.log(this.state.lessons);

    
  


}
})
}

  

onDelete =(id)=>{
  axios.delete(`http://localhost:8091/deleteMeeting/${id}`).then((res)=>{
    
   alert("Lesson deleted");
  this.retrieveMeetings();
        
    }).catch((error)=>{
              alert("Error occoured");
    
            })

}

filterData(meetings,searchKey){
  const result=meetings.filter((meeting)=>
  meeting.topic.toString().toLowerCase().includes(searchKey)
  
  )

  this.setState({meetings:result})
}

handleSearch = (e)=>{
const searchKey=e.target.value;

axios.get("http://localhost:8091/AllMeetings")
.then(res=>{
if(res.data.success){
this.filterData(res.data.existingMeetings,searchKey);
}
})
}



 render(){
   return(
  <div style={{marginLeft:"325px",width:"76%"}}><br></br>
    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'45px', width:'80px'}}>
                  <a href="/navTeacher" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
             
         {/* <div className="container">   */}
   <div className="row">
 <div className="col-lg-12"> 
 
    <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="search" name="search" onChange={this.handleSearch} ></input>
    </div>
  
    <h1>Scheduled meetings</h1>
    {this.state.meetings.map((meetings,index)=>(
        
      <div key={index}>
    <dl className='row'>
                
                <dt className='col-sm-3'>Covered topic:</dt><dd className='col-sm-9'>{meetings.topic}</dd>
                <dt className='col-sm-3'>Date:</dt><dd className='col-sm-9'>{meetings.date}</dd>
                <dt className='col-sm-3'>Time:</dt><dd className='col-sm-9'>{meetings.time}</dd>
                <dt className='col-sm-3'>Meeting Link:</dt><dd className='col-sm-9'><a href="#">{meetings.link}</a></dd>
              
                <dt className='col-sm-3'>Meeting Id:</dt><dd className='col-sm-9'>{meetings.mId}</dd>
                <dt className='col-sm-3'>Passcode:</dt><dd className='col-sm-9'>{meetings.passCode}</dd>
                
                
                
                </dl>
                <a className="btn btn-warning"  role="button" href={`/meetingEdit/${meetings._id}`} ><i className="fas fa-edit"></i>&nbsp;Edit</a>
      &nbsp;
      <a className="btn btn-danger" role="button" href="" onClick={()=>this.onDelete(meetings._id)} ><i className="far fa-trash-alt"></i>&nbsp;Delete</a>
       
                </div>
    ))}
  




   
    


  </div>
   </div>
    </div>
 );
   }
 }


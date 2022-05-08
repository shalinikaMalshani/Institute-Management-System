import React from "react";
import axios from "axios";
import "./customSignUP.css";
import swal from "sweetalert";




const initialState={
    topic:"",
    date:"",
    time:"",
    link:"",
    mId:"",
   passCode:""
        
}

export default class EditLesson extends React.Component{

    
    constructor(props){
        super(props);

        this.state={alertMsg:"",initialState};
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }





    onSubmit=(e)=>{
        const id= this.props.match.params.id;
        e.preventDefault();
      
        
        const {topic,date,time,link,mId,passCode}=this.state;
        const data={
            topic:topic,
        date:date,
        time:time,
        link:link,
        mId:mId,
        passCode:passCode
        
        }
        axios.put(`http://localhost:8091/updateMeeting/${id}`,data).then((res)=>{
            swal({
                title: "You are successfully update the meeting schedule",
                icon: "success",
                button: "ok",
            }).then(function() {
                window.location = "/allMeetings";
            });   
              
              
            }).catch(error=>{
                swal({
                    title: "Error occoured when updating.",
                    text: "Please re-enter the details.",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  }).then(function() {
                    window.location = `/meetingEdit/${id}`;
                });
            })
           
        }
    
        componentDidMount() {
            const id= this.props.match.params.id;
                  axios.get(`http://localhost:8091/teacherMeeting/${id}`).then((res)=>{
                         if(res.data.success){
                          this.setState({
                           topic:res.data.teacher.topic,
                           date:res.data.teacher.date,
                           time:res.data.teacher.time,
                           link:res.data.teacher.link,
                           mId:res.data.teacher.mId,
                           passCode:res.data.teacher.passCode
                           
          
                  });
                               
                  
                  }
                          });
                     
                        }     
    
       


reset() {
    this.setState({
        topic:"",
    date:"",
    time:"",
    link:"",
    mId:"",
   passCode:""
})
}
    
    
    
    

    


render(){
   
    return(
        <React.Fragment>
<img src={require('./images/inner_banner_1.jpg')} alt="" style={{width:"100%"}}></img>
    <div style={{position:" absolute",top: "20%",left:" 10%"}}>
      <h1 style={{fontSize:"60px"}}>Update Meeting</h1>
      <p style={{color:"white",marginLeft:"5px"}}>Home // Update Meeting</p>
    </div>




<div>

<form >
  <div class="container">
    

    <h1>Update Meeting</h1>
    
    <hr/>
   
    <label for="name" >Covered Topic</label>
    <input type="text"  id="topic" 
    name="topic" 
    placeholder="Covered Topic" 
    value={this.state.topic} 
    onChange={this.handlInputChange}/>
    {this.state.topicError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.topicError}</div>
):null}
   
    <label for="age" >Date</label>
    <input type="date"  id="date"
    name="date" 
    value={this.state.date}
  onChange={this.handlInputChange}
    />
     {this.state.dateError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.dateError}</div>
):null}
   
  
<label for="qualification" >Time Duration</label>
<input type="time"  id="time" 
name="time" 
value={this.state.time}
onChange={this.handlInputChange}
/>
{this.state.timeError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.timeError}</div>
):null}



<label for="mobile" >Meeting Link</label>
<input type="text"  id="link"
name="link" 
value={this.state.link}
onChange={this.handlInputChange}
/>
{this.state.linkError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.linkError}</div>
):null}

<label for="subject" >Meeting Id</label>
<input type="text"  id="mId"
name="mId" 
onChange={this.handlInputChange}
value={this.state.mId}
 
/>
<label for="date" >Meeting Passcode</label>
<input type="text"  id="passCode"
name="passCode" 
value={this.state.passCode}
onChange={this.handlInputChange}
/>
{this.state.passCodeError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.passCodeError}</div>
):null}


   
  </div>
</form>
    </div>











            </React.Fragment>
    )
}

}
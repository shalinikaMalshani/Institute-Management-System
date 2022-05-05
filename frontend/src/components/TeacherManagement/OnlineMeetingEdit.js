import React from "react";
import axios from "axios";


const initialState={
    topic:"",
    date:"",
    time:"",
    link:"",
    mId:"",
   passCode:""
        
}

export default class OnlineMeetingEdit extends React.Component{
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
            alert("Updated Lesson");
            this.props.history.push("/OnlineAllMeeting");
            this.setState(initialState);
            console.log(data);
          }).catch(error=>{
              alert("error");
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
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>
                  <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'45px', width:'80px'}}>
                  <a href="/navTeacher" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
                <h2>Teacher Meeting Online</h2>
                {/* {this.state.alertMsg==="success"?<Success/>:null} */}
                {/* {this.state.alertMsg==="error"?<Error/>:null} */}

    <form>

    

  <div className="row">
      <div className="col-6">
  <div className="mb-3">

    <label for="name" className="form-label">Covered Topic</label>
    <input type="text" className="form-control" id="topic" 
    name="topic" 
    placeholder="Covered Topic" 
    value={this.state.topic} 
    onChange={this.handlInputChange}/>
    {this.state.topicError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.topicError}</div>
):null}
    </div>
    </div>
    <div className="col-6">
<div className="mb-3">
    <label for="age" className="form-label">Date</label>
    <input type="date" className="form-control" id="date"
    name="date" 
    value={this.state.date}
  onChange={this.handlInputChange}
    />
     {this.state.dateError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.dateError}</div>
):null}
   
    </div>
    </div>
</div>


<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="qualification" className="form-label">Time Duration</label>
<input type="time" className="form-control" id="time" 
name="time" 
value={this.state.time}
onChange={this.handlInputChange}
/>
{this.state.timeError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.timeError}</div>
):null}
</div>
</div>

<div className="col-6">
<div className="mb-3">
<label for="mobile" className="form-label">Meeting Link</label>
<input type="text" className="form-control" id="link"
name="link" 
value={this.state.link}
onChange={this.handlInputChange}
/>
{this.state.linkError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.linkError}</div>
):null}
</div>
</div>
</div>



<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="subject" className="form-label">Meeting Id</label>
<input type="text" className="form-control" id="mId"
name="mId" 
onChange={this.handlInputChange}
value={this.state.mId}
 
/>
          </div>
</div>
<div className="col-6">
<div className="mb-3">
<label for="date" className="form-label">Meeting Passcode</label>
<input type="text" className="form-control" id="passCode"
name="passCode" 
value={this.state.passCode}
onChange={this.handlInputChange}
/>
{this.state.passCodeError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.passCodeError}</div>
):null}
</div>
</div>
</div>




<button className="btn btn-danger" onChange={this.reset} >Reset</button>&nbsp;
  <button type="submit" className="btn btn-success" onClick={this.onSubmit} >Update</button>
</form>
        </div>
        )
    }
}
import React from "react";
import axios from "axios";


const initialState={
    topic:"",
    date:"",
    time:"",
    link:"",
    mId:"",
    passCode:"",
    topicError:"",
    dateError:"",
    timeError:"",
    linkError:"",
    mIdError:"",
    passCodeError:""
        
}

export default class OnlineMeeting extends React.Component{
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




validate =()=>{

    let topicError="";
    let dateError="";
    let timeError="";
    let linkError="";
    let mIdError="";
    let passCodeError="";

 if(!this.state.topic){
    topicError="Topic Cannot Be Empty"
}



if(!this.state.date){
    dateError="Date  Cannot Be Empty"
}

if(!this.state.time){
    timeError="Time Cannot Be Empty"
}

if(!this.state.link){
    linkError="Link Cannot Be Empty"
}

if(!this.state.mId){
    mIdError="Meeting Id  Cannot Be Empty"
}





if(!this.state.passCode){
    passCodeError="Passcode Cannot Be Empty"
}


if(topicError || dateError || timeError || linkError|| mIdError || passCodeError ){
this.setState({topicError,dateError,timeError,linkError,mIdError,passCodeError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {topic,date,time,link,mId,passCode}=this.state;
        const data={
            topic:topic,
        date:date,
        time:time,
        link:link,
        mId:mId,
        passCode:passCode
        
           
        }
    
        
    
        axios.post("http://localhost:8091/addMeeting",data).then((res)=>{
          alert("Teacher Meeting added successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
            console.log(error.message);
        })
    
    }
}

reset() {
    this.setState({subject:"",
    lessonNo:"",
    lessonNote:"",
    tute:"",
    stuTuteAnswers:"",
    tuteAnswers:"",
    referances:"",
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
  <button type="submit" className="btn btn-success" onClick={this.onSubmit} >Schedule</button>
</form>
        </div>
        )
    }
}
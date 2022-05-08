import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";


export default class addClass extends Component {

constructor(props){
super(props);
this.state={
Class_Type:"",
Subject:"",
Teacher_Name:"",
Starting_Time:"",
Ending_Time:"",
Contact_Number:"",
Day:""

}
}


handleInputChange = (e) =>{
const {name,value} = e.target;

this.setState({
...this.state,
[name]:value
})
}

onChangeSelect = e=>{
    this.setState({Subject:e.target.value});
}


onChangeChoose = e=>{
    this.setState({Day:e.target.value});
}
onChangeNew = e=>{
    this.setState({Class_Type:e.target.value});
}



onSubmit = (e) =>{
e.preventDefault();

const {Class_Type,Subject,Teacher_Name,Starting_Time,Ending_Time,Contact_Number,Day} = this.state;

const data ={
Class_Type:Class_Type,
Subject:Subject,
Teacher_Name:Teacher_Name,
Starting_Time:Starting_Time,
Ending_Time:Ending_Time,
Contact_Number:Contact_Number,
Day:Day

}

//Validation Part

console.log(data)
if(Class_Type==""||Subject==""||Teacher_Name==""||Starting_Time==""||Ending_Time==""||Contact_Number==""||Day==""){
    alert("You have to Insert all Class Details")
    return 0;


}else if(Contact_Number.length>10){

    alert("Contact number should not be greater than 10 ")
    return 0;

}
else if(Contact_Number.length<10){

    alert("Contact  number should not be less than 10")
    return 0;
}  

    
    
    

axios.post("http://localhost:8091/class/add",data).then((res) =>{
if(res.data.success){
    alert("New Class Details Successfully Inserted")
    this.props.history.push("/classDetailsHome");
this.setState(
{
    Class_Type:"",
    Subject:"",
    Teacher_Name:"",
    Starting_Time:"",
    Ending_Time:"",
    Contact_Number:"",
    Day:""
    
}
)
}
})
}

render() {
    

return (
    
<div>
  <SideMenu/>



 <div style={{marginLeft:"325px",width:"76%" ,marginTop:"50px"}}>
        <form class="row g-3">
         
        <h1 style={{marginTop:"80px"}}>Add Class Details</h1>

<div class="col-md-4">
    <label for="inputState" class="form-label"><b>Class_Type</b></label>
    <select id="inputState" class="form-select" onChange={this.onChangeNew}>
      <option selected>Choose Class Type</option>
      <option>Theory</option>
      <option>Paper</option>
      <option>Practical</option>
      <option>Revision</option>
    </select>
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label"><b>Subject</b></label>
    <select id="inputState" class="form-select" onChange={this.onChangeSelect} >
      <option selected>Choose Subject</option>
      <option>Physics</option>
      <option>Combined Mathematics</option>
      <option>Chemistry</option>
      <option>Art</option>
      <option>Biology</option>
      <option>IT</option>
      <option>Business Studies</option>
    </select>
  </div>

  <div class="col-12">
    <label for="Teacher_Name" class="form-label"><b>Teacher_Name</b></label>
    <input type="text" name="Teacher_Name" class="form-control"  placeholder="Enter Teacher Name" value={this.state.Teacher_Name} onChange={this.handleInputChange}/>
  </div>

  <div class="col-12">
    <label for="Starting_Time" class="form-label"><b>Starting_Time</b></label>
    <input type="text" name="Starting_Time" class="form-control"  placeholder="Enter Starting Time (00.00 am/pm)" value={this.state.Starting_Time} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-6">
    <label for="Ending_Time" class="form-label"><b>Ending_Time</b></label>
    <input type="text" name="Ending_Time" class="form-control"  placeholder="Enter Ending Time (00.00 am/pm)" value={this.state.Ending_Time} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-6">
    <label for="Contact_Number" class="form-label"><b>Contact_Number</b></label>
    <input type="text" name="Contact_Number" class="form-control"  placeholder="Enter Contact Number" value={this.state.Contact_Number} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label"><b>Day</b></label>
    <select id="inputState" class="form-select" onChange={this.onChangeChoose}>
      <option selected>Choose Day</option>
      <option>Sunday</option>
      <option>Monday</option>
      <option>Tuesday</option>
      <option>Wednesday</option>
      <option>Thursday</option>
      <option>Friday</option>
      <option>Saturday</option>
    </select>
  </div>


  <br></br>
  <br></br>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
  </div>
</form>
    
</div>
</div>
)
}
}

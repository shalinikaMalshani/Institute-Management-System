import React, { Component } from 'react';
import axios from 'axios';


export default class updateClass extends Component {


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
        const id = this.props.match.params.id;
        
        const {Class_Type,Subject, Teacher_Name,Starting_Time,Ending_Time,Contact_Number,Day} = this.state;
        
        const data ={
            Class_Type:Class_Type,
            Subject:Subject,
            Teacher_Name:Teacher_Name,
            Starting_Time:Starting_Time,
            Ending_Time:Ending_Time,
            Contact_Number:Contact_Number,
            Day:Day
        }
        console.log(data)

        //Validation Part
        
        if(Class_Type==""||Subject==""||Teacher_Name==""||Starting_Time==""||Ending_Time==""||Contact_Number==""||Day==""){
            alert("You have to Insert all Class  Details")
            return 0;
        
        
        }else if(Contact_Number.length>10){
        
            alert("Contact number should not be greater than 10 ")
            return 0;
        
        }
        else if(Contact_Number.length<10){
        
            alert("Contact  number should not be less than 10")
            return 0;
        }  
       
            
        
        axios.put(`http://localhost:8091/class/update/${id}`,data).then((res) =>{
        if(res.data.success){
        alert("Class Details Updated Successfully")
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
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8091/class/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Class_Type:res.data.post.Class_Type,
        Subject:res.data.post.Subject,
        Teacher_Name:res.data.post.Teacher_Name,
        Starting_Time:res.data.post.Starting_Time,
        Ending_Time:res.data.post.Ending_Time,
        Contact_Number:res.data.post.Contact_Number,
        Day:res.data.post.Day
    });
    console.log(this.state.post);
    
    
    }
        });
    
    
    }
    




render() {
return (

    <div style={{marginLeft:"325px",width:"76%"}}>
    
<div className="">
    <br></br>
    <form class="row g-3">
<h1 style ={{color:"black",marginBottom:"50px"}}><b>Update Class Details</b></h1>

<div class="col-md-4">
    <label for="inputState" class="form-label">Class_Type</label>
    <select id="inputState" class="form-select" value={this.state.Class_Type} onChange={this.onChangeNew}>
      <option selected>Choose Class Type</option>
      <option>Theory</option>
      <option>Paper</option>
      <option>Revision</option>
      <option>Practical</option>
    </select>
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label">Subject</label>
    <select id="inputState" class="form-select" value={this.state.Subject} onChange={this.onChangeSelect} >
      <option selected>Choose Subject</option>
      <option>Combined Mathematics</option>
      <option>Chemistry</option>
      <option>Art</option>
      <option>Biology</option>
      <option>IT</option>
      <option>Business Studies</option>
    </select>
  </div>

  <div class="col-12">
    <label for="Teacher_Name" class="form-label">Teacher_Name</label>
    <input type="text" name="Teacher_Name" class="form-control"  placeholder="Teacher Name" value={this.state.Teacher_Name} onChange={this.handleInputChange}/>
  </div>

  <div class="col-12">
    <label for="Starting_Time" class="form-label">Starting_Time</label>
    <input type="text" name="Starting_Time" class="form-control"  placeholder="Starting Time (00.00 am/pm)" value={this.state.Starting_Time} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-6">
    <label for="Ending_Time" class="form-label">Ending_Time</label>
    <input type="text" name="Ending_Time" placeholder="Ending Time (00.00 am/pm)" class="form-control"  value={this.state.Ending_Time} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-6">
    <label for="Contact_Number" class="form-label">Contact_Number</label>
    <input type="text" name="Contact_Number" placeholder="Contact Number" class="form-control"  value={this.state.Contact_Number} onChange={this.handleInputChange}/>
  </div>

  <div class="col-md-4">
    <label for="inputState" class="form-label">Day</label>
    <select id="inputState" class="form-select" value={this.state.Day} onChange={this.onChangeChoose}>
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
 
</form>
<button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
    <i className="far fa-check-square"></i>
    
&nbsp; Update 
</button>
</div>
</div>

)
}
}

import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";


export default class addFee  extends Component {

constructor(props){
super(props);
this.state={
Class_Type:"",
Subject:"",
Fee:"",
Date:"",
Special_Notes:""

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
onChangeNew = e=>{
    this.setState({Class_Type:e.target.value});
}

onSubmit = (e) =>{
e.preventDefault();

const {Class_Type,Subject,Fee,Date,Special_Notes} = this.state;

const data ={
Class_Type:Class_Type,
Subject:Subject,
Fee:Fee,
Date:Date,
Special_Notes:Special_Notes
}


//Validation Part

console.log(data)
if(Class_Type==""||Subject==""||Fee==""||Date==""||Special_Notes==""){
    alert("You have to Insert all Class Fee Details")
    return 0;

}


axios.post("http://localhost:8091/fee/add",data).then((res) =>{
if(res.data.success){
    alert("New Class Fee Details Successfully Inserted")
    this.props.history.push("/feeHome");
this.setState(
{
    Class_Type:"",
    Subject:"",
    Fee:"",
    Date:"",
    Special_Notes:""
}
)
}
})
}

render() {
    

return (
    <div>
  <SideMenu/>
    <div style={{marginLeft:"325px",width:"76%"}}>
    <form class="row g-3">
        <h1 style={{marginTop:"100px"}}>Add Class Fee Details</h1>

<div class="col-md-4">
<label for="inputState" class="form-label"><b>Class_Type</b></label>
<select id="inputState" class="form-select"  onChange={this.onChangeNew}>
  <option selected>Choose Class Type</option>
  <option>Theory</option>
  <option>Paper</option>
  <option>Practical</option>
  <option>Revision</option>
</select>
</div>

<div class="col-md-4">
<label for="inputState" class="form-label"><b>Subject</b></label>
<select id="inputState" class="form-select"  onChange={this.onChangeSelect} >
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
<label for="fee" class="form-label"><b>Fee</b></label>
<input type="text" name="Fee" class="form-control"  placeholder="Enter Fee (Rs.)" value={this.state.Fee} onChange={this.handleInputChange}/>
</div>

<div class="col-12">
<label for="date" class="form-label"><b>Date</b></label>
<input type="date" name="Date" class="form-control"  placeholder="Enter Date"  value={this.state.Date}onChange={this.handleInputChange}/>
</div>

<div class="col-md-6">
<label for="special notes" class="form-label"><b>Special_Notes</b></label>
<input type="text" name="Special_Notes" class="form-control"  placeholder="Enter Special Notes" value={this.state.Special_Notes} onChange={this.handleInputChange}/>
</div>



<div class="col-12">
<button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</div>
</form>

</div>
</div>
)
}
}



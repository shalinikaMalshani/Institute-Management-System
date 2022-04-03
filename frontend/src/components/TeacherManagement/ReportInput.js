import React, { Component } from "react";
import axios from "axios";
const initialState={
    s_date:"",
    e_date:"",
    
}
export default class ReportInput extends Component{

    constructor(props){
        super(props);

        this.state=initialState;
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

onSubmit=(e)=>{
        e.preventDefault();

        const {s_date,e_date}=this.state;
        const data={
           s_date:s_date,
           e_date:e_date
        }
    axios.post("http://localhost:8091/Report",data).then((res)=>{
          
if(res.data.success){
    console.log(data);
    alert("Input Added Successfully!!");
    //clear form
   this.setState(initialState);
   console.log(data);
}else{
    alert("Error ocoured");
}
        })
    }
  render(){
    return(
        <div style={{marginLeft:"325px",width:"76%"}}>
                <h2>Report</h2>
                 <form>
  
    <div className="mb-3"><label for="s_date" className="form-label">Date From</label><input type="date" className="form-control" id="s_date"
name="s_date" 
 placeholder="Enter from date" value={this.state.s_date} 
 onChange={this.handlInputChange}/></div>

<div className="mb-3"><label for="e_date" className="form-label">Date To</label><input type="date" className="form-control" id="e_date"
name="e_date" 
 placeholder="Enter to date" value={this.state.e_date} 
 onChange={this.handlInputChange}/></div>

<button type="reset" className="btn btn-danger">Reset</button>&nbsp;
  
  <button type="submit" className="btn btn-primary" onClick={this.onSubmit} >Submit</button>

</form>
            </div>
        )
    }
}
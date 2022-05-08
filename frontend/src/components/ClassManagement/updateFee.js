import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";


export default class updateFee extends Component {


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
        onChangeSelect = e=>{
            this.setState({Subject:e.target.value});
        
        }
        onChangeNew = e=>{
            this.setState({Class_Type:e.target.value});
        }

        
        handleInputChange = (e) =>{
        const {name,value} = e.target;
        
        this.setState({
        ...this.state,
        [name]:value
        })
        }
        
        onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        
        const {Class_Type,Subject, Fee,Date,Special_Notes} = this.state;
        
        const data ={
            Class_Type:Class_Type,
            Subject:Subject,
            Fee:Fee,
            Date:Date,
            Special_Notes:Special_Notes
        }
        console.log(data)

        //Validation Part
        
        if(Class_Type==""||Subject==""||Fee==""||Date==""||Special_Notes==""){
            alert("You have to Insert all Class Fee Details")
        }
        
        axios.put(`http://localhost:8091/fee/update/${id}`,data).then((res) =>{
        if(res.data.success){
        alert("Class Fees Updated Successfully")

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
        this.props.history.push("/feeHome");
        })
        }
        


    componentDidMount(){

        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8091/fee/${id}`).then((res) =>{
    if(res.data.success){
    this.setState({
        Class_Type:res.data.post.Class_Type,
        Subject:res.data.post.Subject,
        Fee:res.data.post.Fee,
        Date:res.data.post.Date,
        Special_Notes:res.data.post.Special_Notes
    });
    console.log(this.state.post);
    
    
    }
        });
    
    
    }
    

    render() {
    
    

        return (
            <div>
  <SideMenu/>
            <div style={{marginLeft:"325px",width:"76%"}}>

            <form class="row g-3">
                <h1 style={{marginTop:"100px"}}>Update Class Fee Details</h1>
        
        <div class="col-md-4">
        <label for="inputState" class="form-label"><b>Class_Type</b></label>
        <select id="inputState" class="form-select" value={this.state.Class_Type} onChange={this.onChangeNew}>
          <option selected>Choose Class Type</option>
          <option>Theory</option>
          <option>Paper</option>
          <option>Practical</option>
          <option>Revision</option>
        </select>
        </div>
        
        <div class="col-md-4">
        <label for="inputState" class="form-label"><b>Subject</b></label>
        <select id="inputState" class="form-select"  value={this.state.Subject} onChange={this.onChangeSelect} >
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
        <input type="date" name="Date" class="form-control"  placeholder="Enter Date" value={this.state.Date} onChange={this.handleInputChange}/>
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



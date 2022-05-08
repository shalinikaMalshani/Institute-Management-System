import React, { Component } from "react";


const initialState={
    sDate:"",
    eDate:"",
    
}
export default class StudentReportInput extends Component{

    constructor(props){
        super(props);

        this.state={
            
            initialState
        };
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })



    }

    //reset the form
    resetForm = (e) => {
    e.preventDefault();
    this.setState({
        ...this.state,
        sDate:'',
        eDate:''
    })
 }




   
    render(){
    return(
     <div className="container" style={{padding:"40px",marginLeft:"280px",width:"76%"}}>
          <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'110px', marginTop:"-10px"}}>
                <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button>
                <br></br><br></br>
                <h3>Report</h3>
                <br></br>
                 <form>
  
    <div className="col-mb-3" style={{width:'500px', marginLeft:"20px"}}><label for="sDate" className="form-label">Date From</label><input type="date" className="form-control" id="sDate"
	name="sDate" 
	placeholder="Enter from date" value={this.state.sDate} 
	onChange={this.handlInputChange}/></div>
    <br></br>
    <br></br>
	<div className="mb-3" style={{width:'500px',marginLeft:"20px"}}><label for="eDate" className="form-label">Date To</label><input type="date" className="form-control" id="eDate"
	name="eDate" 
	laceholder="Enter to date" value={this.state.eDate} 
	onChange={this.handlInputChange}/></div>



<button type="reset" className="btn btn-danger" onClick={this.resetForm} style={{marginTop:'15px',width:"150px", marginLeft:"20px"}}><i class="fa-solid fa-arrow-rotate-right"></i>
                    &nbsp; Reset</button>&nbsp;&nbsp;&nbsp;
<a className="btn btn-success"  role="button" href={`/studentReport/${this.state.sDate}/${this.state.eDate}`} style={{marginTop:'15px',width:"150px"}}>&nbsp;
<i className="far fa-check-square"></i>&nbsp; Submit</a>

 


</form>
            </div>
        )
    }
}
import React, { Component } from "react";


const initialState={
    sDate:"",
    eDate:"",
    
}
export default class ReportInput extends Component{

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




   
    render(){
    return(
        <div style={{marginLeft:"325px",width:"76%"}}><br></br>
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{height:'45px', width:'80px'}}>
                  <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
                <h2>Report</h2>
                 <form>
  
    <div className="mb-3"><label for="sDate" className="form-label">Date From</label><input type="date" className="form-control" id="sDate"
name="sDate" 
 placeholder="Enter from date" value={this.state.sDate} 
 onChange={this.handlInputChange}/></div>

<div className="mb-3"><label for="eDate" className="form-label">Date To</label><input type="date" className="form-control" id="eDate"
name="eDate" 
 placeholder="Enter to date" value={this.state.eDate} 
 onChange={this.handlInputChange}/></div>

  
  
  
  <button type="reset" className="btn btn-danger"  >Reset</button>&nbsp;
  
  {/* <button type="submit" className="btn btn-primary" >Submit</button> */}
  <a className="btn btn-success"  role="button" href={`/report/${this.state.sDate}/${this.state.eDate}`} >&nbsp;Submit</a>


</form>
            </div>
        )
    }
}
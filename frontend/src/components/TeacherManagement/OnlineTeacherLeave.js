import React, { Component } from "react";
import axios from "axios";



const initialState={
  name:"",
  type:"",
  duration:"",
  fDate:"",
  tDate:"",
  reason:"",
  nameError:"",
  typeError:"",
  durError:"",
  fError:"",
  tError:"",
  reasonError:""

}

export default class OnlineTeacherLeave extends Component{

  constructor(props) {
        super(props);
        this.state = { status: 0, initialState }; // 0: no show, 1: show yes, 2: show no.
        
      }

      handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

    //get dropdown value
    onChangeSelect = e=>{
      this.setState({type:e.target.value});
  }
  




      radioHandler = (status) => {
        if(status===1){
          this.state.duration="Single Day"
        }else{
          this.state.duration="Multiple Days"
        }  
    this.setState({ status });
    
    
   };
  
    
   onSubmit=(e)=>{
        
    e.preventDefault();
    
    const {name,type,duration,fDate,tDate,reason}=this.state;
    const data={
        name:name,
        type:type,
        duration:duration,
        fDate:fDate,
        tDate:tDate,
        reason:reason
        
    }

    
  
    axios.post("http://localhost:8091/addLeave",data).then((res)=>{
      if(res.data.success){
      alert("Teacher leave added successfully!");
      this.setState(initialState);
      this.props.history.push("/allLeaves");
      } 
    }).catch(error=>{
        // this.setState({alertMsg:"error"});
        alert("Error occoured.Please check and resubmit the details.");
    })

}


    
   

   resetDetails=e=>{
     e.preventDefault();
    this.setState({
      name:"",
      type:"",
      duration:"",
      fDate:"",
      tDate:"",
      reason:""})
  }
  
    render(){
      const { status } = this.state;

        return(
          <div style={{marginLeft:"325px",width:"76%"}}><br></br>
              <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'45px', width:'80px'}}>
                  <a href="/navTeacher" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
              
    
                <h2>Teacher Leave Online</h2>
                 <form>
  
    
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}
  />
     {this.state.nameError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
):null}
    
    </div>
    
    <div className="mb-3">
<label for="type" className="form-label">Leave Type</label>
<select  onChange={this.onChangeSelect} className="form-select" name="type" id="type" >
        <option selected disabled >--Select type--</option>
        <option value="Casual">Casual Leave</option>
        <option value="sick">Sick Leave</option>
</select>
          
</div>




   <div className="mb-3">
    <label for="duration" className="form-label">Duration</label>
<div>
    <input type="radio" 
    name="single"
         id="single"  
          value="Single Day"
          
           checked={status === 1} onClick={(e) => this.radioHandler(1)}
          
        />Single Date
      &nbsp;
        <input type="radio" 
         id="multiple" 
         name="multiple"
         value="Multiple Days"
         
         checked={status === 2} onClick={(e) => this.radioHandler(2)}
         /> Multiple Days

  {status === 1 && <div className="mb-3"><label for="fDate" className="form-label">Date</label>
<input type="date" className="form-control" id="fDate"
value={this.state.fDate} 
onChange={this.handlInputChange}
name="fDate" 
 placeholder="Enter  date" 
 
/>
{this.state.fError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.fError}</div>
):null}
</div>}
         {status === 2 && <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="fDate" className="form-label">From Date</label>
              <input type="date" className="form-control" id="fDate"name="fDate" placeholder="Enter from date"
              value={this.state.fDate} 
              onChange={this.handlInputChange} />
         
              </div>
              </div>
              <div className="col-6"><div className="mb-3">
                <label for="tDate" className="form-label">To Date</label>
                <input type="date" className="form-control" id="tDate" name="tDate" placeholder="Enter to date"
                value={this.state.tDate} 
                onChange={this.handlInputChange} />
           
                </div></div></div>}  
     </div> 
  
   </div>  

  <div className="mb-3">
    <label for="reason" className="form-label">Reason of Leave</label>
    <textarea className="form-control" id="name" cols={50} rows={3}
    name="reason" 
    placeholder="Enter the reason here" 
    value={this.state.reason} 
onChange={this.handlInputChange}
  />
    
  </div>






  <button type="reset" className="btn btn-danger" onClick={this.resetDetails} >Reset</button>&nbsp;
  
  <button type="submit" className="btn btn-success" onClick={this.onSubmit}  >Submit</button>

</form>
            </div>
        )
    }
}



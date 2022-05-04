import React from "react";
import axios from "axios";


const initialState={
            email:"",
            password:"",
            emailError:"",
            passwordError:"",
           
        
}

export default class OnlineTeacherLogin extends React.Component{
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


let emailError="";
let passwordError="";






if(!this.state.email){
    emailError="Email Cannot Be Empty"
}else if(!this.state.email.includes("@")){
    emailError="Invalid Email";
}


if(!this.state.password){
    passwordError="Password Cannot Be Empty"
}




if(emailError || passwordError ){
this.setState({emailError,passwordError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {email,password}=this.state;
        const data={
            email:email,
            password:password
       
           
        }
    
        
    
        axios.post("http://localhost:8091/teacherLogin",data).then((res)=>{
          alert("Teacher login successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
        })
    
    }
}

reset() {
    this.setState({
    email:"",
   password:"",
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
                <h2>Teacher Login Online</h2>
                {/* {this.state.alertMsg==="success"?<Success/>:null} */}
                {/* {this.state.alertMsg==="error"?<Error/>:null} */}

    <form>

    
    
   
   
   

  <div className="row">
   <div className="col-6">
  <div className="mb-3">
<label for="email" className="form-label">Email</label>
<input type="text" className="form-control" id="email"
name="email" 
 placeholder="xxxx@gmail.com" 
 value={this.state.email} 
onChange={this.handlInputChange}
/>
{this.state.emailError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
):null}
</div>
</div>
</div>




<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="password" className="form-label">Password</label>
<input type="password" className="form-control" id="password"
name="password" 
 placeholder="Enter password" 
 value={this.state.password} 
onChange={this.handlInputChange}
/>
      


          </div>
</div>


</div> 

<button className="btn btn-danger" onChange={this.reset} >Reset</button>&nbsp;
  <button type="submit" className="btn btn-success" onClick={this.onSubmit} >Submit</button>
</form>
        </div>
        )
    }
}
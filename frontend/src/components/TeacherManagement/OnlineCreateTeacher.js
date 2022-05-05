import React from "react";
import axios from "axios";


const initialState={
            name:"",
            photo:"",
            age:"",
            gender:"",
            email:"",
            qualification:"",
            mobile:"",
            subject:"Chemistry",
            date:"",
            password:"",
            confirmPassword:"",
            emailError:"",
            nameError:"",
            phoneError:"",
            genderError:"",
            quaError:"",
            ageError:"",
            subError:"",
            dateError:"",
            passwordError:"",
            typeError:""
        
}

export default class OnlineCreateTeacher extends React.Component{
    constructor(props){
        super(props);

        this.state={alertMsg:"",initialState,rType:"Online"};
    }

    handlInputChange=(e)=>{
        const{name,value}=e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }

onChangeSelect = e=>{
    this.setState({subject:e.target.value});
}

// changeType = e=>{
//     this.setState({rType:e.target.value});
// }

onChangeFile =e=>{
    let file=e.target.files;
    console.log("file",file);
    let reader=new FileReader();
    reader.readAsDataURL(file[0]);

    reader.onload =e=>{
        console.log("image url",e.target.result);
        this.setState({photo:e.target.result});
    }
}

validate =()=>{

let nameError="";
let genderError="";
let quaError="";
let subError="";
let ageError="";
let emailError="";
let phoneError="";
let dateError="";
let passwordError="";



if(!this.state.name){
    nameError="Name Cannot Be Empty"
}

if(!this.state.gender){
    genderError="Gender Cannot Be Empty"
}

if(!this.state.qualification){
    quaError="Qualification Cannot Be Empty"
}

if(!this.state.subject){
    subError="Subject Cannot Be Empty"
}

let agePattern=/^[A-Za-z]+$/;

if(!this.state.age){
    ageError="Age Cannot Be Empty"
}else if(this.state.age.match(agePattern)){
    ageError="Cannot enter any characters"
}else if(this.state.age<0){
    ageError="Invalid age";
}

if(!this.state.date){
    dateError="Date Cannot Be Empty"
}



if(!this.state.email){
    emailError="Email Cannot Be Empty"
}else if(!this.state.email.includes("@")){
    emailError="Invalid Email";
}

let pattern=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(!this.state.mobile){
    phoneError="Contact Cannot Be Empty"
}else if(this.state.mobile.length>10 || this.state.mobile.length<10 || !this.state.mobile.match(pattern)){
phoneError="Invalid Phone Number";
}

if(!this.state.password){
    passwordError="Password Cannot Be Empty"
}

if(!this.state.confirmPassword){
    passwordError="Password Cannot Be Empty"
}

// if(!this.state.type){
//     typeError="Type Cannot Be Empty"
// }

if(emailError || nameError || genderError || phoneError || subError || dateError|| ageError || quaError || passwordError ){
this.setState({emailError,nameError,phoneError,subError,ageError,dateError,quaError,passwordError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {name,photo,age,gender,email,qualification,mobile,subject,date,rType,password,confirmPassword}=this.state;
        const data={
            name:name,
            photo:photo,
            age:age,
            gender:gender,
            email:email,
            qualification:qualification,
            mobile:mobile,
            subject:subject,
            date:date,
            rType:rType,
            password:password,
            confirmPassword:confirmPassword
           
        }
    
        
    
        axios.post("http://localhost:8091/add",data).then((res)=>{
          alert("Teacher added successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/teacherAll");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
        })
    
    }
}

reset() {
    this.setState({name:"",
    photo:"",
    age:"",
    gender:"",
    email:"",
    qualification:"",
    mobile:"",
    subject:"",
    date:"",
   rType:"",
password:"",
confirmPassword:""})
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
                <h2>Teacher Registration Online</h2>
                {/* {this.state.alertMsg==="success"?<Success/>:null} */}
                {/* {this.state.alertMsg==="error"?<Error/>:null} */}

    <form>

    
    
   
   
   

  <div className="row">
      <div className="col-6">
  <div className="mb-3">

  <input type="text" className="form-control" id="rType" style={{"display":"none"}}
    name="rType" 
    defaultValue={this.state.rType}
    value={this.state.rType} 
    onChange={this.handlInputChange}/>
    

    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}/>
    {this.state.nameError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
):null}
    </div>
    </div>
    <div className="col-6">
<div className="mb-3">
    <label for="age" className="form-label">Age</label>
    <input type="text" className="form-control" id="age"
    name="age" 
     placeholder="Enter age"
    
     min="0"
     value={this.state.age} 
    onChange={this.handlInputChange}
    />
    {this.state.ageError?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.ageError}</div>
):null}
    </div>
    </div>
</div>

<div className="row">
      <div className="col-6">
  <div className="mb-3">
    <label for="gender" className="form-label">Gender</label>
<div>
    <input type="radio" 
    name="gender"
         id="male"  
          value="Male" 
          onChange={this.handlInputChange}
          checked={this.state.gender === "Male"} 
        />Male
      &nbsp;
        <input type="radio" 
         id="female" 
         name="gender"
         onChange={this.handlInputChange}
           value="Female"
           checked={this.state.gender === "Female"}  /> Female
     </div>
     {this.state.genderError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.genderError}</div>
):null}
  </div>
  </div>
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
<label for="qualification" className="form-label">Qulifications(Comma Seperated)</label>
<input type="text" className="form-control" id="qualification" 
name="qualification" 
placeholder="MSc,phD" 
value={this.state.qualification} 
onChange={this.handlInputChange}/>
{this.state.quaError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.quaError}</div>
):null}
</div>
</div>
<div className="col-6">
<div className="mb-3">
<label for="mobile" className="form-label">Contact</label>
<input type="text" className="form-control" id="mobile"
name="mobile" 
 placeholder="xxx xxx xx xx" 
 value={this.state.mobile} 
onChange={this.handlInputChange}
/>
{this.state.phoneError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
):null}
</div>
</div>
</div>



<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="subject" className="form-label">Subject</label>
<select onChange={this.onChangeSelect}  className="form-select" name="subject" id="subject">
        <option selected disabled >--Select Subject--</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>

        {this.state.subError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.subError}</div>
):null}

</select>
          </div>
</div>
<div className="col-6">
<div className="mb-3">
<label for="date" className="form-label">Join Date</label>
<input type="date" className="form-control" id="date"
name="date" 
 placeholder="Enter join date" 
 value={this.state.date} 
onChange={this.handlInputChange}
/>
{this.state.dateError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.dateError}</div>
):null}
</div>
</div>
</div>



<input type="text" className="form-control" id="type" style={{display:'none'}}
name="type" 
 
 value={this.state.type} 
onChange={this.handlInputChange}
/>

<div class="mb-3">
  <label for="formFile" class="form-label">Photo</label>
  <input class="form-control" type="file" id="photo" name="photo" onChange={this.onChangeFile}/>
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
<div className="col-6">
<div className="mb-3">
<label for="confirmPassword" className="form-label">Confirm Password</label>
<input type="password" className="form-control" id="confirmPassword"
name="confirmPassword" 
 placeholder="confirmPassword" 
 value={this.state.confirmPassword} 
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
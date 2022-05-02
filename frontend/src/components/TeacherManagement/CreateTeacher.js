import React from "react";
import axios from "axios";
import Success from "./Success";
import Error from "./Error";

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
            emailError:"",
            nameError:"",
            phoneError:"",
            genderError:"",
            quaError:"",
            ageError:"",
            subError:"",
            dateError:"",
        
}

export default class CreateTeacher extends React.Component{
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

onChangeSelect = e=>{
    this.setState({subject:e.target.value});
}

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
// display =()=>{
//     let successMsg="";
//     successMsg="ppppppppppppp";
//     if(this.state.successMsg){
// this.setState({successMsg})
// return false;
//     }
//     return true;
// }

validate =()=>{

let nameError="";
let genderError="";
let quaError="";
let subError="";
let ageError="";
let emailError="";
let phoneError="";
let dateError="";


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


if(emailError || nameError || genderError || phoneError || subError || dateError|| ageError || quaError ){
this.setState({emailError,nameError,phoneError,subError,ageError,dateError,quaError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {name,photo,age,gender,email,qualification,mobile,subject,date}=this.state;
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
            
        }
    
        
    
        axios.post("http://localhost:8091/add",data).then((res)=>{
          this.setState({alertMsg:"success"});
          this.setState(initialState);
        }).catch(error=>{
            this.setState({alertMsg:"error"});
        })
    
    }
}

    
    render(){
        return(
            <div style={{marginLeft:"325px",width:"76%"}}>
                <h2>Create Teacher</h2>
                {this.state.alertMsg==="success"?<Success/>:null}
                {this.state.alertMsg==="error"?<Error/>:null}

    <form>
  <div className="row">
      <div className="col-6">
  <div className="mb-3">
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
     required="required"
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
<select onChange={this.onChangeSelect}  className="form-select" name="subject" id="subject" >
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

<div class="mb-3">
  <label for="formFile" class="form-label">Photo</label>
  <input class="form-control" type="file" id="photo" name="photo" onChange={this.onChangeFile}/>
</div>

<button type="reset" className="btn btn-danger"  >Reset</button>&nbsp;
  <button type="submit" className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
</form>
        </div>
        )
    }
}
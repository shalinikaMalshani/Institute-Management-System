import React from "react";
import axios from "axios";
import "./customSignUP.css";
import swal from "sweetalert";




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
    cpasswordError:"",
    typeError:""

}

export default class EditTeacherProfile extends React.Component{

    

    constructor(props){
        super(props);

        this.state={alertMsg:"",initialState,rType:"Online",userId:""};
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
// }else if(this.state.age.match(agePattern)){
//     ageError="Cannot enter any characters"
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



if(emailError || nameError || genderError || phoneError || subError || dateError|| ageError || quaError  ){
this.setState({emailError,nameError,phoneError,subError,ageError,dateError,quaError});
return false;
}

return true;
};




componentDidMount() {
    const id= this.props.match.params.id;
          axios.get(`http://localhost:8091/teacher/${id}`).then((res)=>{
                 if(res.data.success){
                  this.setState({
                   name:res.data.teacher.name,
                   photo:res.data.teacher.photo,
                   age:res.data.teacher.age,
                   gender:res.data.teacher.gender,
                   email:res.data.teacher.email,
                   qualification:res.data.teacher.qualification,
                   mobile:res.data.teacher.mobile,
                   subject:res.data.teacher.subject,
                   date:res.data.teacher.date
  
          });
                       
          
          }
                  });

                  this.setState({
                      userId:localStorage.getItem("userId")
                  })
                }   


    onSubmit=(e)=>{

        const id= this.props.match.params.id;
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {name,photo,age,gender,email,qualification,mobile,subject,date,rType}=this.state;
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
            rType:rType
            
           
        }
    
        
        
        axios.put(`http://localhost:8091/update/${id}`,data).then((res)=>{
            
            swal({
                title: "You are successfully update your profile",
                icon: "success",
                button: "ok",
            }).then(function() {
                window.location = `/teacherProfile/${id}`;
            });   
            
            
                    }).catch(error=>{
                        
                        swal({
                            title: "Error occoured when updating.",
                            text: "Please re-enter your details.",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          }).then(function() {
                            window.location = `/teacherEdit/${id}}`;
                        });
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
       <div>

<img src={require('./images/inner_banner_3.jpg')} alt="" style={{width:"100%"}}></img>
    <div style={{position:" absolute",top: "20%",left:" 10%"}}>
      <h1 style={{fontSize:"60px"}}>My Profile Update</h1>
      <p style={{color:"white",marginLeft:"5px"}}>Home // My Profile Update</p>
    </div>


<div>

<form >
  <div class="container">
  <input type="text" className="form-control" id="rType" style={{"display":"none"}}
    name="rType" 
    defaultValue={this.state.rType}
    value={this.state.rType} 
    onChange={this.handlInputChange}/>
    

    <h1>Profile Update</h1>
    
    <hr/>

    <label for="name" ><b>Name</b></label>
    <input type="text"  id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}/>
    {this.state.nameError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.nameError}</div>
):null}

<label for="age" ><b>Age</b></label>
    <input type="text" id="age"
    name="age" 
     placeholder="Enter age"
    
     min="0"
     value={this.state.age} 
    onChange={this.handlInputChange}
    />
    {this.state.ageError?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.ageError}</div>
):null}

<label for="gender" className="form-label"><b>Gender</b></label>
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

<label for="email" ><b>Email</b></label>
<input type="text"  id="email"
name="email" 
 placeholder="xxxx@gmail.com" 
 value={this.state.email} 
onChange={this.handlInputChange}
/>
{this.state.emailError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.emailError}</div>
):null}

<label for="qualification" ><b>Qulifications(Comma Seperated)</b></label>
<input type="text"  id="qualification" 
name="qualification" 
placeholder="MSc,phD" 
value={this.state.qualification} 
onChange={this.handlInputChange}/>
{this.state.quaError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.quaError}</div>
):null}

<label for="mobile"><b>Contact</b></label>
<input type="text"  id="mobile"
name="mobile" 
 placeholder="xxx xxx xx xx" 
 value={this.state.mobile} 
onChange={this.handlInputChange}
/>
{this.state.phoneError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.phoneError}</div>
):null}


<label for="subject" ><b>Subject</b></label>
<select onChange={this.onChangeSelect}  name="subject" id="subject">
        <option selected disabled >--Select Subject--</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>

        {this.state.subError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.subError}</div>
):null}

</select>
        

<label for="date" ><b>Join Date</b></label>
<input type="date"  id="date"
name="date" 
 placeholder="Enter join date" 
 value={this.state.date} 
onChange={this.handlInputChange}
/>
{this.state.dateError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.dateError}</div>
):null}






  <label for="formFile">Photo</label>
  <input  type="file" id="photo" name="photo" onChange={this.onChangeFile}/>
    <img src={this.state.photo} alt="" width="80px" height="80px"/>



<br></br>

    
    <label>
      <input type="checkbox" checked="checked" name="remember" style={{"marginBottom":"15px"}}/> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#" style={{"color":"dodgerblue"}}>Terms & Privacy</a>.</p>

    <div class="clearfix">
      
      <button className="cancelbtn" onChange={this.reset} >Reset</button>
  <button type="submit" className="signupbtn" onClick={this.onSubmit} >Submit</button>

    </div>
  </div>
</form>
    </div>

</div>







    )
}

}
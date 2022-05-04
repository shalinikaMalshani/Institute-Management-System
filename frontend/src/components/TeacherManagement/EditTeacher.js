import React, { Component } from "react";
import axios from "axios";

export default class EditTeacher  extends Component{

    constructor(props){
        super(props);

        this.state={
            name:"",
            photo:"",
            age:"",
            gender:"",
            email:"",
            qualification:"",
            mobile:"",
            subject:"",
            date:""
            
        }
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

onSubmit=(e)=>{
        

    e.preventDefault();
    const id= this.props.match.params.id;
    const {name,photo,age,gender,email,qualification,mobile,subject,date} =this.state;
    const data={
        name:name,
            photo:photo,
            age:age,
            gender:gender,
            email:email,
            qualification:qualification,
            mobile:mobile,
            subject:subject,
            date:date
    }

    
    axios.put(`http://localhost:8091/update/${id}`,data).then((res)=>{
        alert("Teacher Updated");
        this.props.history.push("/teacherAll");     
        
                })
        
        
        
            }

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
           
              }


render(){
    return(
        <div style={{marginLeft:"325px",width:"76%"}}>
        <h2>Update Teacher</h2>
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
</div>
</div>
<div className="col-6">
<div className="mb-3">
<label for="age" className="form-label">Age</label>
<input type="text" className="form-control" id="age"
name="age" 
placeholder="Enter age" 
value={this.state.age} 
onChange={this.handlInputChange}
/>
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
</div>
</div>
</div>



<div className="row">
<div className="col-6">
<div className="mb-3">
<label for="subject" className="form-label">Subject</label>
<select onChange={this.onChangeSelect}  className="form-select" name="subject" id="subject" value={this.state.subject} >
<option selected disabled >--Select Subject--</option>
<option value="Chemistry">Chemistry</option>
<option value="Physics">Physics</option>
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
</div>
</div>
</div>
<div class="mb-3">
<label for="formFile" class="form-label">Photo</label>&nbsp;
<img src={this.state.photo} width="100px" height="100px"></img>
<br></br><br></br>
<input class="form-control" type="file" id="photo" name="photo" onChange={this.onChangeFile}/>
</div>


<button type="submit" className="btn btn-success" onClick={this.onSubmit} >Update</button>
</form>
</div>
    )
}
}
import React from "react";
import axios from "axios";


const initialState={
            subject:"",
            lessonNo:"",
            lessonNote:"",
            tute:"",
            stuTuteAnswers:"",
            tuteAnswers:"",
            referances:"",
            subjectError:"",
            lessonNoError:"",
            lessonNoteError:"",
            tuteError:"",
            stuTuteAnswersError:"",
            tuteAnswersError:"",
            referancesError:""
        
}

export default class OnlineTeacherLesson extends React.Component{
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







onChangeFile1=e=>{
    
    this.setState({
        lessonNote:e.target.files[0].name
       

    })
}

onChangeFile2=e=>{
    
    this.setState({
        tute:e.target.files[0].name
       

    })
}

onChangeFile4=e=>{
    
    this.setState({
        tuteAnswers:e.target.files[0].name,
       

    })
}




validate =()=>{

    let subjectError="";
 let lessonNoError="";
 let lessonNoteError="";
 let  tuteError="";
 let stuTuteAnswersError="";
 let tuteAnswersError="";
 let  referancesError="";

 if(!this.state.subject){
    subjectError="Subject Cannot Be Empty"
}



if(!this.state.lessonNo){
    lessonNoError="Lesson No Cannot Be Empty"
}

if(!this.state.lessonNote){
    lessonNoteError="Notes Cannot Be Empty"
}

if(!this.state.tute){
    tuteError="Tute Cannot Be Empty"
}

if(!this.state.stuTuteAnswers){
    stuTuteAnswersError="Answer Link Cannot Be Empty"
}





if(!this.state.referances){
    referancesError="Referances Cannot Be Empty"
}


if(lessonNoError || lessonNoteError || tuteError || stuTuteAnswersError|| referancesError ){
this.setState({lessonNoError,lessonNoteError,tuteError,stuTuteAnswersError,referancesError});
return false;
}

return true;
};

    onSubmit=(e)=>{
        
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
        const {subject,lessonNo,lessonNote,tute,stuTuteAnswers,tuteAnswers , referances}=this.state;
        const data={
            subject:subject,
            lessonNo:lessonNo,
            lessonNote:lessonNote,
            tute:tute,
            stuTuteAnswers:stuTuteAnswers,
            tuteAnswers:tuteAnswers,
            referances: referances
           
           
        }
    
        
    
        axios.post("http://localhost:8091/addLesson",data).then((res)=>{
          alert("Teacher lesson added successfully!");
          console.log("data",data);
          this.setState(initialState);
            this.props.history.push("/");
        }).catch(error=>{
            alert("Error occoured.Please check and resubmit the details.");
        })
    
    }
}

reset() {
    this.setState({subject:"",
    lessonNo:"",
    lessonNote:"",
    tute:"",
    stuTuteAnswers:"",
    tuteAnswers:"",
    referances:"",
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
                <h2>Teacher Lesson Online</h2>
                {/* {this.state.alertMsg==="success"?<Success/>:null} */}
                {/* {this.state.alertMsg==="error"?<Error/>:null} */}

    <form>

    <div className="row">
    
<div className="mb-3">
<label for="subject" className="form-label">Subject</label>
<select onChange={this.onChangeSelect}  className="form-select" name="subject" id="subject">
        <option selected disabled >--Select Subject--</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>

        {this.state.subjectError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.subjectError}</div>
):null}

</select>
          </div>

</div> 
    
   
   
   

  <div className="row">
      <div className="col-6">
  <div className="mb-3">

    <label for="name" className="form-label">Lesson No</label>
    <input type="text" className="form-control" id="lessonNo" 
    name="lessonNo" 
    placeholder="Lesson No" 
    value={this.state.lessonNo} 
    onChange={this.handlInputChange}/>
    {this.state.lessonNoError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoError}</div>
):null}
    </div>
    </div>
    <div className="col-6">
<div className="mb-3">
    <label for="age" className="form-label">Lesson Notes</label>
    <input type="file" className="form-control" id="lessonNote"
    name="lessonNote" 
  onChange={this.onChangeFile1}
    />
     {this.state.lessonNoteError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoteError}</div>
):null}
   
    </div>
    </div>
</div>


<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="qualification" className="form-label">Tute</label>
<input type="file" className="form-control" id="tute" 
name="tute" 
onChange={this.onChangeFile2}
/>
{this.state.tuteError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.tuteError}</div>
):null}
</div>
</div>

<div className="col-6">
<div className="mb-3">
<label for="mobile" className="form-label">Tute Answer Upload Link</label>
<input type="text" className="form-control" id="stuTuteAnswers"
name="stuTuteAnswers" 
value={this.state.stuTuteAnswers}
onChange={this.handlInputChange}
/>
{this.state.stuTuteAnswersError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.stuTuteAnswers}</div>
):null}
</div>
</div>
</div>



<div className="row">
      <div className="col-6">
<div className="mb-3">
<label for="subject" className="form-label">Tute Answers</label>
<input type="file" className="form-control" id="tuteAnswers"
name="tuteAnswers" 
onChange={this.onChangeFile4}
 
/>
          </div>
</div>
<div className="col-6">
<div className="mb-3">
<label for="date" className="form-label">Referances</label>
<input type="text" className="form-control" id="referances"
name="referances" 
value={this.state.referances}
onChange={this.handlInputChange}
/>
{this.state.referancesError ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.referancesError}</div>
):null}
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
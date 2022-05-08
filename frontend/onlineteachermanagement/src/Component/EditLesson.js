import React from "react";
import axios from "axios";
import "./customSignUP.css";




const initialState={
    subject:"",
    lessonNo:"",
    lessonNote:"",
    tute:"",
    stuTuteAnswers:"",
    tuteAnswers:"",
    referances:"",
    tuteAnswersAlert:""
            
        
        
}

export default class EditMeeting extends React.Component{

    

    constructor(props){
        super(props);

        this.state={initialState};
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






    onSubmit=(e)=>{
        const id= this.props.match.params.id;
        e.preventDefault();
        
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
    
        
    axios.put(`http://localhost:8091/updateLesson/${id}`,data).then((res)=>{
          alert("Updated Lesson");
          this.props.history.push("/OnlineAllLesson");
          this.setState(initialState);
          console.log(data);
        }).catch(error=>{
            alert("error");
        })
    
    
}


componentDidMount() {
    const id= this.props.match.params.id;
          axios.get(`http://localhost:8091/teacherLessson/${id}`).then((res)=>{
                 if(res.data.success){
                  this.setState({
                    subject:res.data.teacher.subject,
                    lessonNo:res.data.teacher.lessonNo,
                    lessonNote:res.data.teacher.lessonNote,
                    tute:res.data.teacher.tute,
                    stuTuteAnswers:res.data.teacher.stuTuteAnswers,
                    tuteAnswers:res.data.teacher.tuteAnswers,
                    referances: res.data.teacher.referances
  
          });
                       
          
          }
                  });

                 
                  
             
                }
  
  
    

    


render(){
   
    return(
        <React.Fragment>



<div>

<form >
  <div class="container">
    

    <h1>Update Lesson</h1>
    
    <hr/>
    
    <label for="subject" >Subject</label>
    <select onChange={this.onChangeSelect}   name="subject" id="subject" value={this.state.subject}>
            <option selected disabled >--Select Subject--</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Physics">Physics</option>
    
            {this.state.subjectError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.subjectError}</div>
    ):null}
    
    </select>
    
        <label for="name" >Lesson No</label>
        <input type="text" id="lessonNo" 
        name="lessonNo" 
        placeholder="Lesson No" 
        value={this.state.lessonNo} 
        onChange={this.handlInputChange}/>
        {this.state.lessonNoError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoError}</div>
    ):null}
        <label for="age" >Lesson Notes</label>
        <input type="file" id="lessonNote"
        name="lessonNote" 
    
      onChange={this.onChangeFile1}
        />
         {this.state.lessonNoteError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.lessonNoteError}</div>
    ):null}
       
    <label for="qualification" >Tute</label>
    <input type="file" id="tute" 
    name="tute" 
    
    onChange={this.onChangeFile2}
    />
    {this.state.tuteError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.tuteError}</div>
    ):null}
    <label for="mobile" >Tute Answer Upload Link</label>
    <input type="text" id="stuTuteAnswers"
    name="stuTuteAnswers" 
    value={this.state.stuTuteAnswers}
    onChange={this.handlInputChange}
    />
    {this.state.stuTuteAnswersError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.stuTuteAnswers}</div>
    ):null}
    <label for="subject" >Tute Answers</label>
    <input type="file" id="tuteAnswers"
    name="tuteAnswers" 
    
    onChange={this.onChangeFile4}
     
    />
    <label for="date" >Referances</label>
    <input type="text" id="referances"
    name="referances" 
    value={this.state.referances}
    onChange={this.handlInputChange}
    />
    {this.state.referancesError ?(
    <div style={{color:"red",fontWeight:"bold"}} >{this.state.referancesError}</div>
    ):null}
    
    
    <div class="clearfix">
      
      <button className="cancelbtn" onChange={this.reset} >Reset</button>
  <button type="submit" className="signupbtn" onClick={this.onSubmit} >Submit</button>

    </div>
  </div>
</form>
    </div>











            </React.Fragment>
    )
}

}
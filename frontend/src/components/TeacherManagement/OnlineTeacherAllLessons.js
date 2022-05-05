import React from "react";
import axios from "axios";

export default class OnlineTeacherAllLessons extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    lessons:[],
    tuteAnswersAlert:"",
    stuTuteAnswersAlert:""
  };
} 

componentDidMount(){
  this.retrieveLessons();//this method gather the all sub comp and comps

  
}


retrieveLessons(){
axios.get("http://localhost:8091/AllLessons")
.then(res=>{
if(res.data.success){
this.setState({
  lessons:res.data.existingLessons
})
console.log(this.state.lessons);

{ 
  this.state.lessons.map( lesson => {
      if(lesson.tuteAnswers==null){
        this.setState({
            tuteAnswersAlert:"Currently unavilable for the students"
      })
     console.log("called",this.state.tuteAnswersAlert);
    }
    
  }) 



  this.state.lessons.map( lesson => {
      if(lesson.stuTuteAnswers==null){
        this.setState({
            stuTuteAnswersAlert:"Linked closed"
      })
     console.log("called",this.state.stuTuteAnswersAlert);
    }
    
  }) 
}


}
})
}

  

onDelete =(id)=>{
  axios.delete(`http://localhost:8091/deleteLesson/${id}`).then((res)=>{
    
   alert("Lesson deleted");
  this.retrieveLessons();
        
    }).catch((error)=>{
              alert("Error occoured");
    
            })

}

filterData(lessons,searchKey){
  const result=lessons.filter((lesson)=>
  lesson.lessonNo.toString().toLowerCase().includes(searchKey)
  
  )

  this.setState({lessons:result})
}

handleSearch = (e)=>{
const searchKey=e.target.value;

axios.get("http://localhost:8091/AllLessons")
.then(res=>{
if(res.data.success){
this.filterData(res.data.existingLessons,searchKey);
}
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
             
         {/* <div className="container">   */}
   <div className="row">
 <div className="col-lg-12"> 
    <h2>All Lessons</h2>
    <div className="col-lg-9 mt-2 mb-2">
      <input className="form-control" type="search" placeholder="search" name="search" onChange={this.handleSearch} ></input>
    </div>
  
    <h1>Chemistry</h1>
    {this.state.lessons.map((lessons,index)=>(
        
      <div key={index}>
    <dl className='row'>
                
                <dt className='col-sm-3'>Lesson:</dt><dd className='col-sm-9'>{lessons.lessonNo}</dd>
                <dt className='col-sm-3'>Notes:</dt><dd className='col-sm-9'><img src={require('../../images/pdf2.png')} width="25px" height="25px"/>&nbsp;{lessons.lessonNote}</dd>
                <dt className='col-sm-3'>Tute:</dt><dd className='col-sm-9'><img src={require('../../images/doc.png')} width="35px" height="30px" style={{"marginLeft":"-4px"}}/>{lessons.tute}</dd>
                <dt className='col-sm-3'>Students tute answers:</dt><dd className='col-sm-9'>
<div style={{color:"red",fontWeight:"bold"}}>{lessons.stuTuteAnswers}</div></dd>
              
                <dt className='col-sm-3'>Tute Answers:</dt><dd className='col-sm-9'>{this.state.tuteAnswersAlert ?(
<div style={{color:"red",fontWeight:"bold"}} >{this.state.tuteAnswersAlert}</div>
):null}{lessons.tuteAnswers}</dd>
                <dt className='col-sm-3'>Referances:</dt><dd className='col-sm-9'>{lessons.referances}</dd>
                
                
                
                </dl>
                <a className="btn btn-warning"  role="button" href={`/lessonEdit/${lessons._id}`} ><i className="fas fa-edit"></i>&nbsp;Edit</a>
      &nbsp;
      <a className="btn btn-danger" role="button" href="" onClick={()=>this.onDelete(lessons._id)} ><i className="far fa-trash-alt"></i>&nbsp;Delete</a>
       
                </div>
    ))}
  




   
    


  </div>
   </div>
    </div>
 );
   }
 }


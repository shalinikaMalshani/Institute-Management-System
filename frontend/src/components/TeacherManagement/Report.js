 import React from "react";
import axios from "axios";
import "../../css/report.css";

export default class Report extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    reportTeachers:[],
    date:"",
    chemCount:0,
    phyCount:0,
    counter:0,
    online:0,
    cRate:0,
    oRate:0
    
  };
} 



componentDidMount(){

    this.getDate();
   
    const sDate=this.props.match.params.sDate;
    const eDate=this.props.match.params.eDate;
    axios.get(`http://localhost:8091/report/${sDate}/${eDate}`).then((res)=>{
   if(res.data.success){
     this.setState({
     reportTeachers:res.data.report
       });
       console.log("teachers",this.state.reportTeachers);


       //calculate no of teachers in each subject
       { 
        this.state.reportTeachers.map( teacher => {
            if(teacher.subject==='Chemistry'){
              this.setState({
                  chemCount:this.state.chemCount+1
            })
            }else if(teacher.subject==='Physics'){
              this.setState({
                phyCount:this.state.phyCount+1
          })
            }
            
          
        }) 
      }

      { 
        this.state.reportTeachers.map( teacher => {
            if(teacher.rType==='Counter'){
              this.setState({
                  counter:this.state.counter+1
            })
            }else if(teacher.rType==='Online'){
              this.setState({
                online:this.state.online+1
          })
            }
            
          
        }) 

        this.setState({
          cRate:(this.state.counter/this.state.reportTeachers.length)*100
        })
        this.setState({
          oRate:(this.state.online/this.state.reportTeachers.length)*100
        })

      }
      
}

});



}

getDate(){
    let today = new Date();
    this.setState({
        date: today. getDate() + '-' + parseInt(today. getMonth() + 1) + '-' + today. getFullYear()
    })
    
}

  
render(){
  
 



   return(
     
  <div style={{marginLeft:"325px",width:"76%",marginTop:"5px"}}>
    <div className="row">
 <div className="col-lg-12"> 
 <div style={{display:'flex'}}>
    <h2>Teacher Management Report</h2>&nbsp;&nbsp;<h4 style={{marginTop:'8px'}}>Monthly teacher registrations</h4>
    </div>

    <div className="col-12">
            <div className="card-box">
            <div style={{display:'flex'}}>
    <p style={{fontSize:'20px',fontWeight:'500'}}>Teacher Management Report</p>&nbsp;&nbsp;<p style={{fontWeight:'500',marginTop:'5px'}}>Monthly teacher registrations</p>
    </div>
<hr style={{marginTop:0}}></hr>
<div style={{display:'flex'}}>
<h1 style={{fontSize:'34px'}}>Monthly teacher registration report</h1>&nbsp;&nbsp;<h3 style={{marginTop:'6px'}}>{this.state.date}</h3>
</div>
            <div className="d-flex justify-content-between" id="section">
                <div className="sec1" style={{lineHeight:'37%'}}>
                    <br></br>
                  <p>From</p>
                    <p style={{fontWeight:'500'}}>Shalinika Malshani</p>
                    <p>sha@gmail.com</p>
                </div>
                <div className="sec2" style={{lineHeight:'37%'}}>
                    <br></br>
                   <p>To</p>
                   <p style={{fontWeight:'500'}}>Amzo Learning Educational Center</p>
                   <p>Galle Road,Colomo 3</p>
                   <p>0112020310</p>
                   <p>amzolearing.edu@gmail.com</p>
                </div>
               
            </div>
            <br></br>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Subject</th>
      <th scope="col">Qulifications</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Join Date</th>
      
    </tr>
  </thead>
  <tbody>
    {this.state.reportTeachers.map((teachers,index)=>(

      <tr key={index}>
      <th scope="row">{index+1}</th>
     
      <td>
      
        {teachers.name}
        
        </td>
  
  <td>{teachers.age}</td>
      <td>{teachers.gender}</td>
      <td>{teachers.subject}</td>
      <td>{teachers.qualification}</td>
      <td>{teachers.email}</td>
      <td>{teachers.mobile}</td>
      <td>{teachers.date}</td>
     </tr>
    ))}
  </tbody>
</table>

<h4>Report Summary {this.state.date}</h4>
<p>Total teachers:{this.state.reportTeachers.length}</p>
<p>Total chemistry teachers:{this.state.chemCount}</p>
<p>Total physics teachers:{this.state.phyCount}</p>
<p>Counter rate:{this.state.cRate.toFixed(2)}%</p>
<p>Online rate:{this.state.oRate.toFixed(2)}%</p>



            </div>
        </div>
  </div>
   </div>
      </div>
 );
   }
 }


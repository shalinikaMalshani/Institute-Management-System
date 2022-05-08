import React from "react";
import axios from "axios";
// import "./report.css";
// import "./print.css";

export default class StudentReport extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    reportStudent:[],
    date:"",
    bioCount:0,
    mathsCount:0,
    artCount:0,
    comCount:0,
    techCount:0,
    cRate:0,
    oRate:0
    
  };
} 



componentDidMount(){

    this.getDate();

    const sDate=this.props.match.params.sDate;
    const eDate=this.props.match.params.eDate;
    
   axios.get(`http://localhost:8091/student/report/${sDate}/${eDate}`).then((res)=>{
   if(res.data.success){
     this.setState({
     reportStudent:res.data.report
       });
         console.log("student",this.state.reportStudent);


         //calculate the student count
         {
           this.state.reportStudent.map( student =>{
             if(student.stream == 'biology'){
               this.setState({
                 bioCount: this.state.bioCount + 1
               })
             }else if(student.stream == "mathematics"){
              this.setState({
                mathsCount: this.state.mathsCount + 1
              })
             }else if(student.stream == "commerce"){
              this.setState({
                comCount: this.state.comCount + 1
              })
             }else if(student.stream == "art"){
              this.setState({
                artCount: this.state.artCount + 1
              })
             }else if(student.stream == "technology"){
              this.setState({
                techCount: this.state.techCount + 1
              })
            }
            })
          }

          // { 
          //   this.state.reportStudent.map( student => {
          //       if(student.rtype==='Counter'){
          //         this.setState({
          //             counter:this.state.counter+1
          //       })
          //       }else if(student.rtype==='Online'){
          //         this.setState({
          //           online:this.state.online+1
          //     })
          //       }
                
              
          //   }) 
    
          //   this.setState({
          //     cRate:(this.state.counter/this.state.reportStudent.length)*100
          //   })
          //   this.setState({
          //     oRate:(this.state.online/this.state.reportStudent.length)*100
          //   })
    
          // }
        
}
});

}

getDate(){
    let today = new Date();
    this.setState({
        date: today. getDate() + '-' + parseInt(today. getMonth() + 1) + '-' + today. getFullYear()
    })
    
}

print(){
  window.print();

  var prtContent = document.getElementById("print");
  var WinPrint = window.open('', '', '','top=-200,width=15000,right=100,height=5000,toolbar=0,scrollbars=0,status=0');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();

 
    
    

}


  

render(){
   return(
    <div className="container" style={{padding:"40px",marginLeft:"280px",width:"76%"}}>
       <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'40px', width:'110px', marginTop:"-10px"}}>
                <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}>&nbsp;<i class="fa-solid fa-angles-left"
                style={{marginTop:'5px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;Back</a>
                </button>
                <br></br><br></br>
    <div className="row">
 <div className="col-lg-12"> 
 <div style={{display:'flex'}}>
    <h3>Student Management Report</h3>&nbsp;&nbsp;<h4 style={{marginTop:'8px'}}>Monthly student registrations</h4>
    </div>

    <div className="col-12">
            <div className="card-box">
            <div style={{display:'flex'}}>
    <p style={{fontSize:'20px',fontWeight:'500'}}>Student Management Report</p>&nbsp;&nbsp;<p style={{fontWeight:'500',marginTop:'5px'}}>Monthly student registrations</p>
    </div>
<hr style={{marginTop:0}}></hr>
<div style={{display:'flex'}}>
<h2 style={{fontSize:'30px'}}>Monthly Student Registration Report</h2>&nbsp;&nbsp;<h3 style={{marginTop:'6px'}}>{this.state.date}</h3>
</div>
            <div className="d-flex justify-content-between" id="section">
                <div className="sec1" style={{lineHeight:'37%'}}>
                    <br></br>
                  <p>From</p>
                    <p style={{fontWeight:'500'}}>Janani Madushika</p>
                    <p>janani@gmail.com</p>
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
              <tr style={{fontSize:"15px"}}>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Birth Day</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">School</th>
                  <th scope="col">A/L Stream</th>
                  <th scope="col">Guardian Name</th>
                  <th scope="col">Admission Fees(Rs.)</th>
                  <th scope="col">Register Date</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              <tbody>
    {this.state.reportStudent.map((studentList,index)=>(

      <tr key={index}>
     <th scope="row">{index+1}</th>
                     {/* <td>{studentList.stuName}</td> */}
                     <td style={{fontSize:"12px"}}>{studentList.stuName}</td>
                     <td style={{fontSize:"12px"}}>{studentList.address}</td>
                     <td style={{fontSize:"12px"}}>{studentList.birthDay}</td>
                     <td style={{fontSize:"12px"}}>{studentList.gender}</td>
                     <td style={{fontSize:"12px"}}>{studentList.email}</td>
                     <td style={{fontSize:"12px"}}>{studentList.phone}</td>
                     <td style={{fontSize:"12px"}}>{studentList.school}</td>
                     <td style={{fontSize:"12px"}}>{studentList.stream}</td>
                     <td style={{fontSize:"12px"}}>{studentList.guardianName}</td>
                     <td style={{fontSize:"12px"}}>{studentList.admissionFees}</td>
                     <td style={{fontSize:"12px"}}>{studentList.rdate}</td>
                           {/* <td style={{size:"12px"}}>
                      <a  className="btn btn-danger" style={{fontSize:"12px",width:"80px", height:"30px"}} href="#" onClick={() => this.onDelete(studentList._id)}>
                         <i className="fas fa-trash-alt"></i>&nbsp;Delete
                       </a>
                     </td>  */}

                   </tr>
                ))}
              </tbody> 
             </table>

<h4>Report Summary {this.state.date}</h4>
<p>Total Student: {this.state.reportStudent.length}</p>
<p>Total Biology Student: {this.state.bioCount}</p>
<p>Total Mathematics Student: {this.state.mathsCount}</p>
<p>Total Commerce Student: {this.state.comCount}</p>
<p>Total Art Student: {this.state.artCount}</p>
<p>Total Technology Student: {this.state.techCount}</p>
{/* <p>Counter rate:{this.state.cRate.toFixed(2)}%</p>
<p>Online rate:{this.state.oRate.toFixed(2)}%</p> */}



            </div>
        </div>
        
  </div>
  <div style={{marginTop:"70px", marginLeft:"0px", height:"70px"}}>
                    <button className="btn btn-danger" style={{marginLeft:"750px", marginTop:"-90px", height:"40px",width:"150px"}} onClick={this.print}>
                    <i class="fa-solid fa-print"></i>&nbsp; &nbsp;Print</button>

                </div>
            </div>
   </div>
     
 );
   }
 }

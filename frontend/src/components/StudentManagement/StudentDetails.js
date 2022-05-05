import React, {Component} from "react";
// import jspdf from "jspdf";
import axios from "axios"; 
// import ReactToPrint from "react-to-print";
// import "./print.css";


export default class StudentDetails extends Component{

    constructor(props){
        super(props);

        this.state={
            studentList:{}
        };

    }



    componentDidMount(){
        const id = this.props.match.params.id; 

        axios.get(`http://localhost:8091/student/get/${id}`).then((res) =>{
            this.setState({
                        stuName:res.data.students.stuName,
                        address:res.data.students.address,
                        birthDay:res.data.students.birthDay,
                        gender:res.data.students.gender,
                        email:res.data.students.email,
                        phone:res.data.students.phone,
                        school:res.data.students.school,
                        stream:res.data.students.stream,
                        guardianName:res.data.students.guardianName,
                        admissionFees:res.data.students.admissionFees,
                        rdate:res.data.students.rdate
    
    
                    });
    
                    console.log(this.state.student);
                }
            
         ) }


        //  pdfGenerate = () =>{
        // //     // this.componentRef
        //     // var content = this.downloadcontent
        //     // var doc = new jspdf();
        //     // var id = downloadcontent;
        //     // // doc.console(content);
        //     // doc.map(downloadcontent);  
        //     // doc.save('profile.pdf');

        //     var doc = new jspdf();
        //     var content = document.getElementById("test");
        //     doc.text(content);  
        //     doc.save('profile.pdf');

        // }


        // // pdfGenerate = (downloadcontent) => {
        // //     this.componentRef();
        // //     var doc = new ReactToPrint();
        // //     doc.save('profile.pdf')
        // // }

    print(){
        // window.print();

        var prtContent = document.getElementById("print");
        var WinPrint = window.open('', '', 'left=500,top=100,width=1000,right=1000,height=5000,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
    }
  
      
    render(){
        const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate} = this.state;
      

        return(
            <div>
            <div className="container"  id= 'print'  style={{padding:"40px",marginLeft:"450px",marginTop:"50px",marginRight:"300px",marginBottom:"100px",width:"50%", backgroundColor:"white", height:"700px"}}>
              <div className="logo">
                <img src={require('../../images/logon.jpeg')} width="60px" height="60px"/>&nbsp;&nbsp; <b style={{fontSize:"25px", marginInlineStart:"20px"}}>Amzo Learning </b>
              </div>
                <br/>
                
                <h5><i>Registation Form</i></h5>
                <hr/>

                <dl  className="row col-sm-12">
                    <dt className="col-sm-6">Name</dt>
                    <dd className="col-md-6">{stuName}</dd>
                    <dt className="col-md-6">Address</dt>
                    <dd className="col-md-6">{address}</dd>
                    <dt className="col-md-6">Birth Day</dt>
                    <dd className="col-md-6">{birthDay}</dd>
                    <dt className="col-md-6">Gender</dt>
                    <dd className="col-md-6">{gender}</dd>
                    <dt className="col-md-6">Email</dt>
                    <dd className="col-md-6">{email}</dd>
                    <dt className="col-md-6">Contact Number</dt>
                    <dd className="col-md-6">{phone}</dd>
                    <dt className="col-md-6">School</dt>
                    <dd className="col-md-6">{school}</dd>
                    <dt className="col-md-6">A/L Stream</dt>
                    <dd className="col-md-6">{stream}</dd>
                    <dt className="col-md-6">Guardian Name</dt>
                    <dd className="col-md-6">{guardianName}</dd>
                    <dt className="col-md-6">Registation Fees</dt>
                    <dd className="col-md-6">Rs.{admissionFees}</dd>
                    <dt className="col-md-6">Register Date</dt>
                    <dd className="col-md-6">{rdate}</dd>
                    
                    <br/><br/><br></br><br></br>
                    <dt className="col-md-6"><small>.................................</small></dt>
                    <dt className="col-md-6"><small>.................................</small></dt>
                    <dt className="col-md-6"><small style={{marginLeft:"25px"}}>Signature</small></dt> 
                   
                    <dt className="col-md-6"><small style={{marginLeft:"50px"}}>Date</small></dt> 
                </dl>

               
                
            </div>
            <div style={{marginTop:"70px", marginLeft:"0px", height:"70px"}}>
                    <button className="btn btn-danger" style={{marginLeft:"900px", marginTop:"-120px", height:"40px",width:"150px"}} onClick={this.print}>
                    <i class="fa-solid fa-print"></i>&nbsp; &nbsp;Print</button>

                </div>
            </div>
        )
        
    }
}
import React, {Component} from "react";
// import jspdf from "jspdf";
import axios from "axios"; 
// import ReactToPrint from "react-to-print";
// import "./print.css";


export default class EnrolledSubjectDetails extends Component{

    constructor(props){
        super(props);

        this.state={
            subjectList:{}
        };

    }



    componentDidMount(){
        const id = this.props.match.params.id; 

        axios.get(`http://localhost:8091/payment/getPayment/${id}`).then((res) =>{
            this.setState({
                stuName:res.data.payment.stuName,
                email:res.data.payment.email,
                stream:res.data.payment.stream,
                subject1:res.data.payment.subject1,
                subject2:res.data.payment.subject2,
                subject3:res.data.payment.subject3,
                subject4:res.data.payment.subject4,
                teacher:res.data.payment.teacher,
                teacher2:res.data.payment.teacher2,
                teacher3:res.data.payment.teacher3,
                teacher4:res.data.payment.teacher4,
                rdate:res.data.payment.rdate
    
    
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
        const{stuName,subject1,subject2,subject3,subject4,teacher,
            teacher2,teacher3,teacher4,total,amount,email,stream,rdate} = this.state;
      

        return(
            <div>
            <div className="container"  id= 'print'  style={{padding:"40px",marginLeft:"450px",marginTop:"50px",marginRight:"300px",marginBottom:"100px",width:"50%", backgroundColor:"white", height:"700px"}}>
              <div className="logo">
                <img src={require('../../images/logon.jpeg')} width="60px" height="60px"/>&nbsp;&nbsp; <b style={{fontSize:"25px", marginInlineStart:"20px"}}>Amzo Learning </b>
              </div>
                <br/>
                
                <h5><i>Enrolled Subjects List</i></h5>
                <hr/>

                <dl  className="row col-sm-12">
                    <dt className="col-sm-6">Name</dt>
                    <dd className="col-md-6">{stuName}</dd>
                    <dt className="col-md-6">Email</dt>
                    <dd className="col-md-6">{email}</dd>
                    <dt className="col-md-6">A/L Stream</dt>
                    <dd className="col-md-6">{stream}</dd>
                    <dt className="col-md-6">Registation Date</dt>
                    <dd className="col-md-6">{rdate}</dd>
                    <dt className="col-md-6">Subject 1</dt>
                    <dd className="col-md-6">{subject1}</dd>
                    <dt className="col-md-6">Subject 2</dt>
                    <dd className="col-md-6">{subject2}</dd>
                    <dt className="col-md-6">Subject 3</dt>
                    <dd className="col-md-6">{subject3}</dd>
                    <dt className="col-md-6">Subject 4</dt>
                    <dd className="col-md-6">{subject4}</dd>
                    
                    
                
                </dl>   
            </div>
           
            </div>
        )
        
    }
}
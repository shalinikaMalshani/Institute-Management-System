import React, {Component} from "react";
// import jspdf from "jspdf";
import axios from "axios"; 
// import ReactToPrint from "react-to-print";
// import "./print.css";
// import Swal from "sweetalert";


export default class StudentProfile extends Component{

    constructor(props){
        super(props);

        this.state={
            studentList:{}
        };

    }



    componentDidMount(){
        const id = this.props.match.params.id; 

        axios.get(`http://localhost:8091/onlineStudent/gets/${id}`).then((res) =>{
            this.setState({
                        stuName:res.data.onlineStudents.stuName,
                        address:res.data.onlineStudents.address,
                        birthDay:res.data.onlineStudents.birthDay,
                        gender:res.data.onlineStudents.gender,
                        email:res.data.onlineStudents.email,
                        phone:res.data.onlineStudents.phone,
                        school:res.data.onlineStudents.school,
                        stream:res.data.onlineStudents.stream,
                        guardianName:res.data.onlineStudents.guardianName,
                        admissionFees:res.data.onlineStudents.admissionFees,
                        rdate:res.data.onlineStudents.rdate,
                        profileImage: res.data.onlineStudents.profileImage
    
    
                    });
    
                    console.log(this.state.onlineStudents);
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

      //Delete Function
    //   onDelete = (id) =>{
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           Swal.fire(
    //             'Deleted!',
    //             'Your file has been deleted.',
    //             'success'
                
    //             // axios.delete(`http://localhost:9000/onlineStudent/onlineDelete/${id}`).then((res) =>{
    //             //     // alert("Delete Successfully");
    //             //     this. retriveStudentList();
    //           )
    //             axios.delete(`http://localhost:8091/onlineStudent/onlineDelete/${id}`).then((res) =>{
    //                 // alert("Delete Successfully");
    //                 this. retriveStudentList();
    //             })
    //         this.props.history.push('/onlineStudents')
    //         }
    //       })
    //     // axios.delete(`http://localhost:9000/onlineStudent/onlineDelete/${id}`).then((res) =>{
    //     //     // alert("Delete Successfully");
    //     //     this. retriveStudentList();
    //     // })
    //     }
  
       //Delete Function
       onDelete = (id) =>{
        axios.delete(`http://localhost:8091/onlineStudent/onlineDelete/${id}`).then((res) =>{
            alert("Delete Successfully");
            this. retriveStudentList();
        })
        }
  
      
    render(){
        const{stuName,address,birthDay,gender,email,phone,school,stream,guardianName,admissionFees,rdate,profileImage} = this.state;
      

        return(
            <div>
                <span class="border border-dark">
            <div className="container"  id= 'print'  style={{padding:"40px",marginLeft:"250px",marginTop:"0px", marginBottom:"50px",marginRight:"300px",width:"50%", backgroundColor:"white", height:"900px"}}>
              {/* <div className="logo">
                <img src={require('../images/logon.jpeg')} width="60px" height="60px"/>&nbsp;&nbsp; <b style={{fontSize:"25px", marginInlineStart:"20px"}}>Amzo Learning </b>
              </div> */}
                <br/>
                
                <h3 style={{paddingLeft:"42%"}}><i>Profile</i></h3>
                <hr/>

                <dl  className="row col-sm-12" style={{paddingLeft:"20%"}}>
                    <dt className="col-sm-6"></dt>
                    <dd style={{marginLeft:"50px"}}className="col-md-6"><img style={{width:"200px", height:"200px", borderRadius:"50%", alignItems: "center"}}src={profileImage}></img></dd><br></br>
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
                    {/* <dt className="col-md-6"><small>.................................</small></dt>
                    <dt className="col-md-6"><small>.................................</small></dt>
                    <dt className="col-md-6"><small style={{marginLeft:"25px"}}>Signature</small></dt> 
                   
                    <dt className="col-md-6"><small style={{marginLeft:"50px"}}>Date</small></dt>  */}

                    <dt>
                    <button className="btn btn-danger" style={{marginLeft:"-100px",marginTop:"", height:"40px",width:"150px"}} onClick={() => this.onDelete(this.props.match.params.id)}>
                    <i class="fas fa-trash-alt"></i>&nbsp; &nbsp;Delete</button>
                    </dt>

                    <dt>
                    {/* <button className="btn btn-success" style={{marginLeft:"100px", marginTop:"-70px", height:"40px",width:"150px"}} onClick={this.print}>
                    <i class="fa-solid fa-print"></i>&nbsp; &nbsp;Update</button> */}
                   <a className="btn btn-warning"   style={{marginLeft:"50px", marginTop:"10px", height:"40px",width:"150px"}}  href={`/onlineUpdate/${this.props.match.params.id}`}>
                         <i className="fas fa-edit"></i>&nbsp; &nbsp;Edit
                       </a> 
                    </dt>

                    <dt>
                   
                    <button className="btn btn-danger" style={{marginLeft:"300px", marginTop:"-70px", height:"40px",width:"150px"}} onClick={this.print}>
                    <i class="fa-solid fa-print"></i>&nbsp; &nbsp;Print</button>

                
                    </dt>
                    



                </dl>
               

                  

               
                
            </div>
            <div style={{marginTop:"70px", marginLeft:"0px", height:"70px"}}>
                    {/* <button className="btn btn-danger" style={{marginLeft:"1100px", marginTop:"-120px", height:"40px",width:"150px"}} onClick={this.print}>
                    <i class="fa-solid fa-print"></i>&nbsp; &nbsp;Print</button> */}

                </div>
                </span>
            </div>
        )
        
    }
}
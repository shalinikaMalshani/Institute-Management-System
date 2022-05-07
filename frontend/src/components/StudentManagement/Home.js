import React, {Component} from "react";
import axios from "axios";

export default class Home extends Component{

    render(){
        return(
            <div className="container" style={{padding:'50px',marginLeft:"300px",width:"76%" }}>
                <br/><br/>
                {/* <button className="btn btn-success"><a href="" style={{textDecoration:'none', color:'white'}}>Add Student</a></button><br/><br/>
                <button className="btn btn-success"><a href="/update" style={{textDecoration:'none', color:'white'}}>Update Student</a></button> <br/><br/>
                <button className="btn btn-success"><a href="/delete" style={{textDecoration:'none', color:'white'}}>Delete Student</a></button> <br/><br/>
                <button className="btn btn-success"><a href="/all" style={{textDecoration:'none', color:'white'}}>All Student</a></button><br/><br/>
                <button className="btn btn-success"><a href="#" style={{textDecoration:'none', color:'white'}}>Payment</a></button> */}
            <div>
                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="top" data-bs-content="Top popover" style={{marginLeft:'30px', height:'75px', width:'230px'}}>
                    <a href="/save" style={{textDecoration:'none', color:'white'}}>ADD STUDENTS</a>
                </button>&nbsp;

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="right" data-bs-content="Right popover" style={{marginLeft:'30px',  height:'75px', width:'230px'}}>
                 <a href="/update" style={{textDecoration:'none', color:'white'}}>UPDATE STUDENTS</a>
                </button>&nbsp;

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'75px', width:'230px'}}>
                 <a href="/delete" style={{textDecoration:'none', color:'white'}}>DELETE STUDENTS</a>
                </button>&nbsp;

                <br/><br/><br/>

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="left" data-bs-content="Left popover" style={{marginLeft:'30px', height:'75px', width:'230px'}}>
                 <a href="/allStudents" style={{textDecoration:'none', color:'white'}}>ALL STUDENTS</a>
                </button>&nbsp;

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="left" data-bs-content="Left popover" style={{marginLeft:'30px', height:'75px', width:'230px'}}>
                 <a href="/Studentpayment" style={{textDecoration:'none', color:'white'}}>STUDENTS PAYMENT</a>
                </button>&nbsp;

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="left" data-bs-content="Left popover" style={{marginLeft:'30px', height:'75px', width:'230px'}}>
                 <a href="/studentReportInput" style={{textDecoration:'none', color:'white',aHoover:'red'}}>REPORT</a>
                </button>&nbsp;

             </div>   
            </div>
 
        )
    }
}
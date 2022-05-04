import React, {Component} from "react";


export default class Navigation extends Component{

    render(){
        return(
            <div className="container" style={{padding:'50px',marginLeft:"300px",width:"76%" }}>
            

                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'45px', width:'80px'}}>
                  <a href="/" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
                <div className="row">
                    <div className="col-4">

                    
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherAdd" style={{textDecoration:'none', color:'white'}}>ADD TEACHER</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/teacherLeave" style={{textDecoration:'none', color:'white'}}>ADD LEAVE</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/addSalary" style={{textDecoration:'none', color:'white'}}>ADD SALARY</a>
                </button>
                    </div>
                </div>
<br></br>

                <div className="row">
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/teacherAll" style={{textDecoration:'none', color:'white'}}>ALL TEACHERS</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/allLeaves" style={{textDecoration:'none', color:'white'}}>ABSENT TEACHERS</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="/AllSalary" style={{textDecoration:'none', color:'white'}}>ALL SALARIES</a>
                </button>
                    </div>
                </div>

<br></br>
                <div className="row">
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:'300px'}}>
                 <a href="#" style={{textDecoration:'none', color:'white'}}>ONLINE</a>
                </button>
                    </div>
                    <div className="col-4">
                    <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{marginLeft:'30px', height:'80px', width:"300px"}}>
                 <a href="/teacherReportInput" style={{textDecoration:'none', color:'white'}}>REPORT</a>
                </button>
                    </div>
                    
                </div>


                          </div>






 
        )
    }
}
import React from "react";
import axios from "axios";

export default class AllSalary extends React.Component{

constructor(props){
  super(props);

  this.state={//All the teachers stores in a array
    salaries:[]
  };
} 

componentDidMount(){
  this.retrieveTeachersSal();//this method gather the all sub comp and comps
  
}


retrieveTeachersSal(){
axios.get("http://localhost:8091/AllSalary")
.then(res=>{
if(res.data.success){
this.setState({
  salaries:res.data.existingSalaries
})
console.log(this.state.salaries);

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
             
         
   <div className="row">
 <div className="col-lg-12"> 
    <h2>All Teacher Salary</h2>
    
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Month</th>
      <th scope="col">Basic(Rs:)</th>
      <th scope="col">DA(Rs:)</th>
      <th scope="col">TA(Rs:)</th>
      <th scope="col">MA(Rs:)</th>
      <th scope="col">PF(Rs:)</th>
      <th scope="col">Gross Salary(Rs:)</th>
      <th scope="col">Net Salary(Rs:)</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {this.state.salaries.map((salaries,index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
     
      <td>
      
        {salaries.name}
        
        </td>
        <td>{salaries.month}</td>
  <td>{salaries.basic}.00</td>
      <td>{salaries.da}.00</td>
      <td>{salaries.ta}.00</td>
      <td>{salaries.ma}.00</td>
      <td>{salaries.pf}.00</td>
      <td>{salaries.gross}.00</td>
      <td>{salaries.net}.00</td>
      <td>
      <a className="btn btn-warning"  role="button" href={`/teacherSalary/${salaries._id}`}  ><i className="fas fa-edit"></i>&nbsp;Edit</a>
      
       
      </td>
    </tr>
    ))}
  </tbody>
</table>


  </div>
   </div>
    </div>
 );
   }
 }


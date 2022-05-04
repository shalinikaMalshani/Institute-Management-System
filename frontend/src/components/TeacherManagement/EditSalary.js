import React from "react";
import axios from "axios";


const initialState={
            name:"",
            month:"",
            basic:"",
            da:"",
            ma:"",
            ta:"",
            pf:"",
            gross:"",
            net:"",
            
        
        
}

export default class EditSalary extends React.Component{
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
    this.setState({month:e.target.value});
}



tot=(e)=>{
        var n1 = parseInt(this.state.basic);
        var n2 = parseInt(this.state.da);
        var n3 = parseInt(this.state.ta);
        var n4 = parseInt(this.state.ma);

        var ans = n1 + n2 +n3+n4;
        
        this.setState({
            gross:ans+".00"
            
        })

e.preventDefault();
    
}

net=(e)=>{
    var n1 = parseInt(this.state.pf);
    var n2 = parseInt(this.state.gross);
    var anss = n2-n1
    
    this.setState({
        net:anss+".00"
        
    })

e.preventDefault();

}


    onSubmit=(e)=>{
        const id= this.props.match.params.id;
        e.preventDefault();
        
        const {name,month,basic,da,ma,ta,pf,gross,net}=this.state;
        const data={
            name:name,
            month:month,
            basic:basic,
            da:da,
            ma:ma,
            ta:ta,
            pf:pf,
            gross:gross,
            net:net

            
        }
    
        
    
        axios.put(`http://localhost:8091/updateSalary/${id}`,data).then((res)=>{
          alert("Updated Salary");
          this.props.history.push("/AllSalary");
          this.setState(initialState);
          console.log(data);
        }).catch(error=>{
            alert("error");
        })
    
    
}


componentDidMount() {
    const id= this.props.match.params.id;
          axios.get(`http://localhost:8091/teacherSalary/${id}`).then((res)=>{
                 if(res.data.success){
                  this.setState({
                    name:res.data.teacher.name,
                    month:res.data.teacher.month,
                    basic:res.data.teacher.basic,
                    da:res.data.teacher.da,
                    ta:res.data.teacher.ta,
                    ma:res.data.teacher.ma,
                    pf:res.data.teacher.pf,
                    gross:res.data.teacher.gross,
                    net:res.data.teacher.net
  
          });
                       
          
          }
                  });
             
                }
  
  

    
    render(){
        return(
            <div style={{marginLeft:"325px",width:"76%"}}>
                <h2>Teacher Salary Details</h2>
                {/* {this.state.alertMsg==="success"?<Success/>:null} */}
                {/* {this.state.alertMsg==="error"?<Error/>:null} */}

    <form>
  <div className="row">
      <div className="col-6">
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    placeholder="First Name Last Name" 
    value={this.state.name} 
    onChange={this.handlInputChange}/>
    
    </div>
    </div>
    <div className="col-6">
<div className="mb-3">
<label for="month" className="form-label">Month</label>
<select onChange={this.onChangeSelect}  className="form-select" name="month" id="month" value={this.state.month}>
        <option selected disabled >--Select Month--</option>
        <option value="January">January</option>
        <option value="February">February</option>

       

</select>
          </div>
</div>
</div>



<br></br>

      <div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Basic(Rs:)</label>
  </div>
  <div class="col-5">
    <input type="text" id="basic" class="form-control" style={{ width:"490px" }} name="basic" value={this.state.basic} onChange={this.handlInputChange}/>
  </div>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="col-auto">
    <label for="gross" class="col-form-label">Gross Salary(Rs:)</label>
  </div>
  <div class="col-3">
    <input type="text" id="gross" class="form-control" name="gross" style={{ width:"250px" }} value={this.state.gross}/>
    </div>
    <div class="col-auto">
 <button  className="btn btn-danger" onClick={this.tot} >Calculate</button>
 </div>
 
</div><br></br>

<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Dearness Allowance(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="da" class="form-control" name="da" style={{ width:"388px" }} value={this.state.da} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>


<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Travelling Allowance(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="ta" class="form-control" name="ta" style={{ width:"383px" }} value={this.state.ta} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Medical Allowance(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="ma" class="form-control" name="ma" style={{ width:"394px" }} value={this.state.ma} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>



<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="pf" class="col-form-label">Provident Fund(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="pf" class="form-control" style={{ width:"420px" }} name="pf" value={this.state.pf} onChange={this.handlInputChange}/>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <div class="col-auto">
    <label for="net" class="col-form-label">Net Salary(Rs:)</label>
  </div>
  <div class="col-3">
    <input type="text" id="net" class="form-control" name="net" value={this.state.net}/>
    </div>
    <div class="col-auto">&nbsp;&nbsp;&nbsp;&nbsp;

 <button  className="btn btn-danger" onClick={this.net} >Calculate</button>
 </div>
 


</div><br></br>














<button type="reset" className="btn btn-danger"  >Reset</button>&nbsp;
  <button type="submit" className="btn btn-success" onClick={this.onSubmit} >Submit</button>
</form>
        </div>
        
        )
    }
}
import React from "react";
import axios from "axios";
import SideMenu from "../../SideMenu.js";


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

export default class Salary extends React.Component{
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
    
        
    
        axios.post("http://localhost:8091/addSalary",data).then((res)=>{
          alert("Added Salary");
          this.setState(initialState);
          this.props.history.push("/AllSalary");
          console.log(data);
        }).catch(error=>{
          alert("Error occoured.Please check and enter the details again.");
        })
    
    
}

    
    render(){
        return(
          <div><SideMenu/>
            <div style={{marginLeft:"325px",width:"76%"}}><br></br>
               <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" 
                data-bs-placement="bottom" data-bs-content="Bottom popover" style={{ height:'45px', width:'80px'}}>
                  <a href="/navTeacher" style={{textDecoration:'none', color:'white',display:'flex'}}><i class="fa-solid fa-angles-left"
                   style={{marginTop:'5px'}}></i>&nbsp;Back</a>
                </button>

<br></br><br></br>
             
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
<select onChange={this.onChangeSelect}  className="form-select" name="month" id="month" >
        <option selected disabled >--Select Month--</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>

       

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
    <input type="text" id="basic" class="form-control" style={{ width:"380px",marginLeft:"105px" }} name="basic" value={this.state.basic} onChange={this.handlInputChange}/>
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
    <input type="text" id="da" class="form-control" name="da" style={{ width:"380px" }} value={this.state.da} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>


<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Travelling Allowance(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="ta" class="form-control" name="ta" style={{ width:"380px" }} value={this.state.ta} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>
<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="basic" class="col-form-label">Medical Allowance(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="ma" class="form-control" name="ma" style={{ width:"380px",marginLeft:"10px" }} value={this.state.ma} onChange={this.handlInputChange}/>
  </div>



  
</div><br></br>



<div class="row g-3 align-items-center">
  <div class="col-auto">
    <label for="pf" class="col-form-label">Provident Fund(Rs:)</label>
  </div>
  <div class="col-4">
    <input type="text" id="pf" class="form-control" style={{ width:"380px",marginLeft:"34px" }} name="pf" value={this.state.pf} onChange={this.handlInputChange}/>
  </div>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <div class="col-auto" style={{marginTop:'-75px'}}>
    <label for="net" class="col-form-label" >Net Salary(Rs:)</label>
  </div>
  <div class="col-3" style={{marginTop:'-60px'}}>
    <input type="text" id="net" class="form-control" name="net" value={this.state.net}/>
    </div>
    <div class="col-auto">&nbsp;&nbsp;&nbsp;&nbsp;

 <button  className="btn btn-danger" onClick={this.net} style={{marginTop:'-85px'}}>Calculate</button>
 </div>
 


</div><br></br>














<button type="reset" className="btn btn-danger"  >Reset</button>&nbsp;
  <button type="submit" className="btn btn-success" onClick={this.onSubmit} >Submit</button>
</form>
        </div>
        </div>
        
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';
import SideMenu from "../../SideMenu";

export default class readClass extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8091/class/${id}`).then((res) =>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);


}
    });


}

render() {
const {Class_Type,Subject,Teacher_Name,Starting_Time,Ending_Time,Contact_Number,Day} = this.state.post;

return (
    <div>
  <SideMenu/>
    
    <div style={{marginLeft:"325px",width:"76%"}}>
    <div className="" style={{marginTop:'20px'}}>
       
    <center><h1 style={{color:"blue", marginTop:"80px"}} ><b>{Class_Type}</b></h1></center>
    <hr/>
    <center>
     
  <h3>  
<dl className="row">
    <center>
    <dt className="col-sm-3">Subject</dt>
    <dd className="col-sm-9" >{Subject}</dd>

    <dt className="col-sm-3">Teacher_Name</dt>
    <dd className="col-sm-9">{Teacher_Name}</dd>

    <dt className="col-sm-3">Starting_Time</dt>
    <dd className="col-sm-9">{Starting_Time}</dd>
    

    <dt className="col-sm-3">Ending_Time</dt>
    <dd className="col-sm-9">{Ending_Time}</dd>

    <dt className="col-sm-3">Contact_Number</dt>
    <dd className="col-sm-9">{Contact_Number}</dd>

    <dt className="col-sm-3">Day</dt>
    <dd className="col-sm-9">{Day}</dd>
    </center>
</dl>
</h3>
</center>

</div>
</div>
</div>


)


}

}

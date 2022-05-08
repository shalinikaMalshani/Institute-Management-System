import React, { Component } from 'react';
import axios from 'axios';

export default class readFee extends Component {
    constructor(props){
        super(props);
        
        this.state={
        post:{}
        };
        }

componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`http://localhost:8091/fee/${id}`).then((res) =>{
if(res.data.success){
this.setState({
post:res.data.post
});
console.log(this.state.post);


}
    });


}

render() {
const {Class_Type,Subject,Fee,Date,Special_Notes} = this.state.post;

return (
    
    <div  style={{marginLeft:"325px",width:"76%"}}>
    <center><h1 style={{color:"blue"}} ><b>{Class_Type}</b></h1></center>
    <hr/>
    <center>
     
<h3>  
<dl className="row">
    <center>
    <dt className="col-sm-3">Subject</dt>
    <dd className="col-sm-9" >{Subject}</dd>
    

    <dt className="col-sm-3">Fee</dt>
    <dd className="col-sm-9">{Fee}</dd>

    <dt className="col-sm-3">Date</dt>
    <dd className="col-sm-9">{Date}</dd>

    <dt className="col-sm-3">Special_Notes</dt>
    <dd className="col-sm-9">{Special_Notes}</dd>
    </center>
</dl>
</h3>
</center>

</div>



)


}

}

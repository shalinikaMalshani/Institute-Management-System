import React, { Component } from "react";

export default class TeacherLeave extends Component{

  constructor(props) {
        super(props);
        this.state = { status: 0 }; // 0: no show, 1: show yes, 2: show no.
        
      }

      radioHandler = (status) => {
    this.setState({ status });
   };
  
    

    render(){
      const { status } = this.state;

        return(
          <div style={{marginLeft:"325px",width:"76%"}}>
                <h2>Teacher Leave</h2>
                 <form>
  
    
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" 
    name="name" 
    placeholder="First Name Last Name" 
  />
   
    
    </div>
    
    <div className="mb-3">
<label for="subject" className="form-label">Leave Type</label>
<select  className="form-select" name="subject" id="subject" >
        <option selected disabled >--Select type--</option>
        <option value="Casual">Casual Leave</option>
        <option value="sick">Sick Leave</option>
</select>

          
</div>




  <div className="mb-3">
    <label for="gender" className="form-label">Gender</label>
<div>
    <input type="radio" 
    name="gender"
         id="male"  
          value="Male"
           checked={status === 1} onClick={(e) => this.radioHandler(1)} 
          
        />Single Date
      &nbsp;
        <input type="radio" 
         id="female" 
         name="gender"
         checked={status === 2} onClick={(e) => this.radioHandler(2)}
         /> Multiple Days

{status === 1 && <div className="mb-3"><label for="date" className="form-label">Date</label><input type="date" className="form-control" id="date"
name="date" 
 placeholder="Enter join date" 
 
/></div>}
        {status === 2 && <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label for="date" className="form-label">From Date</label>
              <input type="date" className="form-control" id="date"name="date" placeholder="Enter join date" />
              </div>
              </div>
              <div className="col-6"><div className="mb-3">
                <label for="date" className="form-label">To Date</label>
                <input type="date" className="form-control" id="date" name="date" placeholder="Enter join date" />
                </div></div></div>}
     </div>
  
  </div>

  <div className="mb-3">
    <label for="reason" className="form-label">Reason of Leave</label>
    <textarea className="form-control" id="name" cols={50} rows={3}
    name="reason" 
    placeholder="Enter the reason here" 
  />
  </div>






  <button type="reset" className="btn btn-danger"  >Reset</button>&nbsp;
  
  <button type="submit" className="btn btn-primary"  >Submit</button>

</form>
            </div>
        )
    }
}


// class TeacherLeave extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { clickedYes: false, clickedNo: false };
//     this.yesHandler = this.yesHandler.bind(this);
//     this.noHandler = this.noHandler.bind(this);
//   }
//   yesHandler() {
//     this.setState({
//       clickedYes: !this.state.clickedYes
//     });
//   }
//   noHandler() {
//     this.setState({
//       clickedNo: !this.state.clickedNo
//     });
//   }
//   render() {
//     const radioNo = this.state.clickedNo ? <h1>No</h1> : null;
//     const radioYes = this.state.clickedYes ? <h1>Yes</h1> : null;
//     return (
//       <>
//         <input
//           type="radio"
//           name="release"
//           id=""
//           clickedYes={this.state.clickedYes}
//           onClick={this.yesHandler}
//          />Yes
//         <input
//           type="radio"
//           name="release"
//           clickedNo={this.state.clickedNo}
//           onClick={this.noHandler}
//           id=""
//         />No
//             {radioYes}
//             {radioNo}

// {/* {this.state.clickedYes && (<div>Yes</div>)}             {this.state.clickedNo && (<div>No</div>)} */}
//       </>
//     );
//    }
//  }

// export default TeacherLeave;




// class TeacherLeave extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { status: 0 }; // 0: no show, 1: show yes, 2: show no.
    
//   }

//   radioHandler = (status) => {
//     this.setState({ status });
//   };

  
//   render() {
//     const { status } = this.state;
    
//     return (
//       <form>
//         <input type="radio" name="release" checked={status === 1} onClick={(e) => this.radioHandler(1)} />Yes
//         <input type="radio" name="release" checked={status === 2} onClick={(e) => this.radioHandler(2)} />No
//         {status === 1 && <div>Date<input type="date"></input></div>}
//         {status === 2 && <div>From Date<input type="date"></input>To Date<input type="date"></input></div>}
//       </form>
      
//     );
//   }
// }

// export default TeacherLeave;
import React, { Component } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";


const generatePDF = (Inquiry) => {
    console.log("hello");
    const doc = new jsPDF();
  
    const tableColumn = [
  
       "inquiry_id",
       "name",
       "grade",
       "subjects",
       "email",
       "inqHeader",
       "inqBody",
  
    ];
  
    const tableRows = [];

    Inquiry.map((Inquiry) => {
            console.log("hello");
        const Inquirydata = [
    
            Inquiry.inquiry_id,
            Inquiry.name,
            Inquiry.grade,
            Inquiry.subjects,
            Inquiry.email,
            Inquiry.inqHeader,
            Inquiry.inqBody,
    
        ];
    
        tableRows.push(Inquirydata);
    
      });
    
      doc.text("AMZO LERNING INSITUTE MANAGEMENT SYSTEM", 70, 8).setFontSize(13);
      doc.text("INQUIRY DETAILS REPORT", 14, 16).setFontSize(13);
      doc.autoTable(tableColumn, tableRows, {
        styles: { fontSize: 8 },
        startY: 35,
      });  
      doc.save("Inauiry details.pdf");
    }
      export default class InquiryReport extends Component {
        constructor(props) {
        super(props);
        this.state = {
          Inquiry: [],
                };
              }
            
        componentDidMount() {
                this.retrievePosts();
      
        }
      
         retrievePosts() {
                 console.log("hsdkd");
          axios.get("http://localhost:8091/inquiry/aaa").then((res) => {
            console.log(res.data);
            if (res.data.success) {
      
              this.setState({
      
                Inquiry: res.data.existingPosts,
           });
           console.log("hello");
           console.log(this.state.Inquiry);
      
            }
        });
      }
  
      filterData(Inquiry, searchKey) {

        const result = Inquiry.filter(
    
          (Inquiry) =>
    
          Inquiry.name.toLowerCase().includes(searchKey) ||
    
          Inquiry.subjects.toLowerCase().includes(searchKey) ||
    
          Inquiry.inquiry_id.toLowerCase().includes(searchKey)
    
        );
    
        this.setState({ Inquiry: result });
    
      }
    
    
    
      handleSearchArea = (e) => {
    
        const searchKey = e.currentTarget.value;
    
    
    
        axios.get("http://localhost:8091/inquiry/aaa").then((res) => {
    
          if (res.data.success) {
          this.filterData(res.data.existingPosts, searchKey);
          }
    
        });
    
      };
  
      render() {
        return (
          <div id="wrapper" className="toggled" style={{marginLeft:"325px",width:"76%"}}>
            <div id="page-content-wrapper">
              <div className="container-fluid">
                <div className="container">
                  {/* add nav bar */}
                
                  <hr></hr>
                  <div
                    class="form-check"
                    style={{
                      float: "right",
                      width: "26%",
                    }}
                  >
                    <div
                      class="a1"
                      style={{
                        background: "transparent",
                        opacity: 0.7,
                      }}
                    >
                      <div className="col-lg-30 mt-20 mb-2">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                          name="searchQuery"
                          onChange={this.handleSearchArea}
                        ></input>
                      </div>
                    </div>
                  </div>
                
                  <hr></hr>
                  <br />
                  <br /> <br />
                  <table class="table table-success">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Inquiry ID</th>
                        <th scope="col">Student name</th>
                        <th scope="col">Student Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Grage</th>
                        <th scope="col"> Heading</th>
                        <th scope="col">inqBody</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Inquiry.map((Inquiry, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
  
                          <td>{Inquiry.inquiry_id}</td>
                          <td>{Inquiry.name} </td>
                          <td>{Inquiry.email} </td>
                          <td>{Inquiry.subjects} </td>
                          <td>{Inquiry.grade} </td>
                          <td>{Inquiry.inqHeader} </td>
                          <td>{Inquiry.inqBody} </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <br /> <br />
                  <div style={{ float: "left" }}>
                    <button
                      type="button"
                      style={{ backgroundColor: "#228B22", padding: "8px" }}
                      class="btn btn-secondary btn-sm"
                      onClick={() => generatePDF(this.state.Inquiry)}
                    >
                      Downloard As PDF
                    </button>
                  </div>
                  &nbsp;&nbsp;
                </div>
                &nbsp;&nbsp;
              </div>
              &nbsp;&nbsp;
            </div>
          </div>
        );
    }
}
   

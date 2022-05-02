import React from "react";


export default class Error extends React.Component{


 render(){
   return(
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Error occoured</strong> 
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

 );
   }
 }


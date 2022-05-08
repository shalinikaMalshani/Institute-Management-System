const express = require('express');
const Fee = require('../../models/Class/fee');

const router = express.Router();

//add class fee details

router.post('/fee/add',(req,res)=>{
let newFee = new Fee(req.body);
newFee.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Class Fees saves successfully"
});
});
});

//get class fee details

router.get('/fee',(req,res)=>{
Fee.find().exec((err,Fee) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingFee:Fee
});
});
});

//get a specific class fee details

router.get("/fee/:id",(req,res)=>{
let postId = req.params.id;
Fee.findById(postId,(err,post) =>{
if(err){
    return res.status(400).json({success:false, err});
}
return res.status(200).json({
    success:true,
    post
});
});
});







//update class fee details
router.put('/fee/update/:id',(req,res)=>{
    Fee.findByIdAndUpdate(
req.params.id,
{
$set:req.body
},
(err,post)=>{
    if(err){
        return res.status(400).json({
        error:err
        });
        }
        return res.status(200).json({
        success:"Class Fees updated Successfully"
});
});
});

//delete class fee details

router.delete('/fee/delete/:id',(req,res) =>{
Fee.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:" Class Fees Deleted unsuccessfully",err
        });
        
        return res.json({
        message:" Class Fees Deleted Successfully",deletedPost
});
});
});

module.exports = router;
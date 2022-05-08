const express = require('express');
const Class = require('../../models/Class/class');

const router = express.Router();

//Insert  Class Details

router.post('/class/add',(req,res)=>{
let newClass = new Class(req.body);
newClass.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Class Details saves successfully"
});
});
});

// Get Class Details

router.get('/class',(req,res)=>{
Class.find().exec((err,Class) =>{
if(err){
return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:true,
existingClass:Class
});
});
});

//get a specific class details

router.get("/class/:id",(req,res)=>{
let postId = req.params.id;
Class.findById(postId,(err,post) =>{
if(err){
    return res.status(400).json({success:false, err});
}
return res.status(200).json({
    success:true,
    post
});
});
});







//update class details
router.put('/class/update/:id',(req,res)=>{
    Class.findByIdAndUpdate(
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
        success:"Class Details updated Successfully"
});
});
});

//delete class details
router.delete('/class/delete/:id',(req,res) =>{
Class.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:" Class Details Deleted unsuccessfully",err
        });
        
        return res.json({
        message:" Class Details Deleted Successfully",deletedPost
});
});
});

module.exports = router;
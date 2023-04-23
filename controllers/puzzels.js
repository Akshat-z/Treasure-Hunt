import {user} from "../models/user.js";
import jwt from 'jsonwebtoken';

let cont=0;

export const puzzle1 = async (req,res)=>{
 let answer=req.body.ans1;
 let answerString = answer.toString().toLowerCase().trim();
 if(answerString==="potato"){
  const {token}=req.cookies; 
 const decode=jwt.verify(token,process.env.JWT_SECRET);  
 // console.log(decode._id);
  const score =await user.findById(decode._id);
 // console.log(score);
  // console.log(score.puzzle1);
  if(cont===1) {
    score.puzzle1="50";
    await score.save();
  }
  else{
   score.puzzle1="100";
    await score.save();
  }
  cont=0;
  res.render('puzzle2.ejs');
 }
 else{
  cont=cont+1;
  if(cont===1){
   res.render('puzzle1.ejs',{message:"Oops, Wrong Answers.Only one chance left!",hint:"Hint:Think some root vegetable."});
  }
  if(cont===2){
    res.render('error.ejs',{message1:"Oops, You Lost.",message2:"Try again."});
  }
 }
}

export const puzzle2 =async(req,res)=>{
 let answer=req.body.ans2;
 let answerString = answer.toString().toLowerCase().trim();
 if(answerString==="12 angry men"){
  const {token}=req.cookies; 
  const decode=jwt.verify(token,process.env.JWT_SECRET);  
  // console.log(decode._id);
   const score =await user.findById(decode._id);
  if(cont===1) {
    score.puzzle2="50";
    await score.save();
  }
  else{
   score.puzzle2="100";
    await score.save();
  }
  cont=0;
  res.render('puzzle3.ejs');
 }
 else{
  cont=cont+1;
  if(cont===1){
   res.render('puzzle2.ejs',{message:"Oops, Wrong Answers.Only one chance left!",hint:"Hint:movie release in 1957"});
  }
  if(cont===2){
    res.render('error.ejs',{message1:"Oops, You Lost.",message2:"Try again."});
  }
 }
}

export const puzzle3 = async(req,res)=>{
 let answer=req.body.ans3;
 let answerString = answer.toString().toLowerCase().trim();
//  console.log(answerString);
 if(answerString==="tamanna bhatia"){
  const {token}=req.cookies; 
  const decode=jwt.verify(token,process.env.JWT_SECRET);  
  // console.log(decode._id);
   const score =await user.findById(decode._id);
  if(cont===1) {
    score.puzzle3="50";
    await score.save();
  }
  else{
   score.puzzle3="100";
    await score.save();
  }
  cont=0;
  res.render('puzzle4.ejs');
 }
 else{
  cont=cont+1;
  if(cont===1){
   res.render('puzzle3.ejs',{message:"Oops, Wrong Answers.Only one chance left!",hint:"Hint 1: Her name contain *Desire*."});
  }
  if(cont===2){
    res.render('error.ejs',{message1:"Oops, You Lost.",message2:"Try again."});
  }
 }
}

export const puzzle4 =async(req,res)=>{
 let answer=req.body.ans4;
 let answerString = answer.toString().toLowerCase().trim();
 if(answerString==="russia"){
  const {token}=req.cookies; 
  const decode=jwt.verify(token,process.env.JWT_SECRET);  
  // console.log(decode._id);
   const score =await user.findById(decode._id);
  if(cont===1) {
    score.puzzle4="50";
    await score.save();
  }
  else{
   score.puzzle4="100";
    await score.save();
  }
  cont=0;
  res.render('puzzle5.ejs');
 }
 else{
  cont=cont+1;
  if(cont===1){
   res.render('puzzle4.ejs',{message:"Oops, Wrong Answers.Only one chance left!",hint:"Hint: This country has an area of 17.1 million km2"});
  }
  if(cont===2){
    res.render('error.ejs',{message1:"Oops, You Lost.",message2:"Try again."});
  }
 }
}

export const puzzle5= async(req,res)=>{
 let answer=req.body.ans5;
 let answerString = answer.toString().toLowerCase().trim();
 if(answerString==="clock"){
  const {token}=req.cookies; 
  const decode=jwt.verify(token,process.env.JWT_SECRET);  
  // console.log(decode._id);
   const score =await user.findById(decode._id);
  if(cont===1) {
    score.puzzle5="50";
    await score.save();
  }
  else{
   score.puzzle5="100";
    await score.save();
  }
  cont=0;
  res.render('conj.ejs');
 }
 else{
  cont=cont+1;
  if(cont===1){
   res.render('puzzle5.ejs',{message:"Oops, Wrong Answers.Only one chance left!",hint:"P.S: I went easy on you because this is your last puzzle. I may not give more hints but first see you wrist."});
  }
  if(cont===2){
   res.render('error.ejs',{message1:"Oops, You Lost.",message2:"Try again."});
  }
 }
}
import {user} from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import path from 'path'


export const showlogin = (req,res)=>{
 return res.render("login.ejs");
 }
 
 export const showregister = (req,res)=>{
  return res.render("register.ejs");
  }

  export const showadmin = (req,res)=>{
    return res.render("Admin.ejs");
 }

 export const verifyAdmin = async (req,res) =>{
  try{
    const {email,password} =req.body;
    if(email==="admin@gmail.com"){
     if(password==="123"){

      return res.render("leader.ejs");
     }
     else{
      res.render("Admin.ejs");
     }
    }
    else res.send("something went wrong");
  }catch(err){
    res.send(err);
  }
 }

 export const register =async (req,res)=>{
  try{
  const {name,email,password} =req.body;
  console.log(req.body);
  const isuser= await user.findOne({email});
  if(isuser) res.render('error.ejs',{message1:"User already exit,sign in"});

  else{
  const hashpassword= await bcrypt.hash(password,10);
  await user.create({name,email,password:hashpassword});
  // console.log("datauploaded");
  res.render("login.ejs");
  }
  }catch(err){
   res.send(err)
  }
 }

 export const login = async (req,res)=>{
  try{
  const {email,UID,password} =req.body;
  const isuser= await user.findOne({email});
  // console.log(email,password);
  // res.send("ok");
  if(UID===process.env.UID){
  if(isuser){
  const isMatch = await bcrypt.compare(password,isuser.password);
    if(isMatch===true){
       const token =jwt.sign({_id:isuser._id},process.env.JWT_SECRET);
       await res.cookie("token",token,{
        httpOnly:true,
        expires:new Date(Date.now()+10*60*1000) // in millisecond
       });
    res.render("puzzle1.ejs");
    }
    else res.render('error.ejs',{message1:"Passward is not correct"});
  }
  else{
    res.render('error.ejs',{message1:"User doesn't exit, first sign up"});
  }
}
else res.render('error.ejs',{message1:"Contect to Developer"});
 }catch(err){
   res.send(err);
 }
 }
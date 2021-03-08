import React,{useState} from 'react';
import Head from 'next/head'
import NavBar from '../navbar.jsx';
import axios from 'axios';

function Portfolio(){
const[Fname,setFname]=useState(undefined);
const[Lname,setLname]=useState(undefined);
const[email,setEmail]=useState(undefined);
const[messg,setMessg]=useState(undefined);

const upload=async(e)=>{
    e.preventDefault();
    let formdata=new FormData();
    formdata.append('Fname',Fname);
    formdata.append('Lname',Lname);
    formdata.append('email',email);
    formdata.append('messg',messg);
    let z={lname:Lname,Email:email,fname:Fname,Message:messg}
    /*https://nextjss.netlify.app/api/hello*/
    let {data}=await axios.post("https://nextjss.netlify.app/api/hello",z);
    alert(data);
}
    return(
      
      <div className="row container-fluid">
        <Head>
        <title>Portfolio - Contact Me</title>
        <link rel="icon" href="logo.png" />
       </Head>
       <NavBar/>
        <main className="main  container-fluid col-md-11 row">
           <div className="child col-12 d-flex align-items-center">
             <div className="contact p-4 w-50 mx-auto">
             <h1 className="text-center my-3 heading">Contact Me</h1>
             <p className="my-3">
                I am interested in freelance opportunities - especially ambitious or large projects.However, if you have other requests or questions, don't hesitate to contact me using below from either.
             </p>
            <form className="form-group frm_contact my-3" onSubmit={upload}>
             <div className="name d-flex my-2">
                 <input pattern="^[^\s][a-zA-Z.]{1,}$" type="text" value={Fname} className="form-control w-50 mx-1 my-2" name="Fname" id="Fname" placeholder="First Name" onChange={(e)=>{
                    setFname(e.target.value);
                 }}/>
                 <input pattern="^[a-zA-Z]{1,}$" type="text" value={Lname}  className="form-control w-50 mx-1 my-2" name="Lname" id="Lname"  placeholder="Last Name"  onChange={(e)=>{
                    setLname(e.target.value);
                 }}/>
             </div>
             <input type="email" pattern="^[a-z._0-9]{3,}@[a-z]{3,}[.]{1}[a-z]{2,}[.]{0,1}[a-z]{0,5}$" value={email}  className="form-control w-100 mx-1 my-4" name="email" id="email"  placeholder="Email" onChange={(e)=>{
               setEmail(e.target.value)
             }}/>
             <textarea value={messg} className="form-control w-100 my-4" name="message" id="" rows="8" placeholder="your message" onChange={(e)=>{
               setMessg(e.target.value)
             }}/>
             <button className=" btn  my-4 py-2 frm_submit_btn" type="submit">Send</button>
             <div>{Fname}</div>
            </form>
















             </div>
           </div>
        </main>
      </div>
    )

}

export default Portfolio;
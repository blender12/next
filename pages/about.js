import React from 'react';
import Head from 'next/head'
import NavBar from '../navbar.jsx';
const loadRazorPay=(src)=>{
  return new Promise((resolve)=>{
    const Script=document.createElement('script');
    Script.src=src;
    Script.onload=()=>{
      resolve(true);
    }
    Script.onerror=()=>{
      resolve(false);
    }
    document.body.appendChild(Script);
  })
 
}
function Portfolio(){
const  displayRazorPay=async()=>{
  const res=await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?')
    return
  }

  const data = await fetch('http://localhost:8080/razorpay', { method: 'POST' }).then((t) =>
    t.json()
  )

  console.log(data)
  const options={
    key:'rzp_test_nSRAJzQiCNiKQp',
    currency:data.currency,
    amount:data.amount.toString(),
    order_id:data.id,
    name:'acme corp',
    description:'Test Transaction',
    handler:function (response){
      alert(response.razorpay_payment_id),
      alert(response.razorpay_order_id),
      alert(response.razorpay_signature)
    },
    prefill:{
      name:"wasiq",
      email: 'sdfdsjfh2@ndsfdf.com',
			phone_number: '9999999999'
    }
  }
  const paymentObject=new window.Razorpay(options)
  paymentObject.open()
}







    return(
      
      <div className="row container-fluid">
        <Head>
        <title>Portfolio - About Me</title>
        <meta name="google-site-verification" content="L_8IesjNeqyFnc_9Nxdf0X7SHPdnSLfTzLcQ8Qc_2Mk" />
        <link rel="icon" href="logo.png" />
       </Head>
       <NavBar/>
        <main className="main  container-fluid col-md-11 row">
           <div className="child col-md-6 d-flex align-items-center justify-content-center">
               <div className="hero">
                <button onClick={displayRazorPay}>PAY rs.499</button>
               </div>
           </div>
           <div className="child col-md-6 d-flex align-items-center">
    
           </div>
        </main>
      </div>
    )

}

export default Portfolio;
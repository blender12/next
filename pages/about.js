import React from 'react';
import Head from 'next/head'
import NavBar from '../navbar.jsx';

function Portfolio(){
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
                
               </div>
           </div>
           <div className="child col-md-6 d-flex align-items-center">
    
           </div>
        </main>
      </div>
    )

}

export default Portfolio;
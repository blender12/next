import React from 'react';
import Head from 'next/head'
import NavBar from '../navbar.jsx';

function Portfolio(){
    return(
      
      <div className="row container-fluid">
        <Head>
        <title>Portfolio Homepage</title>
        <meta name="google-site-verification" content="L_8IesjNeqyFnc_9Nxdf0X7SHPdnSLfTzLcQ8Qc_2Mk" />
        <link rel="icon" href="logo.png" />
       </Head>
       <NavBar/>
        <main className="main  container-fluid col-md-11 row">
           <div className="child col-md-6 d-flex align-items-center justify-content-center">
               <div className="hero">
                   <h1><span className="H">H</span><span className="i">i</span>,</h1>
                   <h1><span className="I">I</span>'<span className="m">m</span> 
                  <span className="W ml-3">W</span><span className="a">a</span><span className="s">s</span><span className="i">i</span><span className="q">q</span><span className="u">u</span><span className="l">l</span>
                   ,</h1>
                   <h1> 
                   <span className="w">w</span><span className="e">e</span><span className="b mr-2">b</span>
                   <span className="d">d</span><span className="e">e</span><span className="v">v</span><span className="e">e</span><span className="l">l</span><span className="o">o</span><span className="p">p</span><span className="e">e</span><span className="r">r</span> .
                    </h1>
                   <button className=" btn my-4 dwnld_btn"  role="button">Download Resume'</button>
               </div>
           </div>
           <div className="child col-md-6 d-flex align-items-center">
               <h1 className="w-hero">W</h1>
           </div>
        </main>
      </div>
    )

}

export default Portfolio;
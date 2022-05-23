import './App.css';
import './style.css';
import logo from './video.mp4';
import insertImg from './Insert1.png';
import bulkInsertImg from './BulkInsertion1.png';
import BulkRead1 from './BulkRead1.png';
import Delete1 from './Delete1.png';
import Update1 from './Update1.png';
import problem from './5.gif';

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import React, { useEffect, useState, Component } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {

  const [data, setDisplayData] = useState([]);

  Axios.get("http://127.0.0.1:4000/getData/").then((response) => 
  {
    setDisplayData(response.data[0]);
  });
console.log(data)
  return (
    <AppContainer>
<div>
  
<>
      <Router>
        <Routes>
          <Route path="/visualize" element={<visualize/>} />
        </Routes>
      </Router>
    </>

  <div className="hero">


  <div className="texture">
  
    <h1 style={{ marginLeft: "50px",color: "#eb6134", marginTop: "15px", 
                 fontFamily: "PT Sans, sans-serif", textDecoration:"underline"}}>
        Comparing SQL and NoSQL Database for IOT Applications

    </h1>
      <hr color="white"/>
  </div>

  <video loop muted autoPlay preload={"auto"}  
         style={{marginLeft:"3%"}} width={1350}>
			<source src={logo} type="video/mp4" />
			Your browser does not support the video tag.
	</video>

  <section className="core-value py-5" style={{marginTop: "-50px"}}>

		<div className="container py-md-4">

			<h3 className="heading mb-sm-5 mb-4 text-center"
           style={{textDecoration: "underline", textDecorationColor: "#4CAF50", color:"white",
                   }}>Problem Statement</h3>

			<div className="row core-grids">
				<div className="col-lg-6 core-left">

					<img style={{borderRadius: "10px"}} src={problem} className="img-fluid"
						alt="" />

				</div>

				<div className="col-lg-6 core-right" style={{marginTop: "-15px"}}>

					<p className="mt-3" style={{color:"white"}}>
          There is a lot of scope for the growth of IoT devices as the world is becoming smarter and smarter 
          with each passing day. It is estimated that there will be roughly 41 billion devices by 2025. 
          It will be tricky and easy to get lost while choosing a database for their application as there are a lot of databases which are available in the market. 
          So, one must be very careful while choosing a database for their applications. Without choosing a database by intuition, one has to compare the performance of multiple databases for their use case.
					</p>
				</div>
			</div>
		</div>
	</section>

  <section className="blog py-5">
		<div className="container py-md-5">

			<h3 style={{ textDecoration: "underline", textDecorationColor: "#4CAF50", color: "white"}}
				className="heading mb-sm-5 mb-4 text-center"> Our Analysis</h3>
			<div className="row blog-grids">
				<div className="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">
					<img
            src={insertImg} className="img-fluid" alt="" />
					
          <a >
						<div className="blog-info" style={{marginTop: "310px", marginLeft:"-20px"}}>

							<h4>Insert</h4>

						</div>
					</a>
				</div>

				<div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
					
          <img src={bulkInsertImg}
					     className="img-fluid" alt="" />
					<a >
						<div className="blog-info" style={{marginTop: "310px", marginLeft:"-20px"}}>
							<h4>Bulk Insert</h4>
						</div>
					</a>
				
        </div>
				<div className="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">

					<img src={BulkRead1} className="img-fluid" alt="" />

					<a >
						<div className="blog-info" style={{marginTop: "310px", marginLeft:"-20px"}}>
							<h4>Bulk Read</h4>
						</div>
					</a>
			
      	</div>
			</div>
		</div>
	</section>


  <section className="blog py-5" style={{marginTop: "-180px"}}>
		<div className="container py-md-5">

			<div className="row blog-grids">
				<div className="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">
					<img
            src={Delete1} className="img-fluid" alt="" />
					
          <a >
						<div className="blog-info" style={{marginTop: "310px", marginLeft:"-20px"}}>

							<h4>Delete</h4>

						</div>
					</a>
				</div>

				<div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
					
          <img src={Update1}
					     className="img-fluid" alt="" />
					<a >
						<div className="blog-info" style={{marginTop: "310px", marginLeft:"-20px"}}>
							<h4>Update</h4>
						</div>
					</a>
				
        </div>
        
			</div>
		</div>
	</section>

</div>

<h3 style={{ textDecoration: "underline", marginTop:"-100px",textDecorationColor: "#4CAF50", color: "white"}}
				className="heading mb-sm-5 mb-4 text-center"> Data</h3>

      <div style={{borderStyle:"solid",
                 marginLeft:"500px", marginTop:"-20px",
                 borderColor:"#4CAF50", width:"550px", height:"620px", padding:"20px"}}>


       <p>Location :  <span>San Jose</span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>co2 :  <span>{data.co2}</span> <span> ppb</span> </p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>so2 :  <span>{data.so2}</span> <span> ug/m3</span> </p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>h2s :  <span>{data.h2s}</span> <span> ppb </span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>no2 :  <span>{data.no2}</span> <span> ug/m3</span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>no :  <span>{data.no}</span> <span> ug/m3</span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>co :  <span>{data.co}</span> <span> ppb </span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>PM :  <span>{data.pm}</span> <span> ug/m3</span></p>
        <hr style={{color:"#4CAF50"}}></hr>

        <p>Last Updated Time :  <span>{data.date_time}</span></p>
        <hr style={{color:"#4CAF50"}}></hr>

      </div>

  <>
  
  </>

</div>

</AppContainer>


  );
}

export default App;

const AppContainer = styled.footer`
#hero {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero::after {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5)
}

#hero video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  object-fit: cover;
  font-family: 'object-fit: cover';
}

#hero .texture {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  background: url("");
}

#hero .caption {

  position: relative;
  z-index: 20;
  text-align: center;
  color: #ffffff;
}

#hero .caption h1 {

  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 0.5rem;
}

#hero .caption h2 {
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
}

button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  font: arial;
  border-radius: 20px;
  margin-top: 10px;
  margin-left:20px;
}

`;
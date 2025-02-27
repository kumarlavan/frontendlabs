// import React from 'react'
// import "animate.css"
// import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
// import { IoLogoHtml5 } from 'react-icons/io5';
// import { DiJavascript } from 'react-icons/di';
// import { FaCss3 } from 'react-icons/fa6';
// import { Link, Outlet } from 'react-router-dom';
// import { Card, Col, Container, Row } from 'react-bootstrap';

// const subjects = [
//   { name: 'HTML', description: 'Structuring your web pages effectively.', path: '/subjects/html',icon: <FaHtml5 size={90} color='#E34F26'/> },
//   { name: 'CSS', description: 'Style and positioning your websites  beautifully.', path: '/subjects/css',icon: <FaCss3Alt size={90} color='#1572B6'/> },
//   { name: 'JavaScript', description: 'Add interactivity and logic with JavaScript.', path: '/subjects/javascript',icon: <FaJs size={90} color='#F7DF1E'/> },
//   { name: 'React', description: 'Build dynamic user interfaces with React.', path: '/subjects/react',icon: <FaReact size={90} color='#61DAFB'/> },
// ];

// const Subjects = () => {
// return(
//   <div>
//   <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-yellow">
//                 <h2>Master  the basics, and  the  Web is yours to build!</h2>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-secondary">
//                 <h2>Every  Great  Developer   starts   with  a single  tag </h2>
//               </div>
//             </div>
  
//             <div className="carousel-item">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-orange">
//                 <h2><IoLogoHtml5/> HTML  is  Backbone of every  webpage </h2>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-blue">
//                 <h2>  <FaCss3/> CSS is like Magic , It  Transforms Structure  into  Style  Effortlessly</h2>
//               </div>
//             </div>
  
//             <div className="carousel-item">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-yellow">
//                 <h2> <DiJavascript/>   JavaScript  Makes the Web Alive!     </h2>
//               </div>
//             </div>
//             <div className="carousel-item">
//               <div className="d-flex justify-content-center align-items-center vh-20 text-white  p-4 gradient-skyblue">
//                 <h2>  <FaReact/> React  is  just  JavaScript , but  JavaScript  done  Right!       </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//         <Container className="my-5">
//           <Row  className="justify-content-center" >
//             {subjects.map((subject, index) => (
//               <Col  key={index} md={3} sm={6} className="mb-4">
//               <Card  className={`shadow-lg text-center card-hover animate_animated animate_backInRight ${
//                 index % 2 === 0 ? "animate_slideInLeft" : "animate_slideInRight"}`} 
//               style={{ minHeight: "320px", animationDelay: `${index * 0.2}s` }}>
//                   <Card.Body>
//                     <h3 className="mb-3">{subject.icon}</h3>
//                     <Card.Title>{subject.name}</Card.Title>
//                     <Card.Text>{subject.description}</Card.Text>
//                     <Link to={subject.path} className="btn btn-primary btn-hover">View Questions</Link>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//   <Outlet/>
// </div>  
// );
// }
// export default Subjects;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'animate.css';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import './Subjects.css'
import HtmlQuestion from './HTMLQuestions/HtmlQuestion';
import JavaScriptQuestion from './JavascriptQuestions/JavascriptQuestion';
import ReactQuestion from './ReactQuestions/ReactQuestion';
import CSSQuestions from './CSSQuestions/CSSQuestions';
import { div } from 'framer-motion/client';
// import { FaReact } from "react-icons/fa6";

const subjects = [
  { name: 'HTML', description: 'Structuring your web pages effectively.', path: '/subjects/html', icon: <FaHtml5 size={90} color='#E34F26'/> },
  { name: 'CSS', description: 'Style and positioning your websites beautifully.', path: '/subjects/css', icon: <FaCss3Alt size={90} color='#1572B6'/> },
  { name: 'JavaScript', description: 'Add interactivity and logic with JavaScript.', path: '/subjects/javascript', icon: <FaJs size={90} color='#F7DF1E'/> },
  { name: 'React', description: 'Build dynamic user interfaces with React.', path: '/subjects/react', icon: <FaReact size={90} color='#61DAFB'/> },
  // { name: 'JavaScript', description: 'Add interactivity and logic with JavaScript.', path: '/subjects/javascript', icon: <FaJs size={90} color='#F7DF1E'/> },

];

const Subjects = () => {
  const[selectedSubject,setSelectedSubject] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location=useLocation()

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSelectedSubject(null); 
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewQuestions = (subject) => {
    setSelectedSubject(selectedSubject === subject ? null : subject);
  };
  return (
    <div>

       <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Items */}
      <div className="carousel-inner" data-bs-ride="carousel" >
        <div className="carousel-item active" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center  text-white p-4 gradient-primary">
            <h2>Master the basics, and the Web is yours to build!</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center  text-white p-4 gradient-secondary">
            <h2>Every Great Developer starts with a single tag...</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center  text-white p-4 gradient-orange">
            <h2><IoLogoHtml5 /> HTML is the Backbone of every webpage...</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center  tet-white p-4 gradient-blue">
            <h2><FaCss3 /> CSS is like Magic, It Transforms Structure into Style Effortlessly...</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center  text-white p-4 gradient-yellow">
            <h2><DiJavascript /> JavaScript Makes the Web Alive! Brain of web...</h2>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2500">
          <div className="d-flex justify-content-center align-items-center text-white p-4 gradient-skyblue">
            <h2><FaReact /> React is just a library that uses JavaScript...</h2>
          </div>
        </div>
      </div>

     
    </div>




      <div>
      <Container className="my-5">
      <Row className="justify-content-center subjects-container">
  {subjects.map((subject, index) => (
    <Col key={index} lg={3} md={3} sm={5} xs={12} className="mb-4 subject-column p-2 h-25% w-25%">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      >
        <Card className="subject-card shadow-lg">
          <Card.Body className="text-center">
            <h3 className="mb-3">{subject.icon}</h3>
            <Card.Title>{subject.name}</Card.Title>
            <button className="btn btn-primary" onClick={() => handleViewQuestions(subject.name)}>
              <a href="#questions" style={{ color: 'white', textDecoration: 'none' }}>View Questions</a>
            </button>
          </Card.Body>
        </Card>
      </motion.div>
      
      {/* Mobile view questions */}
      {isMobile && selectedSubject === subject.name && (
        <div className="mobile-questions">
          {subject.name === 'HTML' && <HtmlQuestion />}
          {subject.name === 'CSS' && <CSSQuestions />}
          {subject.name === 'JavaScript' && <JavaScriptQuestion />}
          {subject.name === 'React' && <ReactQuestion />}
        </div>
      )}
    </Col>
  ))}
</Row>

      {!isMobile && selectedSubject && (
  <div className="desktop-questions">
    {selectedSubject === 'HTML' && <HtmlQuestion />}
    {selectedSubject === 'CSS' && <CSSQuestions/>}
    {selectedSubject === 'JavaScript' && <JavaScriptQuestion/>}
    {selectedSubject === 'React' && <ReactQuestion/>}
  </div>
)}
    </Container>

      <Outlet />
    </div>


    </div>
    
   
  );
};

export default Subjects;


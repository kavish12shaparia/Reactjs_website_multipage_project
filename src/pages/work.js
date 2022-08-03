import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';


const Work = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <h5>Welcome to </h5>
          <h1>Work Page</h1>
        </section>
        <Footer />
      </>
    );
  };
 
  export default Work;
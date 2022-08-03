import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Contact = () => {
    return (
      <>
        <Navbar />



        <section className="hero-section3">
          <div className='container'>
              <h1>Cuda</h1>
              <h5>A one-stop destination for your all business IT needs. Being a White label web agency We deliver best-in-class services 
                  and innovative solutions for your diverse business challenges.</h5>
          </div>
        </section>




        <section className='subscribe'>
              <div className='container'>
                    <h1 className='title6'> GET IN TOUCH </h1>
                    <h6 className='titlecap6'>1600 Pennsylvania Ave NW Washington, DC 20500, United States Of America. Tel:(202)456-1111</h6>
              <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label id='entry' column="lg" lg={3}>Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter Email" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label id='entry' column="lg" lg={3}>Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder=" Enter Password" />
                      </Form.Group>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label id='entry' column="lg" lg={3}>Firstname</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter Firstname" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label id='entry' column="lg" lg={3}>Lastname</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter Lastname" />
                      </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label id='entry' column="lg" lg={3}>Address</Form.Label>
                      <Form.Control size="lg" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label id='entry' column="lg" lg={3}>Comment</Form.Label>
                      <Form.Control size="lg" placeholder="Comment" />
                    </Form.Group>
                    <div className='text-center'>
                    <Button variant="primary" type="submit" id='buttonsub' >
                      <h5 id='entry'>Submit</h5>
                    </Button>
                    </div>
              </Form>   
              </div>
             </section>




             <section className='details'>
                <div className='container'>
                   <div className='row'>
                      <div className='col-md-4 col-sm-4 col-4 mt-4'>
                        <h2 className='text'>LET'S TALK</h2>
                        <h4>Let us talk about your next project</h4>
                        <h5>info@cuda123.com</h5>
                        <h5>infosupport@cuda123.com</h5>
                        <h5><strong id='sales'>Sales and Support:</strong></h5>
                        <h5>Phone No: +1.123.456.7890</h5>
                        <h5>Phone No: +1.321.654.0987</h5>
                      </div>
                      <div className='col-md-4 col-sm-4 col-4 mt-4'>
                        <h2 className='text'>SAY HELLO</h2>
                        <h4>Drop us a line or Give us a call</h4>
                        <h5>info@cuda123.com</h5>
                        <h5>Phone No: +1.123.453.7890</h5>
                      </div>
                      <div className='col-md-4 col-sm-4 col-4 mt-4'>
                        <h2 className='text'>OUR OFFICE</h2>
                        <h4>1600 Pennsylvania Ave NW Washington, DC 20500, United States Of America.</h4>
                      </div>
                   </div>
                </div>
             </section>




             <section className='hero-section21'>
              <div className='container'>
                <h1 id='title2x'>Let's get acquainted</h1>
                <h4 id='titlecap2x'>Do you have everything it takes to transform your existence in the world of the web? Well, that’s why we are here, the white label web agency to be your guide. 
                    Make us a part of your core team and enjoy the reign of hits and wows. Be our Guest.</h4>
                <div className='row'>
                      <div className='col-md-12 col-sm-12 col-12 text-center'>
                            <Button variant="danger" type="submit" id='buttonsub2x' >
                                  <h5 id='entryx'>Click now for free estimate</h5> 
                            </Button>
                      </div>
                </div>
                </div>
             </section>




        <Footer />
      </>
    );
  };

export default Contact;
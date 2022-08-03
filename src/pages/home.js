import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";



const Home = () => {
    return (
      <div>
        <Navbar />




        <section className="hero-section1">
          <div className='container'>
          <h1><span id='hey'>Hi There!</span> We are the new kids on the block 
          And We build awesome websites and apps.</h1>
          <div className='row'>
                <div className='col-md-12 col-sm-12 col-12 mt-12 text-center'>
                      <Button variant="danger" type="submit" id='buttonsub2' >
                            <h5 id='entry99'>Work With Us!</h5> 
                      </Button>
                </div>
          </div>
          </div>
        </section>




        <section className='services'>
          <div className='container'>
          <h1 className='title1'>Services We Provide</h1>
          <p className='titlecap'>We are working with both individuals and businesses from all ovet the globe <br/> to create awesome websites and applications</p>
            <div className='row'>
              <div className='col-md-3 col-sm-6 col-6 mt-4'>
                <div className='cardser'>
                    <img id='img1' className='mx-auto d-block' src="assets/images/flag.png" alt="Card image" />
                        <div className='card-body'>
                          <h5 className='card-title'>BRANDING</h5>
                          <p className='card-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam.</p>
                          <div className='border border-0 p-3 mb-4'>
                            <div className='text-center'>
                              <button type="button" class="mt-auto btn btn-lg btn-block btn-primary" >Read more</button>
                            </div> 
                        </div> 
                        </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 col-6 mt-4'>
              <div className='cardser' >
                    <img id='img1'className='mx-auto d-block' src="assets/images/pencil.png" alt="Card image"  />
                        <div className='card-body'>
                          <h5 className='card-title'>CUSTOMIZATION</h5>
                          <p className='card-text'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem </p>
                          <div className='border border-0 p-3 mb-4'>
                            <div className='text-center'>
                              <button type="button" class="mt-auto btn btn-lg btn-block btn-primary" >Read more</button>
                            </div> 
                        </div> 
                        </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 col-6 mt-4'>
              <div className='cardser'>
                    <img id='img1' className='mx-auto d-block' src="assets/images/gear.png" alt="Card image"  />
                        <div className='card-body'>
                          <h5 className='card-title'>DESIGN </h5>
                          <p className='card-text'>At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium.</p>
                          <div className='border border-0 p-3 mb-4'>
                            <div className='text-center'>
                              <button type="button" class="mt-auto btn btn-lg btn-block btn-primary" >Read more</button>
                            </div> 
                        </div> 
                        </div>
                </div>
              </div>

              <div className='col-md-3 col-sm-6 col-6 mt-4'>
              <div className='cardser' >
                    <img id='img1' className='mx-auto d-block' src="assets/images/rocket.png" alt="Card image"  />
                        <div className='card-body'>
                          <h5 className='card-title'>DEVELOPMENT</h5>
                          <p className='card-text'>Et harum quidem rerum est et expedita distinctio. Nam libero tempore.</p>
                          <div className='border border-0 p-3 mb-4'>
                            <div className='text-center'>
                              <button type="button" class="mt-auto btn btn-lg btn-block btn-primary">Read more</button>
                            </div> 
                        </div> 
                        </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  


        <section className='team'>
                    <div className='container'>
                    <h1 className='title2'> MEET OUR BEAUTIFUL TEAM </h1>
                    <h6 className='titlecap2'> We are small team of designers and developers, who help brands with big ideas.</h6>
                           <div className='row'>
                             <div className='col-md-3 col-sm-6 col-6 mt-4'>
                            <div className='card1'>
                              <img className='mx-auto d-block' src="assets/images/anne.jpg" alt="Avatar" id='avatar'/>
                              <h4 className='card-title'>Anne Hathway</h4>
                              <h6>CEO/Marketing Guru</h6>
                              <p className='card-text'>Lorem ipsum dolor sit amet, 
                              consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.</p>
                              <h3 className='soicon'>
                              <FaLinkedin /><FaRegEnvelope /><FaFacebookSquare /><FaTwitterSquare />
                              </h3>
                            </div>
                            </div>

                            <div className='col-md-3 col-sm-6 col-6 mt-4'>
                            <div className='card1'>
                              <img className='mx-auto d-block' src="assets/images/kate.jpg" alt="Avatar" id='avatar'/>
                              <h4 className='card-title'>Kate Upton</h4>
                              <h6>Creative Director</h6>
                              <p className='card-text'>Duis aute irure dolor in in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat non diam proident.</p>
                              <h3 className='soicon'>
                              <FaLinkedin /><FaRegEnvelope /><FaTwitterSquare />
                              </h3>
                            </div>
                            </div>

                            <div className='col-md-3 col-sm-6 col-6 mt-4'>
                            <div className='card1'> 
                              <img className='mx-auto d-block' src="assets/images/olivia.jpg" alt="Avatar" id='avatar' />
                              <h4 className='card-title'>Olivia Wilde</h4>
                              <h6>Lead Designer</h6>
                              <p className='card-text'>Nemo enim ipsam voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem nesciunt.</p>
                              <h3 className='soicon'>
                              <FaLinkedin /><FaRegEnvelope /><FaFacebookSquare /><FaTwitterSquare />
                              </h3>
                            </div>
                            </div>

                            <div className='col-md-3 col-sm-6 col-6 mt-4'>
                            <div className='card1'>
                              <img className='mx-auto d-block' src="assets/images/ashely.jpg" alt="Avatar" id='avatar'/>
                              <h4 className='card-title'>Ashely Greene</h4>
                              <h6>SEO/Developer</h6>
                              <p className='card-text'>Sed ut perspiciatis unde omnis iste natus aut odit aut fugit, sed quia dolores magni dolores eos qui ratione voluptatem nesciunt.</p>
                              <h3 className='soicon'>
                              <FaRegEnvelope /><FaFacebookSquare /><FaTwitterSquare />
                              </h3>
                            </div>
                            </div>
                           </div>
                    </div>  
             </section>  




             <section className='skills'>
                <div className='container'>
                <h1 className='title3'> WE GOT SKILLS </h1>
                    <h6 className='titlecap3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. <br/>
                    Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.</h6>
                  <div className='row'>
                  <div className='col-md-3 col-sm-6 col-6'>
                      <div className='card2'>
                        <img className='mx-auto d-block' src="assets/images/90.png" alt="Card image" id='avatar1'/>
                            <div className='card-body2'>
                              <h6 className='card-title2' id='value'>WEB DESIGN</h6> 
                            </div> 
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-6'>
                      <div className='card2'>
                        <img className='mx-auto d-block' src="assets/images/75.png" alt="Card image" id='avatar1'/>
                            <div className='card-body2'>
                              <h6 className='card-title2' id='value'>HTML / CSS</h6> 
                            </div> 
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-6'>
                      <div className='card2'>
                        <img className='mx-auto d-block' src="assets/images/70.png" alt="Card image" id='avatar1'/>
                            <div className='card-body2'>
                              <h6 className='card-title2' id='value'>GRAPHIC DESIGN</h6> 
                            </div> 
                            </div>
                    </div>
                    <div className='col-md-3 col-sm-6 col-6'>
                      <div className='card2'>
                        <img className='mx-auto d-block' src="assets/images/85.png" alt="Card image" id='avatar1'/>
                            <div className='card-body2'>
                              <h6 className='card-title2' id='value'>UI / UX</h6> 
                            </div> 
                            </div>
                    </div>
                  </div>
                </div>
             </section>




             <section className='portfolio'>
              <div className='container'>
                    <h1 className='title4'> OUR PORTFOLIO </h1>
                    <h6 className='titlecap4'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet 
                    <br/>consectetur, adipisci velit, sed quia non numquam</h6>
                    <Tabs id="controlled-tab-example" className="mb-3 nav-justified mt-4">
                          <Tab eventKey="all" title="ALL">
                            <div className='container'>
                              <div className='row'>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
                                </div>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>TIME ZONE APP UI</h4>
                                </div>
                                <div className='col-md-6 col-sm-6 col-6 my-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                                </div>
                                <div className='col-md-6 col-sm-6 col-6 my-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>BLOG/MAGAZINE FLAT UI KIT</h4>
                                </div>
                              </div>
                              <div className='row'>
                                <div className='col-md-12 col-sm-12 col-12 text-center'>
                                     <a href='/portfolio'> <Button variant="primary" type="submit" id='buttonsub1' >
                                        <h5 id='entry1'>Load More Projects</h5> 
                                      </Button> </a>
                                </div>
                              </div>
                            </div>
                          </Tab>

                          <Tab eventKey="web" title="WEB">
                          <div className='container'>
                              <div className='row'>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                  <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                  <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
                                </div>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                  <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                  <h4 id='ispum'>TIME ZONE APP UI</h4>
                                </div>
                                </div>
                                </div>
                          </Tab>

                          <Tab eventKey="apps" title="APPS">
                          <div className='container'>
                              <div className='row'>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                              </div>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>BLOG/MAGAZINE FLAT UI KIT</h4>
                              </div>
                              </div>
                          </div>      
                          </Tab>

                          <Tab eventKey="icons" title="ICONS">
                          <div className='container'>
                              <div className='row'>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
                              </div>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>TIME ZONE APP UI</h4>
                              </div>
                              </div>
                              <div className='row'>
                              <div className='col-md-12 col-sm-12 col-12 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                              </div>
                              </div>
                          </div>    
                          </Tab>
                        </Tabs>
              </div>
             </section>




             <section className='testimonals'>
              <div className='container'>
                    <h1 className='title5'> WHAT PEOPLE TELL ABOUT US </h1>
                    <h6 className='titlecap5'>Our Clients Love Us!</h6>
                 <div className='row'>
                  <div className='col-md-6 col-sm-6 col-6 mt-4'>
                      <div className='row'>
                           <div className='col-md-4 col-sm-4 col-4'>
                                <img className='mx-auto d-block' src="assets/images/chanel.jpg" alt="Avatar" id='avatar88'/>
                           </div>
                           <div className='col-md-8 col-sm-8 col-8'>
                                <p id='lorem'>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio sed risus imperdiet hendrerit id a mauris. Proin sodales condimentum orci, a pretium augue convallis. Sed gravida porta tristique."
                                </p>
                                <p id='user'><strong>CHANEL IMAN</strong></p>
                                <p id='post'>Ceo of Pinterest</p>
                           </div>
                      </div>
                  </div>

                  <div className='col-md-6 col-sm-6 col-6 mt-4'>
                        <div className='row'>
                              <div className='col-md-4 col-sm-4 col-4'>
                                   <img className='mx-auto d-block' src="assets/images/adriana.jpg" alt="Avatar" id='avatar88'/>
                              </div>
                              <div className='col-md-8 col-sm-8 col-8'>
                              <p id='lorem'>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio sed risus imperdiet hendrerit id a mauris. Proin sodales condimentum orci, a pretium augue convallis. Sed gravida porta tristique."
                                </p>
                                <p id='user'><strong>ADRIANA LIMA</strong></p>
                                <p id='post'>Founder of Instagram</p>
                              </div>
                        </div>
                  </div>

                  <div className='col-md-6 col-sm-6 col-6 my-6 mt-4'>
                        <div className='row'>
                              <div className='col-md-4 col-sm-4 col-4'>
                                  <img className='mx-auto d-block' src="assets/images/anne.jpg" alt="Avatar" id='avatar88'/> 
                              </div>
                              <div className='col-md-8 col-sm-8 col-8'>
                              <p id='lorem'>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio sed risus imperdiet hendrerit id a mauris. Proin sodales condimentum orci, a pretium augue convallis. Sed gravida porta tristique."
                                </p>
                                <p id='user'><strong>ANNE HATHWAY</strong></p>
                                <p id='post'>Lead designer at Behance</p>
                              </div>
                        </div>
                  </div>

                  <div className='col-md-6 col-sm-6 col-6 my-6 mt-4'>
                        <div className='row'>
                              <div className='col-md-4 col-sm-4 col-4'>
                                  <img className='mx-auto d-block' src="assets/images/emma.jpg" alt="Avatar" id='avatar88'/>
                              </div>
                              <div className='col-md-8 col-sm-8 col-8'>
                              <p id='lorem'>
                                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id odio sed risus imperdiet hendrerit id a mauris. Proin sodales condimentum orci, a pretium augue convallis. Sed gravida porta tristique."
                                </p>
                                <p id='user'><strong>EMMA STONE</strong></p>
                                <p id='post'>Co-founder of Shazam</p>
                              </div>
                        </div>
                  </div>
                 </div>
              </div>
             </section>




             <section className='subscribe'>
              <div className='container'>
                    <h1 className='title6'> GET IN TOUCH </h1>
                    <h6 className='titlecap6'>1600 Pennsylvania Ave NW Washington, DC 20500, United States Of America. Tel:(202)456-1111</h6>
              <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label id='entry' column="lg" lg={2}>Email</Form.Label>
                        <Form.Control size="lg" type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label id='entry' column="lg" lg={3}>Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder=" Enter Password" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label id='entry' column="lg" lg={3}>Address</Form.Label>
                      <Form.Control size="lg" placeholder="Enter Address" />
                    </Form.Group>
                    <div className='text-center'>
                    <Button variant="primary" type="submit" id='buttonsub' >
                      <h5 id='entry'>Submit</h5>
                    </Button>
                    </div>
              </Form>   
              </div>
             </section>




             <Footer />
      </div>
    );
  };

  export default Home;
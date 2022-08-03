import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';


const About = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section2">
            <div className='container'>
              <h1>Decode CUDA's Realm</h1>
              <h5>Fusce nisl urna, condimentum id scelerisque at, sodales mattis nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</h5>
            </div>
        </section>




        <section className='info'>
          <div className='container'>
             <h4 id='infor'>
                We work, we transform, we triumph. As believers of synergy and digital agency in India, we always team up with our clients to pursue each project. We tend and raise virtual kingdoms for our clients and their customers with as much passion and dedication as humanly possible.
                For us, it is never just about accomplishing a task in time but to ensure that even the minute details have been taken care of.
                Our 15+ years of experience in the industry and our results-oriented approach has never failed us in delivering pure satisfaction to our clients. As the diligent web development partner, we believe in creating happy landing experiences for customer-centric ecosystems.
             </h4>
          </div>
        </section>



        <section className='story'>
          <div className='container'>
             <h1 className='titlex'>Our Story</h1>
              <p className='titlecapx'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><h4 id='acc-head'>THE NAME</h4></Accordion.Header>
                      <Accordion.Body>
                        <h5 id='acc-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        <br/>
                        <br/>
                        Duis et fringilla dui. Sed pretium tincidunt tortor, at sagittis felis facilisis et. 
                        Praesent ac laoreet lorem. Sed sit amet laoreet ipsum. Curabitur ut lacus vulputate, iaculis augue non, 
                        placerat tellus. Pellentesque pellentesque leo nisl, non semper orci porta eget. Vivamus ligula arcu, 
                        lacinia eget malesuada quis, mattis vel orci. In semper ac lectus et efficitur.
                        </h5>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header><h4 id='acc-head'>WHY</h4></Accordion.Header>
                      <Accordion.Body>
                        <h5 id='acc-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        <br/>
                        <br/>
                        Duis et fringilla dui. Sed pretium tincidunt tortor, at sagittis felis facilisis et. 
                        Praesent ac laoreet lorem. Sed sit amet laoreet ipsum. Curabitur ut lacus vulputate, iaculis augue non, 
                        placerat tellus. Pellentesque pellentesque leo nisl, non semper orci porta eget. Vivamus ligula arcu, 
                        lacinia eget malesuada quis, mattis vel orci. In semper ac lectus et efficitur.
                        </h5>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header><h4 id='acc-head'>STRENGHT</h4></Accordion.Header>
                      <Accordion.Body>
                        <h5 id='acc-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        <br/>
                        <br/>
                        Duis et fringilla dui. Sed pretium tincidunt tortor, at sagittis felis facilisis et. 
                        Praesent ac laoreet lorem. Sed sit amet laoreet ipsum. Curabitur ut lacus vulputate, iaculis augue non, 
                        placerat tellus. Pellentesque pellentesque leo nisl, non semper orci porta eget. Vivamus ligula arcu, 
                        lacinia eget malesuada quis, mattis vel orci. In semper ac lectus et efficitur.
                        </h5>
                      </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>    
        </section>




        <section className='ourteam'>
          <div className='container'>
              <h1 className='title1x'>Our Team</h1>
              <p className='titlecap1x'>As a team of passionate individuals, we have always believed in being the soldiers of our clients’ business. If you think that you can thrive in a robust work-culture like ours, then get in touch with us today.</p>
              <div className='row'>
                 <div className='col-md-5 col-sm-5 col-5'>
                     <img className='mx-auto d-block' src="assets/images/last_gif.gif" alt="team" id='teamx' />
                 </div>
                 <div className='col-md-7 col-sm-7 col-7'>
                    <div className='row' id='wor'>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/anne.jpg" alt="Avatar" id='avatarxx'/>
                              <h4 className='name'>Anne Hathway</h4>
                              <h6>CEO/Marketing Guru</h6>
                      </div>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/kate.jpg" alt="Avatar" id='avatarxx'/>
                              <h4 className='name'>Kate Upton</h4>
                              <h6>Creative Director</h6>
                      </div>
                    </div>

                    <div className='row' id='wor'>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/olivia.jpg" alt="Avatar" id='avatarxx' />
                              <h4 className='name'>Olivia Wilde</h4>
                              <h6>Lead Designer</h6>
                      </div>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/ashely.jpg" alt="Avatar" id='avatarxx'/>
                              <h4 className='name'>Ashely Greene</h4>
                              <h6>SEO/Developer</h6>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/alexandra.jpg" alt="Avatar" id='avatarxx'/>
                              <h4 className='name'>Alexandra Daddario</h4>
                              <h6>H.R</h6>
                      </div>
                      <div className='col-md-6 col-sm-6 col-6 mt-6'>
                              <img className='mx-auto d-block' src="assets/images/rock.jpg" alt="Avatar" id='avatarxx'/>
                              <h4 className='name'>Dwayne Johnson</h4>
                              <h6>Quality Manager</h6>
                      </div>
                    </div>
                 </div>
              </div>
          </div>
        </section>




        <section className='visionx'>
          <div className='container'>
              <h1 className='title11x'>Our Mission, Vision and Values</h1>
              <p className='titlecap11x'>As a team of passionate individuals, we have always believed in being the soldiers of our clients’ business. If you think that you can thrive in a robust work-culture like ours, then get in touch with us today.</p>
            <div className='row'>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
              <div className='cardx' >
                    <img id='imgx' className='mx-auto d-block' src="assets/images/mountain.png" alt="Card image"  />
                        <div className='card-body'>
                          <h2 className='card-titlex'>MISSION</h2>
                          <h4 className='card-textx'>To give the best products and services by providing innovative solutions</h4>
                        </div>
                  </div>
                </div>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
              <div className='cardx' >
                    <img id='imgx' className='mx-auto d-block' src="assets/images/gear.png" alt="Card image"  />
                        <div className='card-body'>
                          <h2 className='card-titlex'>VISION</h2>
                          <h4 className='card-textx'>To become a world-class technology company that innovates to inspire creative and intelligent people</h4>
                        </div>
                  </div>
              </div>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
              <div className='cardx' >
                    <img id='imgx' className='mx-auto d-block' src="assets/images/team.png" alt="Card image"  />
                        <div className='card-body'>
                          <h2 className='card-titlex'>CORE VALUES</h2>
                          <h4 className='card-textx'>Excellence, Ethics, Team Work, People</h4>
                        </div>
                  </div>
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

  export default About;
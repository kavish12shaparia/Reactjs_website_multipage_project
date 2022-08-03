import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Portfolio = () => {
    return (
      <div>
        <Navbar />
          



        <section className="hero-section7">
          <div className='container'>
              <h1> Portfolio </h1>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim mauris, placerat sit amet pretium non, pretium quis mauris.</h5>
          </div>
        </section>




        <section className='portfolio1'>
              <div className='container'>
                    <Tabs id="controlled-tab-example" className="mb-3 nav-justified mt-4">
                          <Tab eventKey="all" title="ALL">
                            <div className='container'>
                              <div className='row'>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>TIME ZONE APP UI</h4>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-6 my-3 mt-6'>
                                    <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>BLOG/MAGAZINE FLAT UI KIT</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-6 my-3 mt-6'>
                                    <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                                    </div>
                              </div>
                              
                              <div className='row'>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>TIME ZONE APP UI</h4>
                                    </div>
                                    <div className='col-md-4 col-sm-4 col-4 mt-4'>
                                    <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-6 my-3 mt-6'>
                                    <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>BLOG/MAGAZINE FLAT UI KIT</h4>
                                    </div>
                                    <div className='col-md-6 col-sm-6 col-6 my-3 mt-6'>
                                    <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                    <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
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

                                <div className='row'>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                  <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="Card image" id='avatar99'/>
                                  <h4 id='ispum'>TIME ZONE APP UI</h4>
                                </div>
                                <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                  <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="Card image" id='avatar99'/>
                                  <h4 id='ispum'>ISOMETRIC PRESPECTIVE MOCK-UP</h4>
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

                              <div className='row'>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>BLOG/MAGAZINE FLAT UI KIT</h4>
                              </div>
                              <div className='col-md-6 col-sm-6 col-6 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
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

                              <div className='row'>
                              <div className='col-md-12 col-sm-12 col-12 mt-4'>
                                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="Card image" id='avatar99'/>
                                <h4 id='ispum'>VIRO MEDIA PLAYERS UI</h4>
                              </div>
                              </div>

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
                        </Tabs>
              </div>
             </section>




            <section id="pricing" class="pricing section-bg">
                <div class="container">
                    <h1>Pricing</h1>
                    <h5 id='titlecaption'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</h5>
                    <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
                        <div class="box">
                        <h3>Basic</h3>
                        <h4><sup>$</sup>09<span> / month</span></h4>
                        <ul>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li class="na">Pharetra massa</li>
                            <li class="na">Massa ultricies mi</li>
                        </ul>
                        <div class="btn-wrap text-center">
                            <a href="#" class="btn-buy">Buy Now</a>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
                        <div class="box featured">
                        <h3>Pro</h3>
                        <h4><sup>$</sup>19<span> / month</span></h4>
                        <ul>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li class="na">Massa ultricies mi</li>
                        </ul>
                        <div class="btn-wrap text-center">
                            <a href="#" class="btn-buy">Buy Now</a>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-4 col-4 mt-4">
                        <div class="box">
                        <h3>Premium</h3>
                        <h4><sup>$</sup>29<span> / month</span></h4>
                        <ul>
                            <li>Aida dere</li>
                            <li>Nec feugiat nisl</li>
                            <li>Nulla at volutpat dola</li>
                            <li>Pharetra massa</li>
                            <li>Massa ultricies mi</li>
                        </ul>
                        <div class="btn-wrap text-center">
                            <a href="#" class="btn-buy">Buy Now</a>
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
      </div>
    );
  };

  export default Portfolio;
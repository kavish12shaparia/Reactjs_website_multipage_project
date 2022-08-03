import React, { useState } from "react";
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };


const Solution = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section4">
            <div className="container">
             <div className="row">
                 <div className="col-md-6 col-sm-6 col-12">
                    <h1>WHAT WE DO</h1>
                    <h2>
                        <ReadMore>
                        Being an Outsourcing software and product development company we are delivering a complete life cycle of innovative web development services and harnessing the technological prowess to tap the full potential of IT for business excellence.As a vital accomplish we create digital first brand programs, intuitive encounters, and eCommerce leads that separate and resound in the present customer driven, consistently changing business condition.
                        </ReadMore>
                    </h2>
                 </div>
                 <div className="col-md-6 col-sm-6 col-12">
                    <img className='mx-auto d-block' src="assets/images/last_gif.gif" alt="team" id='team2x' />
                 </div>
             </div>
            </div>
        </section>




        <section className='story'>
          <div className='container'>
             <h1 className='titlex'>Our Solutions</h1>
              <p className='titlecapx'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header><h4 id='acc-head'>Web Applications</h4></Accordion.Header>
                      <Accordion.Body>
                       <h5 id='acc-text'>
                        <strong id='ahead'>Let us be your web developing partner and transform your and your client’s businesses.</strong> 
                         <br/>
                         The world has shrunk to become one giant market space where every business needs to have stunning web space of its own. We are website development company in India that you need. Collaborate with us for a seamless web partnership. Let your client’s presence in the world wide web be eminent with our web development solutions.
                         <br/>
                            <ul>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>NodeJs</li>
                                <li>AWS Amplify, Cognito, Lambda, AppSync</li>
                            </ul>  
                       </h5>
                        
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header><h4 id='acc-head'>Mobile Applications</h4></Accordion.Header>
                      <Accordion.Body>
                        <h5 id='acc-text'>
                        <strong id='ahead'>Become omnipresent with our tailor-made Mobile Apps.</strong>
                         <br/>
                         Give the world a chance to visit your realm right from their phones. Let your products and services be only a few-clicks’ away from your prospects. As an android app development company in India we can help you in becoming efficient and serve you better. Our erudite iOS developers are adept in transforming the way you are perceived in the virtual world.
                         <br/>
                          <ul>
                            <li>Andriod</li>
                            <li>iOS</li>
                            <li>React Native</li>
                            <li>Xamarin</li>
                          </ul>  
                        </h5>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header><h4 id='acc-head'>Content Management System aka CMS</h4></Accordion.Header>
                      <Accordion.Body>
                        <h5 id='acc-text'>
                        <strong id='ahead'>Let us be your Enterprise CMS development partner</strong>
                         <br/>
                         We provide the Enterprise Content Management System services for the small, medium and large enterprise businesses to create websites, business portals, and intranets. We offer Enterprise CMS on WordPress, Drupal, CraftCMS, Wagtail and django CMS. From a small business next door, to the top companies on NYSE our clients rely on us for their CMS based websites.
                         <br/>
                            <ul>
                                <li>WordPress</li>
                                <li>Drupal</li>
                                <li>CraftCMS</li>
                                <li>Wagtail</li>
                                <li>django CMS</li>
                            </ul>  
                        </h5>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header><h4 id='acc-head'>E-commerce</h4></Accordion.Header>
                        <Accordion.Body>
                        <h5 id='acc-text'>
                        <strong id='ahead'>Let’s go beyond the boundaries of distance & time</strong>
                         <br/>
                         E-commerce has become the new face of traditional trading. Businesses now no longer need to go out of their existent or non-existent physical spaces to be able to reach to their potential consumers. Let August Infotech take the trade & competition online.
                         <br/>
                            <ul>
                                <li>WooCommerce</li>
                                <li>Shopify</li>
                            </ul>  
                        </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header><h4 id='acc-head'>Artificial Intelligence and Machine learning</h4></Accordion.Header>
                        <Accordion.Body>
                        <h5 id='acc-text'>
                        <strong id='ahead'>Embrace and evolve with the new dawn of technologies.</strong>
                         <br/>
                         The future is indeed here. The undeniable progress in the aspect of technology has brought forth a whole new dimension. Being the Artificial Intelligence development company in India, we bring you a plethora of options to discover. Let’s explore the possibilities of that world together.
                         <br/>
                            <ul>
                                <li>Internet of Things (IOT)</li>
                                <li>Artificial Intelligence</li>
                                <li>Machine Learning</li>
                                <li>Big Data</li>
                                <li>Blockchain</li>
                            </ul>  
                        </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header><h4 id='acc-head'>Front-end Development</h4></Accordion.Header>
                        <Accordion.Body>
                        <h5 id='acc-text'>
                            <strong id='ahead'>We love what we do and we do what our clients love</strong> 
                            <br/>
                            The website’s front end is everything you see. It is all about convenience and the pleasure of human-computer interaction.
                            <br/>
                                <ul>
                                    <li>Design to Responsive Template</li>
                                    <li>ReactJs</li>
                                    <li>Gatsby</li>
                                    <li>Vue.js</li>
                                </ul>  
                        </h5>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>    
        </section>




        <section className="doit">
             <div className="container">
             <h1>HERE'S HOW WE DO IT</h1>
             <h4>
             <u><strong>Discover:</strong></u>
             <br/>
               Our goal is to fully understand each client`s business and the environment in which it operates. We look to completely understand the target audience and how they will interact with the digital products we deliver.
             <br/>
             <br/>
             <u><strong>Strategize:</strong></u>
             <br/>
               Our planning process turns research into a clear set of action items to meet business goals. We take this information to build the blueprint to drive more traffic and convert web visitors into web leads.
               <br/>
               <br/> 
               <u><strong>Execute:</strong></u>
               <br/>
               Our dedicated team of designers use their gained knowledge of your company to create visually-engaging designs with the overall user experience in mind. We are proud of every project we ship and are confident that you and your team will be as well.
               <br/>
               <br/> 
               <u><strong>Launch:</strong></u>
               <br/>
               During the Implementation, our job is to translate creative into a full program that goes live. Implementation often includes an array of services, which can include design, development and search marketing.
               <br/>
               <br/>
               <u><strong>Evolve:</strong></u>
               <br/>
               Last but not least, our task is to use scientific metrics to track and analyze campaign performance. This helps us easily identify what worked and what did not, we then initiate new strategies to maximize your business goals.
             </h4>
             </div>
        </section>



        <section className='engage'>
          <div className='container'>
            <h1>HOW TO ENGAGE</h1>
            <div className='row'>
            <div className='col-md-6 col-sm-6 col-6'>
                <h4>When to choose</h4> 
                <h3>Constrained Budget Engagement</h3>
                <p>
                <br/>
                (1) Very clear scope and stable set of requirements that isn't likely to change throughout the project.
                <br/>
                <br/>
                (2) Can define clear long term milestones - irrespective of the working models chosen (i.e. Agile or Waterfall).
                <br/>
                <br/>
                (3) At times, works best when you're working under a tight budget as well, to stay focused on extremely critical features you cannot compromise with.
                <br/>
                <br/>
                (4) When you have less time to spend with development team, so that you can focus on business side of your venture.
                </p>
            </div>

            <div className='col-md-6 col-sm-6 col-6'>
                <h4>When to choose</h4> 
                <h3>Evolving Scope Engagement</h3>
                <p>
                <br/>
                (1) The Scope is defined very briefly and the requirements are very likely to change throughout the project.
                <br/>
                <br/>
                (2) Can define clear short term milestones - depending on the working model chosen (i.e. Agile or Waterfall).
                <br/>
                <br/>
                (3) Works best when you're ready to go into multiple iterations for a given feature and fine tune it by inspecting all the possible aspects.
                <br/>
                <br/>
                (4) When you have more time to spend with development team, by sharing clear objectives and goals so that they are always in sync with you.
                </p>
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

  export default Solution;
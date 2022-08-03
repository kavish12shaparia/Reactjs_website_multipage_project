import React from 'react';
import "../assets/css/custom.css";
import "../assets/css/responsive.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const Blog = () => {
    return (
      <>
        <Navbar />




        <section className="hero-section6">
          <div className='container'>
              <h1> Blogs </h1>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim mauris, placerat sit amet pretium non, pretium quis mauris.</h5>
          </div>
        </section>




        <section className='blog'>
          <div className='container'>
            <div className='row' id='row1'>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
              <img className='mx-auto d-block' src="assets/images/1 (1).jpg" alt="blog_picture" id='blogp'/>
              </div>
              <div className='col-md-8 col-sm-8 col-8 mt-8'>
                <h2>Lorem ipsum dolor sit amet</h2>
                <p>1-June-2019</p>
                <h4>Aliquam sapien diam, egestas a nibh vitae, lobortis efficitur est. Quisque ullamcorper, enim non posuere feugiat, ante enim interdum enim, eget mollis ipsum lorem ut lectus. Quisque eu est at metus sodales congue sollicitudin sed est. Vivamus rutrum blandit nunc, pretium fermentum velit fringilla vel.</h4>
                <p id='user1'><strong>CHANEL IMAN</strong></p>
                <p id='post1'>Ceo of Pinterest</p>
                           <Button variant="primary" type="submit" id='buttonsub2x' >
                                  <h5 id='entryx'>Read more</h5> 
                            </Button>
              </div>
            </div>
            <br/>
            <div className='row' id='row1'>
              <div className='col-md-8 col-sm-8 col-8 mt-8'>
              <h2>Lorem ipsum dolor sit amet</h2>
                <p>1-June-2019</p>
                <h4>Aliquam sapien diam, egestas a nibh vitae, lobortis efficitur est. Quisque ullamcorper, enim non posuere feugiat, ante enim interdum enim, eget mollis ipsum lorem ut lectus. Quisque eu est at metus sodales congue sollicitudin sed est. Vivamus rutrum blandit nunc, pretium fermentum velit fringilla vel.</h4>
                <p id='user1'><strong>Anne Hathway</strong></p>
                <p id='post1'>Lead Designer at Cuda</p>
                <Button variant="primary" type="submit" id='buttonsub2x' >
                                  <h5 id='entryx'>Read more</h5> 
                </Button>
              </div>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
                <img className='mx-auto d-block' src="assets/images/1 (2).jpg" alt="blog_picture" id='blogp'/>
              </div>
            </div>
            <br/>
            <div className='row' id='row1'>
              <div className='col-md-4 col-sm-4 col-4 mt-4'>
                <img className='mx-auto d-block' src="assets/images/1 (3).jpg" alt="blog_picture" id='blogp'/>
              </div>
              <div className='col-md-8 col-sm-8 col-8 mt-8'>
              <h2>Lorem ipsum dolor sit amet</h2>
                <p>1-June-2019</p>
                <h4>Aliquam sapien diam, egestas a nibh vitae, lobortis efficitur est. Quisque ullamcorper, enim non posuere feugiat, ante enim interdum enim, eget mollis ipsum lorem ut lectus. Quisque eu est at metus sodales congue sollicitudin sed est. Vivamus rutrum blandit nunc, pretium fermentum velit fringilla vel.</h4>
                <p id='user1'><strong>Ashely Greene</strong></p>
                <p id='post1'>SEO at Cuda</p>
                <Button variant="primary" type="submit" id='buttonsub2x' >
                                  <h5 id='entryx'>Read more</h5> 
                </Button>
              </div>
              </div>
              <br/>
              <div className='row' id='row1'>
              <div className='col-md-8 col-sm-8 col-8'>
                  <h2>Lorem ipsum dolor sit amet</h2>
                    <p>1-June-2019</p>
                    <h4>Aliquam sapien diam, egestas a nibh vitae, lobortis efficitur est. Quisque ullamcorper, enim non posuere feugiat, ante enim interdum enim, eget mollis ipsum lorem ut lectus. Quisque eu est at metus sodales congue sollicitudin sed est. Vivamus rutrum blandit nunc, pretium fermentum velit fringilla vel.</h4>
                    <p id='user1'><strong>Anne Hathway</strong></p>
                    <p id='post1'>Lead Designer at Cuda</p>
                    <Button variant="primary" type="submit" id='buttonsub2x' >
                                  <h5 id='entryx'>Read more</h5> 
                    </Button>

              </div>
              <div className='col-md-4 col-sm-4 col-4'>
                <img className='mx-auto d-block' src="assets/images/1 (4).jpg" alt="blog_picture" id='blogp'/>
              </div>
            </div>
            <br/>
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

  export default Blog;
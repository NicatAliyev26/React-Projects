import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import image from "./img/info1.jpg"
import bimage from "./img/blog2.jpg"
import Image4 from "./img/thumb4.jpg"
import Image5 from "./img/thumb5.jpg"
import Image6 from "./img/thumb6.jpg"
import Image1 from "./img/thumb1.jpg"
import Image2 from "./img/thumb2.jpg"
import Image3 from "./img/thumb3.jpg"





const root = document.getElementById("root");


const Nav = () => (
        <>
            <div className="nav container">            
                <div className="navbar">  

                        <div className="logo">Yve</div>
                           <ul>
                                   <li>
                                   <Link exact to="/" activeClassName="active" className="line" >Home </Link>
                                   </li>
                                   <li>
                                   <Link exact to="/portfolio" activeClassName="active" className="line">Portfolio </Link>
                                   </li>
                                   <li>
                                   <Link exact to="/info" activeClassName="active" className="line">Info </Link>
                                   </li>
                                   <li>
                                   <Link exact to="/blog" activeClassName="active" className="line">Blog </Link>
                                   </li>
                           </ul>
                </div>   
            </div>
        </>
    )


const Footer = () =>(
        <>
            <div className="foot">
                   <div className="left">
                           <div className="main">
                              <div className="logo-2">Yve</div>
                              <p className="mt-3">© 2017 KLLR All Rights Reserved</p>
                           </div>
                           
                   </div>
                   <div className="right">
                           <ul>
                                   <li className="article">Contact</li>
                                   <br/>
                                   <li>your@example.com</li>
                                   <li>+123 456 789</li>
                                   <li>767 Fifth Ave.</li>
                                   <li>New York, NY 10153</li>
                           </ul>
                           <ul>
                                  <li className="article">Menu</li> 
                                  <br/>
                                  <li><Link exact to="/" activeClassName="active" className="line" >Home </Link></li> 
                                  <li><Link exact to="/portfolio" activeClassName="active" className="line">Portfolio </Link></li> 
                                  <li><Link exact to="/info" activeClassName="active" className="line">Info </Link></li> 
                                  <li><Link exact to="/blog" activeClassName="active" className="line">Blog </Link></li> 
                           </ul>
                           <ul>
                                  <li className="article">Social</li> 
                                  <br/>
                                  <li>Facebook</li> 
                                  <li>Instagram</li> 
                                  <li>Twitter</li> 
                                  <li>Dribble</li> 
                           </ul>
                   </div>
            </div>
        </>
    )
    
  
    
    const HomePage = () => (
        <>
        <div className="containerr">
             <div className="text">
                 <h1>HELLO.</h1>
            </div>
            <div className="pictures container">
                <div className="first">
                    <img src={Image4} alt="no loaded"/>
                    <img src={Image5} alt="no loaded"/>
                    <img src={Image6} alt="no loaded"/>
                </div> <br/>

                <div className="second">
                    <img src={Image1} alt="no loaded"/>
                    <img src={Image2} alt="no loaded"/>
                    <img src={Image3} alt="no loaded"/>
                </div>
            </div>
            
        </div>
        
    
        </>
    )
    
    const PortfolioPage = () => (
        <>
        <div className="port">
            <div className="pictures container ">
                <div className="first">
                    <img src={Image4} alt="no loaded"/>
                    <img src={Image5} alt="no loaded"/>
                    <img src={Image6} alt="no loaded"/>
                </div> <br/>

                <div className="second">
                    <img src={Image1} alt="no loaded"/>
                    <img src={Image2} alt="no loaded"/>
                    <img src={Image3} alt="no loaded"/>
                </div><br/><br/>
                <h4 className="mt-5">But I bought a yearbook ad from you, doesn’t that mean anything <br/> anymore? What’s Spanish for “I know you speak English?” It’s called ‘taking <br/> advantage.’ It’s what gets you ahead in life. First place chick is hot, but has an attitude, doesn’t date magicians.</h4>
            </div> 
        </div>
        </>
    )
    
    const InfoPage = () => (
        <>
        <div className="image container">
            <img src={image} alt={image}/> 
        </div>

           <div className="about mt-5 container">
               <div className="h-text">
                 <h5>About</h5>
               </div>
           <div className="p-text">
           <p>But I bought a yearbook ad from you, doesn’t that mean anything anymore? What’s Spanish for “I know you speak English?” It’s called ‘taking advantage.’ It’s what gets you ahead in life. First place chick is hot, but has an attitude, doesn’t date magicians. <br/><br/>
            I care deeply for nature. Steve Holt! There’s only one man I’ve ever called a coward, and that’s Brian Doyle Murray. No, what I’m calling you is a television actor. There’s only one man I’ve ever called a coward, and that’s Brian Doyle Murray. No, what I’m calling you is a television actor.</p>
           </div>
           

            </div> 

           <div className="what container">
               <div className="h-texts">
                 <h5>What I do</h5>
               </div>
           <div className="p-texts">
               <h1>Development</h1><br/>
               <p>Steve Holt! There’s only one man I’ve ever called a coward, and that’s Brian Doyle Murray. No, what I’m calling you is a television actor.</p><br/><br/>
               <h1>Design</h1><br/>
               <p>Steve Holt! There’s only one man I’ve ever called a coward, and that’s Brian Doyle Murray. No, what I’m calling you is a television actor.</p><br/><br/>
               <h1>Branding</h1><br/>
               <p>Steve Holt! There’s only one man I’ve ever called a coward, and that’s Brian Doyle Murray. No, what I’m calling you is a television actor.</p><br/><br/>
           </div>
           

            </div> 

            <div className="contact container">
               <div className="cnt-text">
                 <h5>Contact</h5>
               </div>
           <div className="p-text">
           <p>You can send me an email at your@example.com <br/><br/>
              Or talk to me on Facebook, Twitter or Instagram.</p>
           </div>
           

            </div> 

        </>
    )
    const BlogPage = () => (
        <>
            <div className="blog-section container">
                  <div className="left">
                          <ul>
                              <li className="post-1">
                                  <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>Not tricks</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>                         
                              </li>
                              <li className="post-2">
                              <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>Lindsay and I</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>  
                              </li>
                              <li className="post-3">
                                  <img src={bimage} alt="blog"/>
                              <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>I care deeply for nature</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>  
                              </li>
                              <li className="post-4">
                              <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>I’m a monster</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>  
                              </li>
                              <li className="post-5">
                              <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>You’ll have more fun</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>  
                              </li>
                              <li className="post-6">
                              <div className="texts">
                                  <p>JUNE 30, 2017</p>
                                  <h3>It’s what gets you ahead in life</h3>
                                  <h5><a href="#">Read article</a></h5>
                                  </div>  
                              </li>
                          </ul>
                  </div>
                  <div className="right">
                      <input type="search" name="" id="" placeholder="Search..." />
                            <div className="part-1">                                
                                <h4>Recent Posts</h4>

                                <ul>
                                    <li><a href="#">Not tricks</a> </li>
                                    <li><a href="#">Lindsay and I</a> </li>
                                    <li><a href="#">I care deeply for nature</a> </li>
                                    <li><a href="#">I’m a monster</a> </li>
                                    <li><a href="#">You’ll have more fun</a> </li>
                                </ul>
                                
                            </div>

                            <div className="part-1">
                              <h4>Recent Comments</h4>
                            </div>

                            <div className="part-other">
                              <h4>Archives</h4>
                              <ul>
                                    <li><a href="#">June 2017</a></li>
                              </ul>      
                            </div>


                            <div className="part-1">                                
                                <h4>Categories</h4>

                                <ul>
                                    <li><a href="#">Branding</a> </li>
                                    <li><a href="#">Logo</a> </li>
                                    <li><a href="#">Uncategorized</a> </li>
                                    <li><a href="#">Web</a> </li>
                                </ul>
                                
                            </div>
                            <div className="part-1">                                
                                <h4>Meta</h4>

                                <ul>
                                    <li><a href="#">Log in</a> </li>
                                    <li><a href="#">Entries feed</a> </li>
                                    <li><a href="#">Comments feed</a> </li>
                                    <li><a href="#">WordPress.org</a> </li>
                                </ul>
                                
                            </div>
                  </div>
            </div>
        </>
    )


var app = (
   <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/portfolio" component={PortfolioPage}></Route>
        <Route path="/info" component={InfoPage}></Route>
        <Route path="/blog" component={BlogPage}></Route>
        <Footer/>

    </BrowserRouter>
)
        
   


ReactDOM.render(app,root);

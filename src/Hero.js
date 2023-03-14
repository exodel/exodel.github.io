import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function Hero() {

    ReactGA.event({
        category: 'Link',
        action: 'click',
        label: 'submit button clicked'
      });
      
      ReactGA.set({ userRole: 'admin' });      

  return (
    <>
        <section id='hero'>
            <div className='container pb-5' id='hero-heading-subheading'>
                <div className='row pb-2'>
                    <div className='col-lg-6 py-5 px-4'>
                        <h1 className='lead fw-bold text-center pt-5' id='hero-heading'>Build your brand name with us !</h1>
                        <p className='text-center pt-2 px-5'id='hero-para'>Evaluating your brand's growth through expert social media strategy and management</p>
                        <div className='d-flex justify-content-center py-5'>
                            <Link to="/pricing" className=" py-2 px-4 text-center" id='hero-btn'>See pricing</Link> 
                        </div>
                    </div>
                    <div className='col-lg-6 py-5 px-4'>
                        <img src='./images/gif/hero.gif' className='img-fluid' alt=''/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 px-3 pb-5 text-center'><img className='img-fluid mt-5' src='./images/jpg/company.jpg' alt=''/></div>
                </div>
            </div>
        </section>
        <section id="hero-video">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 px-2'>
                        <img  id="hero-video-container" className="img-fluid" src="./videos/mv.gif" alt=''/>
                    </div>
                </div>
            </div>
        </section>
        <section>
           <div className='container py-5'>
                {/* <div className='row pt-5'>
                    <div className='col-lg-6 py-5 px-5 text-center'>
                        <img className='img-fluid' id='img-para-1' src='./images/gif/meteor-rain.gif' alt=''/>
                        <h2 className='fw-bold text-center' id='hero-para-heading'>Professionalism</h2>
                        <p className='text-center lead' id='middle-para'>staffed by highly skilled </p>
                    </div>
                    {/* <div className='col-lg-6 py-5 px-5 text-center'>
                        <img className='img-fluid' id='img-para-1' src='./images/gif/line-chart.gif' alt=''/>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>Result-oriented</h2>
                        <p className='text-center lead' id='middle-para'>focused on delivering tangible results and measurable outcomes for their clients, and they use a variety of tools and methodologies to track and evaluate their performance.</p>
                    </div>
                </div> */}
                <div className='row g-4 px-5'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/meteor-rain.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>Staffed by highly skilled</h1>
                        <p className='lead text-center px-5' id="hero-para-2">and experienced professionals who have a deep understanding of their clients' industries and business models.</p>
                    </div>
                </div>
                <div className='row py-5'>
                    <div className='col-lg-12 py-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/1.gif' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>Result-oriented</h1>
                        <p className='lead text-center px-5' id="hero-para-2">focused on delivering tangible results and measurable outcomes for their clients, and they use a variety of tools and methodologies to track and evaluate their performance.</p>
                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/line-chart.gif' alt=''/>
                    </div>
                </div>
           </div> 
        </section>
        <section id='showcase'>
            <div className='container py-5'>
                <div className='row py-5'>
                    <div className='col-lg-4 px-5 py-5'>
                        <h2 id='showcase-para-heading' className='fw-bold text-center'>Working with</h2>
                        <h1 id='showcase-heading' className='fw-bold text-center'>3+</h1>
                        <p id='showcase-para' className='lead text-center'>Clients</p>
                    </div>
                    <div className='col-lg-4 px-5 py-5'>
                        <h2 id='showcase-para-heading' className='fw-bold text-center'>Experience of</h2>
                        <h1 id='showcase-heading' className='fw-bold text-center'>1+</h1>
                        <p id='showcase-para' className='lead text-center'>Years</p>
                    </div>
                    <div className='col-lg-4 px-5 py-5'>
                        <h2 id='showcase-para-heading' className='fw-bold text-center'>Serving from</h2>
                        <h1 id='showcase-heading' className='fw-bold text-center'>2022</h1>
                        <p id='showcase-para' className='lead text-center'>January</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
           <div className='container py-5'>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/customer.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>A team</h1>
                        <p className='lead text-center px-5' id="hero-para-2">of dedicated digital marketing professionals who specialize in helping businesses achieve their goals through effective online strategies.</p>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-12 py-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/2.gif' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>Everything You Need to Know About Facebook Ad Manager</h1>
                        <p className='lead text-center px-5' id="hero-para-2">Facebook ad manager to create and manage successful ad campaigns for your business.</p>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <img className='img-fluid py-5' src='./images/gif/search.gif' alt=''/>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-12 pb-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/3.gif' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 pt-5'>
                        <img className='img-fluid pt-5' src='./images/gif/book.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>The Essential Guide to Facebook Ad Metrics</h1>
                        <p className='lead text-center px-5' id="hero-para-2">the metrics that matter for Facebook ad performance and optimize your campaigns for success.</p>
                    </div>
                </div>
                <div className='row py-5'>
                    {/* <div className='col-lg-6 pb-5 px-5 text-center'>
                        <h2 className='fw-bold text-center' id='hero-para-heading'></h2>
                        <p className='text-center lead' id='middle-para'></p>
                    </div> */}
                    {/* <div className='col-lg-6 pb-5 px-5 text-center'>
                        <img className='img-fluid' id='img-para-1' src='./images/gif/rocket.gif' alt=''/>
                        <h2 className='fw-bold text-center' id='hero-para-heading-2'>Boost Your Facebook Ad Performance with Optimization Tips</h2>
                        <p className='text-center lead' id='middle-para'>most out of your Facebook ad campaigns with proven optimization tips.</p>
                    </div> */}
                </div>
           </div> 
        </section>
        <section id='hero-card'>
            <div className='container'>
                <div className='row g-4 px-5'>
                    <div className='col-lg-4 text-center'>
                        <img className="img-fluid" id='hero-card-img' src='./images/png/card-img-1.png' alt=''/>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <img className="img-fluid" id='hero-card-img' src='./images/png/card-img-2.png' alt=''/>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <img className="img-fluid" id='hero-card-img' src='./images/png/card-img-3.png' alt=''/>
                    </div>
                </div>
            </div>
        </section>
        <section>
           <div className='container py-5'>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>Helping</h1>
                        <p className='lead text-center px-5' id="hero-para-2">the client to engage with their customers and build relationships through social media, including responding to questions and feedback, and initiating conversations.</p>
                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/social-care.gif' alt=''/>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-12 py-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/4.gif' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/target.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-center py-5' id='hero-heading-2'>A Beginner's Guide to Facebook Ad Targeting</h1>
                        <p className='lead text-center px-5' id="hero-para-2">the basics of Facebook ad targeting and start reaching your ideal audience with precision and accuracy.</p>
                    </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-12 pb-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/5.gif' alt=''/>
                   </div>
                </div>
                <div className='row pt-5'>
                    <div className='col-lg-6 pb-5 px-5 text-center'>
                        <img className='img-fluid' id='img-para-1' src='./images/gif/presentation.gif' alt=''/>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>How to Create High-Converting Facebook Landing Pages</h2>
                        <p className='text-center lead' id='middle-para'>the key elements of high-converting Facebook landing pages and start generating more leads and sales.</p>
                    </div>
                    <div className='col-lg-6 pb-5 px-5 text-center'>
                        <img className='img-fluid' id='img-para-1' src='./images/gif/mouse.gif' alt=''/>
                        <h2 className='fw-bold text-center' id='hero-para-heading-4'>The Complete Guide to Facebook Retargeting</h2>
                        <p className='text-center lead' id='middle-para'>how to create effective Facebook retargeting campaigns and boost your conversion rates.</p>
                    </div>
                </div>
           </div> 
        </section>
        <section id='hero-2'>
            <div className='container pb-5'>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-start py-5' id='hero-heading-2'>Get started right here !</h1>
                        <p className='lead text-start' id="hero-para-2">Join us so that we can build and grow your brand name as you like</p>
                        <div className='d-flex justify-content-start pt-2'>
                            <Link to="/contact" className='py-2 px-5 text-center' id='hero-btn-2'>Contact</Link>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/png/hero-2.png' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5 pt-5 mt-5'>
                        <h1 className='fw-bold text-start pt-5 py-5' id='hero-heading-2'>We are here to support you 24*7</h1>
                        <p className='text-start lead' id='hero-para-2'>Any type of help you need anytime. We are here to assist</p>
                        <div className='d-flex justify-content-start pt-2'>
                            <Link to="/contact" className='py-2 px-5 text-center' id='hero-btn-2'>Contact</Link>
                        </div>
                    </div>
                    <div className='col-lg-6 py-5 pt-5 mt-5'>
                        <img className='img-fluid' src='./images/png/hero-4.png' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-5'>
                    <div className='col-lg-6 py-5 pt-5 mt-5'>
                        <h1 className='fw-bold text-start pt-5 py-5' id='hero-heading-2'>Know more about us</h1>
                        <p className='lead text-start' id='hero-para-2'>Come and get to know more about us</p>
                        <div className='d-flex justify-content-start pt-2'>
                            <Link to="/about" className='py-2 px-5 text-center' id='hero-btn-2'>About</Link>
                        </div>
                    </div>
                    <div className='col-lg-6 py-5 pt-4'>
                        <img className='img-fluid' src='./images/png/hero-3.png' alt=''/>
                    </div>
                </div>
            </div>
        </section>  
        <section>
           <div className='container pb-5'>
                <div className='row pb-5'>
                    <div className='col-lg-6 pb-5 px-5'>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>We appreciate</h2>
                        <p className='text-center lead' id='middle-para'>your interest and engagement with our content. We hope that your experience on our website was informative and enjoyable.</p>
                    </div>
                    <div className='col-lg-6 pb-5 px-5'>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>We take</h2>
                        <p className='text-center lead' id='middle-para'>great pride in providing high-quality content and a user-friendly experience for our viewers, and we are constantly striving to improve.</p>
                    </div>
                </div>
                <div className='row pb-5'>
                    <div className='col-lg-6 pb-5 px-5'>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>Your support</h2>
                        <p className='text-center lead' id='middle-para'>and feedback are important to us, and we value your input. Please do not hesitate to reach out to us with any comments, questions, or suggestions you may have.</p>
                    </div>
                    <div className='col-lg-6 pb-5 px-5'>
                        <h2 className='fw-bold text-center' id='hero-para-heading-3'>Thank you</h2>
                        <p className='text-center lead' id='middle-para'>once again for visiting our website. We hope to see you again soon.</p>
                    </div>
                </div>
           </div> 
        </section>
    </>
  )
}

export default Hero;

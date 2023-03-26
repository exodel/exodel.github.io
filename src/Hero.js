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
                <div className='container-fluid pb-5 rounded-3' id='hero-primary'>
                    <div className='container'>
                        <div className='row pb-5 pt-5 d-flex justify-content-center'>
                            <div className='col-lg-9 pt-5'>
                                <h1 className='fw-bold text-center' id='hero-heading'>Maximize your brand's presence and growth!</h1>
                                <p className='text-center pt-2'id='hero-para'>Evaluating your brand's growth through expert social media strategy and management</p>
                                <div className='row d-flex justify-content-center pb-3'>
                                    <div className='col-lg-3 text-center px-4'>
                                        <p className='lead px-3 py-2' id='para-features'><img className='img-fluid' id='img-features' src='./images/gif/party-pop.gif' alt=''/>Your product</p>
                                    </div>
                                    <div className='col-lg-3 text-center px-4'>
                                        <p className='lead px-3 py-2' id='para-features'><img className='img-fluid' id='img-features' src='./images/gif/search-audience.gif' alt=''/>Our research</p>
                                    </div>
                                    <div className='col-lg-3 text-center px-4'>
                                        <p className='lead px-3 py-2' id='para-features'><img className='img-fluid' id='img-features' src='./images/gif/target-audience.gif' alt=''/>Our time</p>
                                    </div>
                                    <p className='lead text-center' id='para-btn'>**No credit card or any type of payment required on the website</p>
                                </div>
                                <div className='row g-2 d-flex justify-content-center pb-5 px-4'>
                                    <div className='col-lg-4 text-center py-3 mx-2' id='hero-btn-container'>
                                        <Link to="/pricing" id='hero-btn'>See Pricing & Services</Link> 
                                    </div>
                                    <div className='col-lg-4 text-center py-3 mx-2' id='hero-btn-container'>
                                        <a href="https://dvqfrdlsc9z.typeform.com/to/J24bXgqi" target='_blank' rel='noreferrer' id='hero-btn'>Get in touch with us</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section id="hero-video">
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row px-2 d-flex justify-content-center'>
                        <div className='col-lg-12 py-2' id='hero-video-col'> 
                            <img  id="hero-video-container" className="img-fluid" src="./videos/mv.gif" alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='hero-secondary-2'>
            <div className='container-fluid'>
                <div className='container py-5'>
                    <div className='row g-2 py-5 d-flex justify-content-center'>
                        <div className='col-lg-12 text-center pb-5'>
                            <h1 className='fw-bold' id='heading-main-card'>Who we are?</h1>
                        </div>
                        <div className='col-lg-3 text-start mx-3 px-3 py-3' id='col-card'>
                            <img className='img-fluid px-1 py-1' src='./images/gif/meteor-rain.gif' id='img-card' alt=''/>
                            <h6 className='fw-bold' id='heading-card'>Staffed by highly skilled</h6>
                            <p className='lead' id='para-card'>and experienced professionals who have a deep understanding of their clients' industries and business models.</p>
                        </div>
                        <div className='col-lg-3 text-start mx-3 px-3 py-3' id='col-card'>
                            <img className='img-fluid px-1 py-1' src='./images/gif/line-chart.gif' id='img-card' alt=''/>
                            <h6 className='fw-bold' id='heading-card'>Result-oriented</h6>
                            <p className='lead' id='para-card'>focused on delivering tangible results and measurable outcomes for their clients, and they use a variety of tools and methodologies to track and evaluate their performance.</p>
                        </div>
                        <div className='col-lg-3 text-start mx-3 px-3 py-3' id='col-card'>
                            <img className='img-fluid px-1 py-1' src='./images/gif/customer.gif' id='img-card' alt=''/>
                            <h6 className='fw-bold' id='heading-card'>A team</h6>
                            <p className='lead' id='para-card'>of dedicated digital marketing professionals who specialize in helping businesses achieve their goals through effective online strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <section id='img-hero'>
            <img className='img-fluid' src='./images/png/iphone-mockups.png' alt=''/>
        </section> */}
        <section> 
            <div className='container'>
                <div className='row px-2 pt-5'>
                    <div className='col-lg-12 text-center'>
                        {/* <img className='img-fluid mt-5 rounded-3' src='./images/gif/img-hero.gif' alt=''/> */}
                        <h1 className='fw-bold text-center py-5' id='hero-para-company'>Leading with 16+ best companies</h1>
                        <img className='img-fluid' src='./images/png/company.png' alt=''/>
                    </div>
                </div>
            </div>
        </section>
        <section>
           <div className='container-fluid pb-5'>
                <div className='container'>
                    <div className='row pb-5 d-flex justify-content-center'>
                        <div className='col-lg-10 text-center'>
                            <h1 className='fw-bold pb-5' id='heading-left-aligned-section'>Get the most out of facebook carousel Ads</h1>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-6 text-start'>
                                <ul>
                                    <li>Tell a Story: Facebook Carousel Ads allow you to showcase multiple images or videos in a single ad. Use this feature to tell a story about your product or services</li>
                                    <li>Use High-Quality Visuals: Ensure that your images and videos are of high quality and visually appealing. Use high-resolution images and videos that are relevant to your brand and message</li>
                                    <li>Highlight Your Unique Value Proposition: Use your Carousel Ad to highlight your unique selling proposition (USP). This is the one thing that sets your brand apart from the competition</li>
                                    <li>Experiment with Different Formats: Don't be afraid to experiment with different formats to see what works best for your audience. You can try different combinations of images and videos to see which format generates the most engagement</li>
                                </ul>
                            </div>
                            <div className='col-lg-6'>
                                
                            </div>
                        </div>
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
                <div className='row pt-5'>
                    <div className='col-lg-12 py-5 px-2 text-center'>
                        <img className='img-fluid' src='./images/gif/2.gif' alt=''/>
                    </div>
                </div>
                <div className='row g-4 px-4'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-start py-5' id='hero-heading-2'>Everything You Need to Know About Facebook Ad Manager</h1>
                        <p className='lead text-start' id="hero-para-2">Facebook ad manager to create and manage successful ad campaigns for your business.</p>
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
                <div className='row g-4 px-4'>
                    <div className='col-lg-6 pt-5'>
                        <img className='img-fluid pt-5' src='./images/gif/book.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-start py-5' id='hero-heading-2'>The Essential Guide to Facebook Ad Metrics</h1>
                        <p className='lead text-start' id="hero-para-2">the metrics that matter for Facebook ad performance and optimize your campaigns for success.</p>
                    </div>
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
                <div className='row g-4 px-4'>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-start py-5' id='hero-heading-2'>Helping</h1>
                        <p className='lead text-start' id="hero-para-2">the client to engage with their customers and build relationships through social media, including responding to questions and feedback, and initiating conversations.</p>
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
                <div className='row g-4 px-4'>
                    <div className='col-lg-6'>
                        <img className='img-fluid' src='./images/gif/target.gif' alt=''/>
                    </div>
                    <div className='col-lg-6 py-5'>
                        <h1 className='fw-bold text-start py-5' id='hero-heading-2'>A Beginner's Guide to Facebook Ad Targeting</h1>
                        <p className='lead text-start' id="hero-para-2">the basics of Facebook ad targeting and start reaching your ideal audience with precision and accuracy.</p>
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
                <div className='row g-4 px-4'>
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
                <div className='row g-4 px-4'>
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
                <div className='row g-4 px-4'>
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

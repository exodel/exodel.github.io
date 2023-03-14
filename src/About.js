import React from 'react';
import ReactGA from 'react-ga';

function About() {

  ReactGA.event({
    category: 'Link',
    action: 'click',
    label: 'submit button clicked'
  });
  
  ReactGA.set({ userRole: 'admin' });

  return (
    <>
        <section id='about' className='py-5'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-12 px-5'>
                <h1 id='about-heading' className='fw-bold text-center pb-2'>About</h1>
                <p className='text-center lead pt-2' id='about-heading-para'>Welcome to exodel!</p>
              </div>
            </div>
          </div>
        </section>
        <section> 
          <div className='container py-5'>
            <div className='row py-5'>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- We are a team of dedicated digital marketing professionals who specialize in helping businesses achieve their goals through effective online strategies.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- At our core, we believe in the power of digital marketing to transform businesses of all sizes.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- Our team has years of experience in creating customized digital marketing campaigns that help businesses increase their online visibility, attract more customers, and boost sales.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- We understand that every business is unique, which is why we take a tailored approach to each project we work on.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- We start by analyzing your business and industry to create a personalized digital marketing plan that aligns with your specific goals and objectives.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- Our services include search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, content marketing, and more. We use the latest tools and technologies to create and execute campaigns that drive results.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- Our team is passionate about helping businesses succeed and we pride ourselves on delivering exceptional results.</p>
              </div>
              <div className='col-lg-6 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- Whether you're looking to increase your online presence, drive traffic to your website, or boost sales, we can help.</p>
              </div>
              <div className='col-lg-12 px-5 py-5'>
                <p id='about-para' className='text-center lead'>- Thank you for considering our services. We look forward to working with you and helping your business thrive in the digital age.</p>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About;
 
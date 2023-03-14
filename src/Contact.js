import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
// import { Link } from 'react-router-dom';

function Contact() {

  ReactGA.event({
    category: 'Link',
    action: 'click',
    label: 'submit button clicked'
  });
  
  ReactGA.set({ userRole: 'admin' });

  return (
    <>
        <section id='contact' className='py-5'>
          <div className='container py-5'>
            <div className='row'>
              <div className='col-lg-12 px-2'>
                <h1 id='contact-heading' className='fw-bold text-center'>Contact</h1>
                <p id='contact-heading-para' className='text-center lead pt-2'>Contact us for any type of help or assistance</p>
              </div>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <div className='container py-5'>
            <div className='row py-5 px-2'>
                <div className='col-lg-12 py-5 px-2' id='contact-white-portion'>
                  <a href="mailto:exodel.co@gmail.com" rel='noreferrer' target="_blank" className='text-decoration-none'><p id='contact-para' className='text-start lead pt-2'><img src='images/png/email-round-solid-icon.png' className='mx-2' id='email-img' alt=''/>exodel.co@gmail.com</p></a>
                  <a href='https://www.facebook.com/profile.php?id=100088892029287&mibextid=ZbWKwL' rel='noreferrer' target="_blank" className='text-decoration-none'><p id='contact-para' className='text-start lead pt-2'><img src='images/png/facebook-round-icon.png' className='mx-2' id='facebook-img' alt=''/>Facebook</p></a>
                  <a href="https://www.instagram.com/exodel_" rel='noreferrer' target="_blank" className='text-decoration-none'><p id='contact-para' className='text-start lead pt-2'><img src='images/png/instagram-round-icon.png' className='mx-2' id='instagram-img' alt=''/>Instagram</p></a>
                  {/* <p id='contact-para' className='text-start lead'><img src='images/png/call-icon.png' className='mx-2' id='call-img' alt=''/>+91 630 616 6139</p> */}
                  <p id='contact-para' className='text-start lead'><img src='images/png/call-icon.png' className='mx-2' id='call-img' alt=''/>+91 626 175 9672</p>
                </div>
              </div>
          </div>
        </section>
    </>
  )
}

export default Contact;

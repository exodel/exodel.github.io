import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function Foot() {

    ReactGA.event({
        category: 'Link',
        action: 'click',
        label: 'submit button clicked'
      });
      
      ReactGA.set({ userRole: 'admin' });

  return (
    <>
        <section id='foot'>
            <div className="container py-5 px-5">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item"><Link to="/" id='foot-nav-link' className="nav-link px-2">Home</Link></li>
                    <li className="nav-item"><Link to="/pricing" id='foot-nav-link' className="nav-link px-2">Pricing</Link></li>
                    <li className="nav-item"><Link to="/contact" id='foot-nav-link' className="nav-link px-2">Contact</Link></li>
                    <li className="nav-item"><Link to="/about" id='foot-nav-link' className="nav-link px-2">About</Link></li>
                    </ul>
                    <h1 id='foot-logo' className='text-center'>exodel co.</h1>
                    <p className="text-center" id="copyright-logo">&copy; 2022 - 2023 Company, Inc</p>
                </footer>
            </div>
        </section> 
    </>
  )
}

export default Foot;

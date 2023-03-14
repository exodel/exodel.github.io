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
                    {/* <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted"></Link></li> */}
                    <li className="nav-item"><Link to="/about" id='foot-nav-link' className="nav-link px-2">About</Link></li>
                    </ul>
                    <h1 id='foot-logo' className='text-center'>exodel co.</h1>
                    <p className="text-center" id="copyright-logo">&copy; 2022 - 2023 Company, Inc</p>
                </footer>
            </div>
            {/* <div className="container py-4 px-5">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <p id="copyright-logo" className="col-md-4 mb-0">&copy; 2023 Company, Inc</p>

                    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <h1 id='foot-logo'>exodel co.</h1>
                    </Link>

                    <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" id='foot-nav-link' className="nav-link px-2">Home</Link></li>
                    <li className="nav-item"><Link to="/pricing" id='foot-nav-link' className="nav-link px-2">Pricing</Link></li>
                    <li className="nav-item"><Link to="/contact" id='foot-nav-link' className="nav-link px-2">Contact</Link></li>
                    <li className="nav-item"><Link to="/about" id='foot-nav-link' className="nav-link px-2">About</Link></li>
                    <li className="nav-item"><Link to="/" id='foot-nav-link' className="nav-link px-2">Log In</Link></li>
                    </ul>
                </footer>
            </div> */}
        </section> 
    </>
  )
}

export default Foot;

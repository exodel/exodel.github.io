import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function Nav() {

    ReactGA.event({
        category: 'Link',
        action: 'click',
        label: 'submit button clicked'
      });
      
      ReactGA.set({ userRole: 'admin' });

  return (
    <>
        <section id='nav'>
            <div className='container-fluid py-2'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
                        <div className="container-fluid">
                        <Link className="navbar-brand fw-bold" to="/" id='nav-brand'>exodel co.</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end bg-white" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                            <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-black" id="offcanvasNavbar2Label">Hello there!</h5>
                            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" id='nav-link'>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/contact" id='nav-link'>Contact</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" to="/about" id='nav-link'>About</Link>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" id='nav-link' to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/primary-service" id='nav-link-dropdown'>Primary services</Link></li>
                                        <li><Link className="dropdown-item" to="/additional-service" id='nav-link-dropdown'>Additonal services</Link></li>
                                    </ul>
                                </li> */}
                            </ul>
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                <Link className="nav-link px-4" to="/pricing" id='nav-link-active'>Pricing & Services</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    </>
  )
}

export default Nav;

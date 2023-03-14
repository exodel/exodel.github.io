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
            {/* <div className='container px-2'>
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4" id='nav-brand'>exodel co.</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link" id='nav-link'>Home</Link></li>
                        <li className="nav-item"><Link to="/pricing" className="nav-link" id='nav-link'>Pricing</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link" id='nav-link'>Contact</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link" id='nav-link'>About</Link></li>
                        <li className="nav-item"><Link to="/product" className="nav-link active" aria-current="page" id='nav-link-active'>Products</Link></li>                    </ul>
                    </header>
                </div>
            </div> */}

            <div className='container py-2'>
                <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
                    <div className="container-fluid px-5">
                    <Link className="navbar-brand" to="/" id='nav-brand'>exodel co.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white" id="offcanvasNavbar2Label">Hello there!</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" id='nav-link' to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/primary-services" id='nav-link-dropdown'>Primary services</Link></li>
                                    <li><Link className="dropdown-item" to="/additional-services" id='nav-link-dropdown'>Additonal services</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                            <Link className="nav-link px-4" to="/pricing" id='nav-link-active'>Pricing</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        </section>
    </>
  )
}

export default Nav;

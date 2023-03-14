import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

function Price() {

    ReactGA.event({
        category: 'Link',
        action: 'click',
        label: 'submit button clicked'
      });
      
      ReactGA.set({ userRole: 'admin' });

  return (
    <>  
        <section id='price' className='pt-5'>
            <h1 id='price-heading' className='fw-bold text-center pt-5'>Pricing</h1>
            <p id='price-para' className='text-center lead pt-2'>Choose a plan that suits your requirment</p>
        </section>
        <section id='price-card'>
            <div className='container pb-5 pt-5'>
                <div className="row px-2 pb-5 row-cols-1 row-cols-md-3 mb-3 text-center">
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal" id='price-card-1-heading'>1.</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-1-title" id='price-card-1-rs'>Basic Plan</h1>
                            <ul className="list-unstyled mt-3 mb-4 px-2 pb-5">
                                <li id='price-card-1-li' className='text-start'>- Facebook Ads</li>
                                <li id='price-card-1-li' className='text-start'>- SEO</li>
                                <li id='price-card-1-li' className='text-start'>- Website development</li>
                                <li id='price-card-2-li' className='text-start'>- Website hosting</li>
                                {/* <li id='price-card-1-li'>Help center access</li> */}
                            </ul>
                            <Link to="/contact" id='price-card-1-btn' type="button" className="w-100 btn btn-lg btn-outline-primary">Contact</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal" id='price-card-2-heading'>2.</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title" id='price-card-2-rs'>Standard Plan</h1>
                            <ul className="list-unstyled mt-3 mb-4 px-2 pb-5">
                                <li id='price-card-2-li' className='text-start'>- Facebook Ads</li>
                                <li id='price-card-2-li' className='text-start'>- SEO</li>
                                <li id='price-card-2-li' className='text-start'>- Website development</li>
                                <li id='price-card-2-li' className='text-start'>- Website hosting</li>
                                <li id='price-card-2-li' className='text-start'>- Content creation</li>
                                <li id='price-card-2-li' className='text-start'>- Content management</li>
                            </ul>
                            <Link to="/contact" id='price-card-2-btn' type="button" className="w-100 btn btn-lg btn-primary">Contact</Link>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm" id='price-card-3-border'>
                        <div className="card-header py-3" id='price-card-3-heading-bg'>
                            <h4 className="my-0 fw-normal" id='price-card-3-heading'>3.</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title" id='price-card-3-rs'>Premium Plan</h1>
                            <ul className="list-unstyled mt-3 mb-4 px-2 pb-5">
                                <li id='price-card-2-li' className='text-start'>- Facebook Ads</li>
                                <li id='price-card-2-li' className='text-start'>- SEO</li>
                                <li id='price-card-2-li' className='text-start'>- Website development</li>
                                <li id='price-card-2-li' className='text-start'>- Website hosting</li>
                                <li id='price-card-2-li' className='text-start'>- Content creation</li>
                                <li id='price-card-2-li' className='text-start'>- Contact management</li>
                                <li id='price-card-2-li' className='text-start'>- Business analytics</li>
                            </ul>
                            <Link to="/contact" id='price-card-3-btn' type="button" className="w-100 btn btn-lg btn-primary">Contact</Link>
                        </div>
                        </div>
                    </div>
                </div>
                <h2 class="display-6 text-center mb-4 pt-5 px-5 fw-bold" id='price-compare-heading'>Compare plans</h2>
                <div class="table-responsive py-5 px-2">
                    <table class="table text-start">
                        <thead className='text-end'>
                        <tr>
                            <th id='price-compare-column-heading' style={{width: "34%"}}>Basic</th>
                            <th id='price-compare-column-heading' style={{width: "22%"}}>Standard</th>
                            <th id='price-compare-column-heading' style={{width: "22%"}}>Premium</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Facebook Ads</th>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">SEO</th>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        </tbody>

                        <tbody>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Website development</th>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Website hosting</th>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Content creation</th>
                            <td><img id="price-compare-img" src="./images/png/incorrect-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Content management</th>
                            <td><img id="price-compare-img" src="./images/png/incorrect-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        <tr>
                            <th id='price-compare-row-heading' scope="row" class="text-start">Business analytics</th>
                            <td><img id="price-compare-img" src="./images/png/incorrect-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/incorrect-icon.png" alt=" "/></td>
                            <td><img id="price-compare-img" src="./images/png/tick-mark-icon.png" alt=" "/></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}

export default Price;

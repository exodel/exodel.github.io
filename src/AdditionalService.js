import React from 'react';
import ReactGA from 'react-ga';

function AdditionalService() {

    ReactGA.event({
        category: 'Link',
        action: 'click',
        label: 'submit button clicked'
      });
      
      ReactGA.set({ userRole: 'admin' });

  return (
    <div>
      
    </div>
  )
}

export default AdditionalService;

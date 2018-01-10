import React from 'react';
import Helmet from 'react-helmet';

const pageOne = () => {
  return(
    <div>
      <Helmet>
        <title>Page 1</title>
      </Helmet>
      <h1>Page 1</h1>
    </div>
  );
};

const pageTwo = () => {
  return(
    <div>
      <Helmet>
        <title>Page 2</title>
      </Helmet>
      <h1>Page 2</h1>
    </div>
  );
};


const pageThree = () => {
  return(
    <div>
      <Helmet>
        <title>Page 3</title>
      </Helmet>
      <h1>Page 3</h1>
    </div>
  );
};


export { pageOne, pageTwo, pageThree};

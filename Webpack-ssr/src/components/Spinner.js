import React from 'react';

import '../css/Spinner.css';

export default () => {
  return (
    <div className="Spinner">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Spinner = () => (
  <div className="container" style={{ marginTop: '50px' }}>
    <CircularProgress
      size={80}
      thickness={5}
    />
  </div>
);

export default Spinner;

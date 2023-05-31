import React from 'react';
import { Link } from 'react-router-dom';

const Snack1 = () => {
  return (
    <div>
      <h2>Snack 1</h2>
      <p>This is the first snack.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack1;

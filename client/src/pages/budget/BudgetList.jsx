import React from 'react';

import Expenses from './Expenses';
import Income from './Income';

const BudgetList = () => {
  return (
    <div>
      <Income />
      <Expenses />
    </div>
  );
};

export default BudgetList;

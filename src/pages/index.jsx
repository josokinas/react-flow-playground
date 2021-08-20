import React, { useState } from 'react';

import Test1 from './test_1';
import Test2 from './test_2';
import Test3 from './test_3';

const tests = {
  test1: Test1,
  test2: Test2,
  test3: Test3,
};

function Index() {
  const [test, setTest] = useState(null);

  const getTest = () => {
    const TestComponent = tests[test];

    if (TestComponent) return <TestComponent />;

    return null;
  };

  return (
    <div className="container">
      <button onClick={() => setTest('test1')}>Test 1</button>
      <button onClick={() => setTest('test2')}>Test 2</button>
      <button onClick={() => setTest('test3')}>Test 3</button>
      {getTest()}
    </div>
  );
}

export default Index;

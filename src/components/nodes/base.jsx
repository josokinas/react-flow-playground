import React, { memo } from 'react';

const Base = memo(({ title, children }) => {
  return (
    <div className="node-base--container">
      <div className="node-base--header">{title}</div>
      <div className="node-base--body">{children}</div>
    </div>
  );
});

export default Base;

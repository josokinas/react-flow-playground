import React, { memo } from 'react';

const Base = memo(({ title, children }) => {
  return (
    <div className="node-base--container">
      {title && <div className="node-base--header">{title}</div>}
      <div className={`node-base--body ${!title && 'without-title'}`}>
        {children}
      </div>
    </div>
  );
});

export default Base;

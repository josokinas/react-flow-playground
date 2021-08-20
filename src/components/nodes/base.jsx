import React, { memo } from 'react';

const Base = memo(({ title, selected, small, designV, children }) => {
  return (
    <div
      className={`node-base--container ${selected ? `selected` : ''} ${
        small ? `small` : ''
      } ${designV ? `v${designV}` : ''}`}
    >
      {title && <div className="node-base--header">{title}</div>}
      <div
        className={`node-base--body ${!title ? 'without-title' : ''} ${
          designV ? `v${designV}` : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
});

export default Base;

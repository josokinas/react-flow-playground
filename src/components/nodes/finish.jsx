import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const Finish = memo(({ data }) => {
  return (
    <Base title={data.title} selected={data.selected} designV={data.designV}>
      <div className="node-handle--container node-handle--container--left">
        Input
        <Handle
          id="in"
          type="target"
          position="left"
          isConnectable
          style={{ backgroundColor: data.style?.['in'] }}
        />
      </div>
    </Base>
  );
});

export default Finish;

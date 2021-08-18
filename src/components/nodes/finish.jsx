import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const Finish = memo(({ id, data }) => {
  return (
    <Base title={data.title}>
      <div className="node-handle--container node-handle--container--left">
        Input 1
        <Handle
          id={`${id}-in`}
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
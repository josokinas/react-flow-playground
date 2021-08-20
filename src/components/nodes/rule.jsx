import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const Rule = memo(({ data }) => {
  return (
    <Base small>
      <div className="node-rule--body">
        <div className="node-handle--container node-handle--container--left">
          <Handle
            id="in"
            type="target"
            position="left"
            isConnectable
            style={{ backgroundColor: data.style?.['in'] }}
          />
        </div>
        <div>{data.content}</div>
        <div className="node-handle--container node-handle--container--right">
          <Handle id="out" type="source" position="right" isConnectable />
        </div>
      </div>
    </Base>
  );
});

export default Rule;

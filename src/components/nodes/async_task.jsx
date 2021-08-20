import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const AsyncTask = memo(({ data, designV }) => {
  return (
    <Base title={data.title} selected={data.selected} designV={designV}>
      <div className="node-async-task--body">
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
        <div className="node-handle--container node-handle--container--right">
          Output
          <Handle id="out" type="source" position="right" isConnectable />
        </div>
      </div>
    </Base>
  );
});

export default AsyncTask;

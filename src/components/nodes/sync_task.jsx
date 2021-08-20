import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const SyncTask = memo(({ data }) => {
  return (
    <Base title={data.title} selected={data.selected} designV={data.designV}>
      <div className="node-sync-task--body">
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

export default SyncTask;

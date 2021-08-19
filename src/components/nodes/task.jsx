import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

export const style = {
  out_1: 'rgba(222, 180, 31)',
  out_2: 'rgba(15, 34, 212)',
};

const Task = memo(({ data }) => {
  return (
    <Base title={data.title}>
      <div className="node-task--body">
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
        <div>
          <div className="node-handle--container node-handle--container--right">
            Output 1
            <Handle
              id="out_1"
              type="source"
              position="right"
              isConnectable
              style={{ backgroundColor: style.out_1 }}
            />
          </div>
          <div className="node-handle--container node-handle--container--right">
            Output 2
            <Handle
              id="out_2"
              type="source"
              position="right"
              isConnectable
              style={{ backgroundColor: style.out_2 }}
            />
          </div>
        </div>
      </div>
    </Base>
  );
});

export default Task;

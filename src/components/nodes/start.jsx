import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

export const style = {
  out: 'rgba(25, 212, 75)',
};

const Start = memo(({ id, data }) => {
  return (
    <Base title={data.title}>
      <div className="node-handle--container node-handle--container--right">
        Output 1
        <Handle
          id={`${id}-out`}
          type="source"
          position="right"
          isConnectable
          style={{ backgroundColor: style.out }}
        />
      </div>
    </Base>
  );
});

export default Start;

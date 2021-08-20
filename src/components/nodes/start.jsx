import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

export const style = {
  out: 'rgba(25, 212, 75)',
};

const Start = memo(({ data }) => {
  return (
    <Base title={data.title} selected={data.selected} designV={data.designV}>
      <div className="node-handle--container node-handle--container--right">
        Output
        <Handle
          id="out"
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

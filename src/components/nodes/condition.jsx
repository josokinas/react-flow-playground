import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import Base from './base';

const parseOperands = (operation, operands) =>
  operands
    .map(({ operation, operands, value }) => {
      if (operands) return `(${parseOperands(operation, operands)})`;

      return value;
    })
    .join(` ${operation} `);

const Expression = memo(({ operation, operands }) => {
  return (
    <div className="node-condition-expression--container">
      {parseOperands(operation, operands)}
    </div>
  );
});

const Condition = memo(({ id, data }) => {
  return (
    <Base>
      <div className="node-condition--body">
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
          {data.rules &&
            data.rules.map((rule) => (
              <div
                key={`${id}=rule.id`}
                className="node-handle--container node-handle--container--right"
              >
                <Expression
                  operation={rule.expression.operation}
                  operands={rule.expression.operands}
                />
                <Handle
                  id={rule.id}
                  type="source"
                  position="right"
                  isConnectable
                />
              </div>
            ))}
          <div className="node-handle--container node-handle--container--right">
            No
            <Handle id="no" type="source" position="right" isConnectable />
          </div>
        </div>
      </div>
    </Base>
  );
});

export default Condition;

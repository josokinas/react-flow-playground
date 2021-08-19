import React, { useState } from 'react';
import ReactFlow, { addEdge } from 'react-flow-renderer';

import Start, { style as startStyle } from '../components/nodes/start';
import Task, { style as taskStyle } from '../components/nodes/task';
import Finish from '../components/nodes/finish';

const nodeTypes = {
  start: Start,
  task: Task,
  finish: Finish,
};

const nodeStyles = {
  start: startStyle,
  task: taskStyle,
};

const initialElements = [
  {
    id: '1',
    type: 'start',
    data: {
      title: 'Start',
    },
    position: { x: 50, y: 250 },
  },
  {
    id: '2',
    type: 'task',
    data: {
      title: 'Task 1',
    },
    position: { x: 450, y: 250 },
  },
  {
    id: '3',
    type: 'finish',
    data: {
      title: 'Finish 1',
    },
    position: { x: 825, y: 150 },
  },
  {
    id: '4',
    type: 'finish',
    data: {
      title: 'Finish 2',
    },
    position: { x: 825, y: 300 },
  },
];

const getElementType = (id) =>
  initialElements.find((element) => element.id === id)?.type;

function Test1() {
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params) => {
    const elementType = getElementType(params.source);
    const style = nodeStyles[elementType];
    const color = style?.[params.sourceHandle];

    setElements((elements) =>
      addEdge(
        {
          ...params,
          // stroke edge style
          style: { stroke: color },
        },
        elements.map((element) =>
          element.id === params.target
            ? // also style "in" handler of a target
              { ...element, data: { ...element.data, style: { in: color } } }
            : element
        )
      )
    );
  };

  return (
    <div className="wrapper">
      <ReactFlow
        {...{ nodeTypes, elements, onConnect }}
        className="playground"
      />
    </div>
  );
}

export default Test1;

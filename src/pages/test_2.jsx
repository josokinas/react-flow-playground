import React, { useState } from 'react';
import ReactFlow from 'react-flow-renderer';

import Start from '../components/nodes/start';
import InteractiveTask from '../components/nodes/interactive_task';
import SyncTask from '../components/nodes/sync_task';
import AsyncTask from '../components/nodes/async_task';
import Condition from '../components/nodes/condition';
import Finish from '../components/nodes/finish';

import tasksData from '../data/tasks.json';
import workflowData from '../data/workflow_1.json';

const nodeTypes = {
  start: Start,
  interactive_task: InteractiveTask,
  sync_task: SyncTask,
  async_task: AsyncTask,
  condition: Condition,
  finish: Finish,
};

const getElementNodeType = (type) => {
  switch (type) {
    case 'INTERACTIVE':
      return 'interactive_task';
    case 'SYNC':
      return 'sync_task';
    case 'ASYNC':
      return 'async_task';
  }
};

const getElementTitle = (task) => {
  switch (task) {
    case 'upload_document':
      return 'Upload Document';
    case 'upload_selfie':
      return 'Upload Selfie';
    case 'collect_address':
      return 'Collect Address';
    case 'ocr_autofill':
      return 'OCR Autofill';
    case 'aamva':
      return 'AAMVA';
    case 'facial_similarity_report':
      return 'Facial Similarity Report';
    case 'document_report':
      return 'Document Report';
    case 'watchlist_report':
      return 'Watchlist Report';
    case 'pass_applicant':
      return 'Pass';
    case 'consider_applicant':
      return 'Fail';
    default:
      return 'N/A';
  }
};

const getElementObj = ({ id, type, task, rules, position }) => {
  switch (type) {
    case 'TASK': {
      const taskDefinition = tasksData.tasks.find(({ name }) => name === task);
      return {
        id,
        type: getElementNodeType(taskDefinition.type),
        data: {
          title: taskDefinition.settings?.title || getElementTitle(task),
        },
        position,
      };
    }
    case 'CONDITION':
      return {
        id,
        type: 'condition',
        data: { rules },
        position,
      };
    case 'FINAL':
      return {
        id,
        type: 'finish',
        data: {
          title: getElementTitle(task),
        },
        position,
      };
  }
};

const initialElements = [];

workflowData.workflow.nodes.forEach(
  ({
    id,
    type,
    task,
    rules,
    defaultNode,
    nextNode,
    visualSettings: { position },
  }) => {
    if (!initialElements.length) {
      initialElements.push({
        id: 0,
        type: 'start',
        data: {
          title: 'Start',
        },
        position: { x: 25, y: 25 },
      });
      initialElements.push({
        id: `0-${id}`,
        source: 0,
        target: id,
      });
    }

    initialElements.push(getElementObj({ id, type, task, rules, position }));

    if (defaultNode)
      initialElements.push({
        id: defaultNode.visualSettings.id,
        source: id,
        sourceHandle: 'no',
        target: defaultNode.id,
      });

    if (nextNode)
      nextNode.forEach((nextNode) => {
        initialElements.push({
          id: nextNode.visualSettings.id,
          source: id,
          target: nextNode.id,
        });
      });

    if (rules)
      rules.forEach((rule) => {
        rule.nextNode.forEach((nextNode) => {
          initialElements.push({
            id: nextNode.visualSettings.id,
            source: id,
            sourceHandle: rule.id,
            target: nextNode.id,
          });
        });
      });
  }
);

function Test2() {
  const [elements] = useState(initialElements);

  return (
    <div className="wrapper">
      <h2>Workflow diagram</h2>
      <ReactFlow
        {...{ nodeTypes, elements }}
        className="playground"
        style={{ height: '550px' }}
      />
      <h2>Current React Flow object of elements:</h2>
      <pre>{JSON.stringify(elements, null, 2)}</pre>
      <hr />
      <h2>Raw workflow JSON data:</h2>
      <pre>{JSON.stringify(workflowData, null, 2)}</pre>
    </div>
  );
}

export default Test2;

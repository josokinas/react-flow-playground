import React, { useEffect, useState } from 'react';
import ReactFlow from 'react-flow-renderer';

import Start from '../components/nodes/start';
import InteractiveTask from '../components/nodes/interactive_task';
import SyncTask from '../components/nodes/sync_task';
import AsyncTask from '../components/nodes/async_task';
import Condition, { Expression } from '../components/nodes/condition';
import Rule from '../components/nodes/rule';
import Finish from '../components/nodes/finish';

import tasksData from '../data/tasks.json';
import workflowData from '../data/workflow_2.json';

const nodeTypes = {
  start: Start,
  interactive_task: InteractiveTask,
  sync_task: SyncTask,
  async_task: AsyncTask,
  condition: Condition,
  rule: Rule,
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
        id: `${id}`,
        type: getElementNodeType(taskDefinition.type),
        data: {
          title: taskDefinition.settings?.title || getElementTitle(task),
          designV: 2,
        },
        position,
      };
    }
    case 'CONDITION':
      return {
        id: `${id}`,
        type: 'condition',
        data: { rules, designV: 2, hideOutput: true },
        position,
        test: ' TEST',
      };
    case 'FINAL':
      return {
        id: `${id}`,
        type: 'finish',
        data: {
          title: getElementTitle(task),
          designV: 2,
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
        id: '0',
        type: 'start',
        data: {
          title: 'Start',
          designV: 2,
        },
        position: { x: 25, y: 25 },
      });
      initialElements.push({
        id: `0-${id}`,
        source: '0',
        target: `${id}`,
        type: 'smoothstep',
        arrowHeadType: 'arrow',
      });
    }

    initialElements.push(getElementObj({ id, type, task, rules, position }));

    if (defaultNode) {
      initialElements.push({
        id: `default-${id}`,
        type: 'rule',
        data: {
          content: 'else',
        },
        position: defaultNode.visualSettings.position,
      });

      // from condition node to rule node
      initialElements.push({
        id: `${id}-default-${id}`,
        source: `${id}`,
        sourceHandle: 'no',
        target: `default-${id}`,
        type: 'smoothstep',
        arrowHeadType: 'arrow',
      });
      // from rule node to "default" node
      initialElements.push({
        id: `default-${id}-${defaultNode.id}`,
        source: `default-${id}`,
        sourceHandle: 'no',
        target: `${defaultNode.id}`,
        type: 'smoothstep',
        arrowHeadType: 'arrow',
      });
    }

    if (nextNode)
      nextNode.forEach((nextNode) => {
        initialElements.push({
          id: nextNode.visualSettings.id,
          source: `${id}`,
          target: `${nextNode.id}`,
          type: 'smoothstep',
          arrowHeadType: 'arrow',
        });
      });

    if (rules)
      rules.forEach((rule) => {
        initialElements.push({
          id: `rule-${id}`,
          type: 'rule',
          data: {
            content: (
              <Expression
                operation={rule.expression.operation}
                operands={rule.expression.operands}
              />
            ),
          },
          position: rule.visualSettings.position,
        });

        // from condition node to rule node
        initialElements.push({
          id: `${id}-rule-${id}`,
          source: `${id}`,
          sourceHandle: `${rule.id}`,
          target: `rule-${id}`,
          type: 'smoothstep',
          arrowHeadType: 'arrow',
        });
        // from rule node to each next node
        rule.nextNode.forEach((nextNode) => {
          initialElements.push({
            id: `rule-${id}-${nextNode.id}`,
            source: `rule-${id}`,
            sourceHandle: `${rule.id}`,
            target: `${nextNode.id}`,
            type: 'smoothstep',
            arrowHeadType: 'arrow',
          });
        });
      });
  }
);

function Test3() {
  const [elements, setElements] = useState(initialElements);
  const [selectedElements, setSelectedElements] = useState([]);

  useEffect(() => {
    setElements([...elements]);
    setElements((elements) =>
      elements.map((element) => {
        element.data = {
          ...element.data,
          selected: selectedElements.includes(`${element.id}`),
        };

        return element;
      })
    );
  }, [selectedElements, setElements]);

  const handleSelectionChange = (elements) => {
    if (!elements) return;

    const selectedElements = elements.map((element) => element.id);

    setSelectedElements(selectedElements);
  };

  return (
    <div className="wrapper">
      <ReactFlow
        nodeTypes={nodeTypes}
        elements={elements}
        onSelectionChange={handleSelectionChange}
        className="playground"
      />
    </div>
  );
}

export default Test3;

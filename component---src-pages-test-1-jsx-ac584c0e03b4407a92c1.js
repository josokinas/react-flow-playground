(self.webpackChunk_josokinas_react_flow_playground=self.webpackChunk_josokinas_react_flow_playground||[]).push([[704],{8347:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),i=n(5113),o=n(1512),r=n(2019),l={out_1:"rgba(222, 180, 31)",out_2:"rgba(15, 34, 212)"},s=(0,a.memo)((function(e){var t,n=e.id,o=e.data;return a.createElement(r.Z,{title:o.title},a.createElement("div",{className:"node-task--body"},a.createElement("div",null,a.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input 1",a.createElement(i.HH,{id:n+"-in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=o.style)||void 0===t?void 0:t.in}}))),a.createElement("div",null,a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output 1",a.createElement(i.HH,{id:n+"-out_1",type:"source",position:"right",isConnectable:!0,style:{backgroundColor:l.out_1}})),a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output 2",a.createElement(i.HH,{id:n+"-out_2",type:"source",position:"right",isConnectable:!0,style:{backgroundColor:l.out_2}})))))})),d=n(5198),c={start:o.Z,task:s,finish:d.Z},u={start:o.o,task:l},p=[{id:"1",type:"start",data:{title:"Start"},position:{x:50,y:250}},{id:"2",type:"task",data:{title:"Task 1"},position:{x:450,y:250}},{id:"3",type:"finish",data:{title:"Finish 1"},position:{x:825,y:150}},{id:"4",type:"finish",data:{title:"Finish 2"},position:{x:825,y:300}}];var y=function(){var e=(0,a.useState)(p),t=e[0],n=e[1];return a.createElement("div",{className:"wrapper"},a.createElement(i.ZP,{nodeTypes:c,elements:t,onConnect:function(e){var t,a,o=(t=e.source,null===(a=p.find((function(e){return e.id===t})))||void 0===a?void 0:a.type),r=u[o],l=e.sourceHandle.split("-")[1],s=null==r?void 0:r[l];n((function(t){return(0,i.Z_)(Object.assign({},e,{style:{stroke:s}}),t.map((function(t){return t.id===e.target?Object.assign({},t,{data:Object.assign({},t.data,{style:{in:s}})}):t})))}))},className:"playground"}))}}}]);
//# sourceMappingURL=component---src-pages-test-1-jsx-ac584c0e03b4407a92c1.js.map
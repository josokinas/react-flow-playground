(self.webpackChunk_josokinas_react_flow_playground=self.webpackChunk_josokinas_react_flow_playground||[]).push([[747],{3279:function(e,t,i){"use strict";var n=i(7294),a=i(5113),s=i(2019),o=(0,n.memo)((function(e){var t,i=e.data,o=e.designV;return n.createElement(s.Z,{title:i.title,designV:o},n.createElement("div",{className:"node-async-task--body"},n.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",n.createElement(a.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),n.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",n.createElement(a.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))}));t.Z=o},4336:function(e,t,i){"use strict";var n=i(7294),a=i(5113),s=i(2019),o=function e(t,i){return i.map((function(t){var i=t.operation,n=t.operands,a=t.value;return n?"("+e(i,n)+")":a})).join(" "+t+" ")},r=(0,n.memo)((function(e){var t=e.operation,i=e.operands;return n.createElement("div",{className:"node-condition-expression--container"},o(t,i))})),l=(0,n.memo)((function(e){var t,i=e.id,o=e.data;return n.createElement(s.Z,{designV:o.designV},n.createElement("div",{className:"node-condition--body"},n.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",n.createElement(a.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=o.style)||void 0===t?void 0:t.in}})),n.createElement("div",null,o.rules&&o.rules.map((function(e){return n.createElement("div",{key:i+"=rule.id",className:"node-handle--container node-handle--container--right"},n.createElement(r,{operation:e.expression.operation,operands:e.expression.operands}),n.createElement(a.HH,{id:e.id,type:"source",position:"right",isConnectable:!0}))})),n.createElement("div",{className:"node-handle--container node-handle--container--right"},"No",n.createElement(a.HH,{id:"no",type:"source",position:"right",isConnectable:!0})))))}));t.Z=l},9737:function(e,t,i){"use strict";var n=i(7294),a=i(5113),s=i(2019),o=(0,n.memo)((function(e){var t,i=e.data;return n.createElement(s.Z,{title:i.title,designV:i.designV},n.createElement("div",{className:"node-interactive-task--body"},n.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",n.createElement(a.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),n.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",n.createElement(a.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))}));t.Z=o},9777:function(e,t,i){"use strict";var n=i(7294),a=i(5113),s=i(2019),o=(0,n.memo)((function(e){var t,i=e.data;return n.createElement(s.Z,{title:i.title,designV:i.designV},n.createElement("div",{className:"node-sync-task--body"},n.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",n.createElement(a.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),n.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",n.createElement(a.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))}));t.Z=o},6130:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(7294),a=i(5113),s=i(1512),o=i(9737),r=i(9777),l=i(3279),d=i(4336),u=i(5198),p=i(633),c=JSON.parse('{"workflow":{"nodes":[{"id":1,"type":"TASK","task":"upload_document","nextNode":[{"id":2,"visualSettings":{"id":"1-2"}}],"visualSettings":{"position":{"x":320,"y":25}}},{"id":2,"type":"TASK","task":"ocr_autofill","nextNode":[{"id":3,"visualSettings":{"id":"2-3"}}],"visualSettings":{"position":{"x":610,"y":25}}},{"id":3,"type":"CONDITION","rules":[{"id":"is_driving_license","expression":{"operation":"=","operands":[{"type":"variable","value":"type"},{"type":"string","value":"driving_license"}]},"nextNode":[{"id":4,"visualSettings":{"id":"3-4"}}]}],"defaultNode":{"id":5,"visualSettings":{"id":"3-5"}},"visualSettings":{"position":{"x":900,"y":25}}},{"id":4,"type":"CONDITION","rules":[{"id":"state_ca","expression":{"operation":"OR","operands":[{"operation":"=","operands":[{"type":"variable","value":"state"},{"type":"string","value":"CA"}]},{"operation":"=","operands":[{"type":"variable","value":"state"},{"type":"string","value":"NY"}]}]},"nextNode":[{"id":9,"visualSettings":{"id":"4-9"}}]}],"defaultNode":{"id":6,"visualSettings":{"id":"4-6"}},"visualSettings":{"position":{"x":1210,"y":25}}},{"id":5,"type":"CONDITION","rules":[{"id":"is_passport","expression":{"operation":"=","operands":[{"type":"variable","value":"type"},{"type":"string","value":"passport"}]},"nextNode":[{"id":8,"visualSettings":{"id":"5-8"}}]}],"defaultNode":{"id":9,"visualSettings":{"id":"5-9"}},"visualSettings":{"position":{"x":1210,"y":225}}},{"id":6,"type":"TASK","task":"aamva","nextNode":[{"id":7,"visualSettings":{"id":"6-7"}}],"visualSettings":{"position":{"x":1490,"y":25}}},{"id":7,"type":"CONDITION","rules":[{"id":"dne","expression":{"operation":"=","operands":[{"type":"variable","value":"status"},{"type":"string","value":"DNE"}]},"nextNode":[{"id":9,"visualSettings":{"id":"7-9"}}]}],"defaultNode":{"id":11,"visualSettings":{"id":"7-11"}},"visualSettings":{"position":{"x":1785,"y":25}}},{"id":8,"type":"TASK","task":"collect_address","nextNode":[{"id":9,"visualSettings":{"id":"8-9"}}],"visualSettings":{"position":{"x":1600,"y":350}}},{"id":9,"type":"TASK","task":"upload_selfie","nextNode":[{"id":10,"visualSettings":{"id":"9-10"}},{"id":11,"visualSettings":{"id":"9-11"}},{"id":12,"visualSettings":{"id":"9-12"}}],"visualSettings":{"position":{"x":2100,"y":270}}},{"id":10,"type":"TASK","task":"facial_similarity_report","nextNode":[{"id":13,"visualSettings":{"id":"10-13"}}],"visualSettings":{"position":{"x":2425,"y":90}}},{"id":11,"type":"TASK","task":"document_report","nextNode":[{"id":13,"visualSettings":{"id":"11-13"}}],"visualSettings":{"position":{"x":2425,"y":190}}},{"id":12,"type":"TASK","task":"watchlist_report","nextNode":[{"id":13,"visualSettings":{"id":"12-13"}}],"visualSettings":{"position":{"x":2425,"y":290}}},{"id":13,"type":"CONDITION","rules":[{"id":"state_clear","expression":{"operation":"AND","operands":[{"operation":"=","operands":[{"type":"variable","value":"facial_similarity.state"},{"type":"string","value":"clear"}]},{"operation":"=","operands":[{"type":"variable","value":"document.state"},{"type":"string","value":"clear"}]},{"operation":"=","operands":[{"type":"variable","value":"watchlist.state"},{"type":"string","value":"clear"}]}]},"nextNode":[{"id":14,"visualSettings":{"id":"13-14"}}]}],"defaultNode":{"id":15,"visualSettings":{"id":"13-15"}},"visualSettings":{"position":{"x":2770,"y":210}}},{"id":14,"type":"FINAL","task":"pass_applicant","visualSettings":{"position":{"x":3500,"y":170}}},{"id":15,"type":"FINAL","task":"consider_applicant","visualSettings":{"position":{"x":3500,"y":310}}}]}}'),v={start:s.Z,interactive_task:o.Z,sync_task:r.Z,async_task:l.Z,condition:d.Z,finish:u.Z},y=function(e){switch(e){case"INTERACTIVE":return"interactive_task";case"SYNC":return"sync_task";case"ASYNC":return"async_task"}},m=function(e){switch(e){case"upload_document":return"Upload Document";case"upload_selfie":return"Upload Selfie";case"collect_address":return"Collect Address";case"ocr_autofill":return"OCR Autofill";case"aamva":return"AAMVA";case"facial_similarity_report":return"Facial Similarity Report";case"document_report":return"Document Report";case"watchlist_report":return"Watchlist Report";case"pass_applicant":return"Pass";case"consider_applicant":return"Fail";default:return"N/A"}},g=[];c.workflow.nodes.forEach((function(e){var t=e.id,i=e.type,n=e.task,a=e.rules,s=e.defaultNode,o=e.nextNode,r=e.visualSettings.position;g.length||(g.push({id:0,type:"start",data:{title:"Start"},position:{x:25,y:25}}),g.push({id:"0-"+t,source:0,target:t})),g.push(function(e){var t=e.id,i=e.type,n=e.task,a=e.rules,s=e.position;switch(i){case"TASK":var o,r=p.w.find((function(e){return e.name===n}));return{id:t,type:y(r.type),data:{title:(null===(o=r.settings)||void 0===o?void 0:o.title)||m(n)},position:s};case"CONDITION":return{id:t,type:"condition",data:{rules:a},position:s};case"FINAL":return{id:t,type:"finish",data:{title:m(n)},position:s}}}({id:t,type:i,task:n,rules:a,position:r})),s&&g.push({id:s.visualSettings.id,source:t,sourceHandle:"no",target:s.id}),o&&o.forEach((function(e){g.push({id:e.visualSettings.id,source:t,target:e.id})})),a&&a.forEach((function(e){e.nextNode.forEach((function(i){g.push({id:i.visualSettings.id,source:t,sourceHandle:e.id,target:i.id})}))}))}));var f=function(){var e=(0,n.useState)(g)[0];return n.createElement("div",{className:"wrapper"},n.createElement("h2",null,"Workflow diagram"),n.createElement(a.ZP,{nodeTypes:v,elements:e,className:"playground",style:{height:"550px"}}),n.createElement("h2",null,"Current React Flow object of elements:"),n.createElement("pre",null,JSON.stringify(e,null,2)),n.createElement("hr",null),n.createElement("h2",null,"Raw workflow JSON data:"),n.createElement("pre",null,JSON.stringify(c,null,2)))}},633:function(e){"use strict";e.exports=JSON.parse('{"w":[{"name":"ocr_autofill","type":"ASYNC","output":"https://onfido-api-spec-location/ocr-autofill-api-spec","requires":["upload_document"],"settings":{"title":"OCR/Autofill"}},{"name":"aamva","type":"SYNC","requires":["upload_document"],"output":{"uuid":{"type":"string","format":"uuid"},"status":{"type":"string","oneOf":["E","DNE"]}}},{"name":"upload_document","type":"INTERACTIVE","output":"https://onfido-api-spec-location/upload-document-api-spec","settings":{"timeout":300}},{"name":"upload_selfie","type":"INTERACTIVE","output":"https://onfido-api-spec-location/upload-photo-api-spec"},{"name":"collect_address","type":"INTERACTIVE","output":"https://onfido-api-spec-location/post-address-api-spec"},{"name":"facial_similarity_report","type":"ASYNC","requires":["upload_selfie"],"output":"https://onfido-api-spec-location/facial-similarity-api-spec"},{"name":"document_report","type":"ASYNC","requires":["upload_document"],"output":"https://onfido-api-spec-location/document-report-api-spec"},{"name":"watchlist_report","type":"ASYNC","output":"https://onfido-api-spec-location/document-report-api-spec","settings":{"timeout":86400,"retries":1}}]}')}}]);
//# sourceMappingURL=component---src-pages-test-2-jsx-9fc7e330ce6b7f9e8656.js.map
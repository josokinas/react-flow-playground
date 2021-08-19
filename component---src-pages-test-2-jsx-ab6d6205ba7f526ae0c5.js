(self.webpackChunk_josokinas_react_flow_playground=self.webpackChunk_josokinas_react_flow_playground||[]).push([[747],{3248:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var a=i(7294),n=i(5113),s=i(1512),o=i(2019),l=(0,a.memo)((function(e){var t,i=e.data;return a.createElement(o.Z,{title:i.title},a.createElement("div",{className:"node-interactive-task--body"},a.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",a.createElement(n.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",a.createElement(n.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))})),r=(0,a.memo)((function(e){var t,i=e.data;return a.createElement(o.Z,{title:i.title},a.createElement("div",{className:"node-sync-task--body"},a.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",a.createElement(n.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",a.createElement(n.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))})),d=(0,a.memo)((function(e){var t,i=e.data;return a.createElement(o.Z,{title:i.title},a.createElement("div",{className:"node-async-task--body"},a.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",a.createElement(n.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Output",a.createElement(n.HH,{id:"out",type:"source",position:"right",isConnectable:!0}))))})),p=(0,a.memo)((function(e){var t,i=e.data;return a.createElement(o.Z,null,a.createElement("div",{className:"node-condition--body"},a.createElement("div",{className:"node-handle--container node-handle--container--left"},"Input",a.createElement(n.HH,{id:"in",type:"target",position:"left",isConnectable:!0,style:{backgroundColor:null===(t=i.style)||void 0===t?void 0:t.in}})),a.createElement("div",null,a.createElement("div",{className:"node-handle--container node-handle--container--right"},"Yes",a.createElement(n.HH,{id:"yes",type:"source",position:"right",isConnectable:!0})),a.createElement("div",{className:"node-handle--container node-handle--container--right"},"No",a.createElement(n.HH,{id:"no",type:"source",position:"right",isConnectable:!0})))))})),u=i(5198),c=JSON.parse('{"w":[{"name":"ocr_autofill","type":"ASYNC","output":"https://onfido-api-spec-location/ocr-autofill-api-spec","requires":["upload_document"],"settings":{"title":"OCR/Autofill"}},{"name":"aamva","type":"SYNC","requires":["upload_document"],"output":{"uuid":{"type":"string","format":"uuid"},"status":{"type":"string","oneOf":["E","DNE"]}}},{"name":"upload_document","type":"INTERACTIVE","output":"https://onfido-api-spec-location/upload-document-api-spec","settings":{"timeout":300}},{"name":"upload_selfie","type":"INTERACTIVE","output":"https://onfido-api-spec-location/upload-photo-api-spec"},{"name":"collect_address","type":"INTERACTIVE","output":"https://onfido-api-spec-location/post-address-api-spec"},{"name":"facial_similarity_report","type":"ASYNC","requires":["upload_selfie"],"output":"https://onfido-api-spec-location/facial-similarity-api-spec"},{"name":"document_report","type":"ASYNC","requires":["upload_document"],"output":"https://onfido-api-spec-location/document-report-api-spec"},{"name":"watchlist_report","type":"ASYNC","output":"https://onfido-api-spec-location/document-report-api-spec","settings":{"timeout":86400,"retries":1}}]}'),y=JSON.parse('{"L":{"t":[{"id":1,"type":"TASK","task":"upload_document","nextNode":[{"id":2,"visualSettings":{"id":"1-2"}}],"visualSettings":{"position":{"x":320,"y":25}}},{"id":2,"type":"TASK","task":"ocr_autofill","nextNode":[{"id":3,"visualSettings":{"id":"2-3"}}],"visualSettings":{"position":{"x":610,"y":25}}},{"id":3,"type":"CONDITION","rules":[{"id":"is_driving_license","operation":{"op":"=","operands":[{"type":"variable","value":"type"},{"type":"string","value":"driving_license"}]},"nextNode":[{"id":4,"visualSettings":{"id":"3-4"}}]}],"defaultNode":{"id":5,"visualSettings":{"id":"3-5"}},"visualSettings":{"position":{"x":900,"y":25}}},{"id":4,"type":"CONDITION","rules":[{"id":"state_ca","operation":{"op":"OR","operands":[{"op":"=","operands":[{"type":"variable","value":"state"},{"type":"string","value":"CA"}]},{"op":"=","operands":[{"type":"variable","value":"state"},{"type":"string","value":"NY"}]}]},"nextNode":[{"id":9,"visualSettings":{"id":"4-9"}}]}],"defaultNode":{"id":6,"visualSettings":{"id":"4-6"}},"visualSettings":{"position":{"x":1190,"y":25}}},{"id":5,"type":"CONDITION","rules":[{"id":"is_passport","operation":{"op":"=","operands":[{"type":"variable","value":"type"},{"type":"string","value":"passport"}]},"nextNode":[{"id":8,"visualSettings":{"id":"5-8"}}]}],"defaultNode":{"id":9,"visualSettings":{"id":"5-9"}},"visualSettings":{"position":{"x":1190,"y":225}}},{"id":6,"type":"TASK","task":"aamva","nextNode":[{"id":7,"visualSettings":{"id":"6-7"}}],"visualSettings":{"position":{"x":1490,"y":25}}},{"id":7,"type":"CONDITION","rules":[{"id":"dne","operation":{"op":"=","operands":[{"type":"variable","value":"status"},{"type":"string","value":"DNE"}]},"nextNode":[{"id":9,"visualSettings":{"id":"7-9"}}]}],"defaultNode":{"id":11,"visualSettings":{"id":"7-9"}},"visualSettings":{"position":{"x":1785,"y":25}}},{"id":8,"type":"TASK","task":"collect_address","nextNode":[{"id":9,"visualSettings":{"id":"8-9"}}],"visualSettings":{"position":{"x":1600,"y":350}}},{"id":9,"type":"TASK","task":"upload_selfie","nextNode":[{"id":10,"visualSettings":{"id":"9-10"}},{"id":11,"visualSettings":{"id":"9-11"}},{"id":12,"visualSettings":{"id":"9-12"}}],"visualSettings":{"position":{"x":1900,"y":270}}},{"id":10,"type":"TASK","task":"facial_similarity_report","nextNode":[{"id":13,"visualSettings":{"id":"10-13"}}],"visualSettings":{"position":{"x":2225,"y":190}}},{"id":11,"type":"TASK","task":"document_report","nextNode":[{"id":13,"visualSettings":{"id":"11-13"}}],"visualSettings":{"position":{"x":2225,"y":290}}},{"id":12,"type":"TASK","task":"watchlist_report","nextNode":[{"id":13,"visualSettings":{"id":"12-13"}}],"visualSettings":{"position":{"x":2225,"y":390}}},{"id":13,"type":"CONDITION","rules":[{"id":"state_clear","operation":{"op":"AND","operands":[{"op":"=","operands":[{"type":"variable","value":"facial_similarity.state"},{"type":"string","value":"clear"}]},{"op":"=","operands":[{"type":"variable","value":"document.state"},{"type":"string","value":"clear"}]},{"op":"=","operands":[{"type":"variable","value":"watchlist.state"},{"type":"string","value":"clear"}]}]},"nextNode":[{"id":14,"visualSettings":{"id":"13-14"}}]}],"defaultNode":{"id":15,"visualSettings":{"id":"13-15"}},"visualSettings":{"position":{"x":2570,"y":310}}},{"id":14,"type":"FINAL","task":"pass_applicant","visualSettings":{"position":{"x":2930,"y":210}}},{"id":15,"type":"FINAL","task":"consider_applicant","visualSettings":{"position":{"x":2930,"y":390}}}]}}'),v={start:s.Z,interactive_task:l,sync_task:r,async_task:d,condition:p,finish:u.Z},m=function(e){switch(e){case"INTERACTIVE":return"interactive_task";case"SYNC":return"sync_task";case"ASYNC":return"async_task"}},g=function(e){switch(e){case"upload_document":return"Upload Document";case"upload_selfie":return"Upload Selfie";case"collect_address":return"Collect Address";case"ocr_autofill":return"OCR Autofill";case"aamva":return"AAMVA";case"facial_similarity_report":return"Facial Similarity Report";case"document_report":return"Document Report";case"watchlist_report":return"Watchlist Report";case"pass_applicant":return"Pass";case"consider_applicant":return"Fail";default:return"N/A"}},N=[];y.L.t.forEach((function(e){var t=e.id,i=e.type,a=e.task,n=e.defaultNode,s=e.nextNode,o=e.visualSettings.position;N.length||(N.push({id:0,type:"start",data:{title:"Start"},position:{x:25,y:25}}),N.push({id:"0-"+t,source:0,target:t})),N.push(function(e){var t=e.id,i=e.type,a=e.task,n=e.position;switch(i){case"TASK":var s,o=c.w.find((function(e){return e.name===a}));return{id:t,type:m(o.type),data:{title:(null===(s=o.settings)||void 0===s?void 0:s.title)||g(a)},position:n};case"CONDITION":return{id:t,type:"condition",data:{},position:n};case"FINAL":return{id:t,type:"finish",data:{title:g(a)},position:n}}}({id:t,type:i,task:a,position:o})),n&&N.push({id:n.visualSettings.id,source:t,sourceHandle:"no",target:n.id}),s&&s.forEach((function(e){N.push({id:e.visualSettings.id,source:t,target:e.id})}))}));var f=function(){var e=(0,a.useState)(N)[0];return a.createElement("div",{className:"wrapper"},a.createElement("h2",null,"Workflow diagram"),a.createElement(n.ZP,{nodeTypes:v,elements:e,className:"playground",style:{height:"550px"}}),a.createElement("h2",null,"Current React Flow object of elements:"),a.createElement("pre",null,JSON.stringify(e,null,2)))}}}]);
//# sourceMappingURL=component---src-pages-test-2-jsx-ab6d6205ba7f526ae0c5.js.map
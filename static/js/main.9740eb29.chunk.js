(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(10),l=n.n(u),c=(n(17),n(1)),i=n(2),o=n(4),m=n(5),s=n(7),f=n(6),p=n(3),v=n(8),h=0,d=1,y=2,g=3,b=4,E=5,w=6,j=7,x=[{name:"+",binding:{type:y,value:function(e){return e.forEach(function(e){return V(e,g)}),e.reduce(function(e,t){return{value:e.value+t.value,type:g}})}}},{name:"-",binding:{type:y,value:function(e){return e.forEach(function(e){return V(e,g)}),e.reduce(function(e,t){return{value:e.value-t.value,type:g}})}}},{name:"*",binding:{type:y,value:function(e){return e.forEach(function(e){return V(e,g)}),e.reduce(function(e,t){return{value:e.value*t.value,type:g}})}}},{name:"/",binding:{type:y,value:function(e){if(1===e.length){var t=e[0];return V(t,g),{value:1/t.value,type:g}}if(2===e.length){var n=e[0],a=e[1];return V(n,g),V(a,g),{value:n.value/a.value,type:g}}return e.forEach(function(e){return V(e,g)}),{value:!1,type:b}}}},{name:"car",binding:{type:y,value:F}},{name:"first",binding:{type:y,value:F}},{name:"cdr",binding:{type:y,value:S}},{name:"rest",binding:{type:y,value:S}},{name:"cons",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return V(n,w),{value:{a:t,d:n},type:w}}}},{name:"list",binding:{type:y,value:function(e){return e.reverse().reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w})}}},{name:"not",binding:{type:y,value:function(e){if(1!==e.length)throw new Error("arity mismatch");return{value:!1===e[0].value,type:b}}}},{name:"and",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?t:{value:!1,type:b}},{value:!0,type:b})}}},{name:"or",binding:{type:y,value:function(e){return e.reduce(function(e,t){return!1!==e.value?e:t},{value:!0,type:b})}}},{name:"if",binding:{type:y,value:function(e){if(3!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1],a=e[2];return V(t,b),t.value?n:a}}},{name:"eqv?",binding:{type:y,value:function(e){if(2!==e.length)throw new Error("arity mismatch");var t=e[0],n=e[1];return{value:t.value===n.value,type:b}}}},{name:"null?",binding:{type:y,value:_}},{name:"empty?",binding:{type:y,value:_}},{name:"=",binding:{type:y,value:function(e){e.forEach(function(e){return V(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value===t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">",binding:{type:y,value:function(e){e.forEach(function(e){return V(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:">=",binding:{type:y,value:function(e){e.forEach(function(e){return V(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value>=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<",binding:{type:y,value:function(e){e.forEach(function(e){return V(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"<=",binding:{type:y,value:function(e){e.forEach(function(e){return V(e,g)});var t=e.reduce(function(e,t){return!1===e.value?{value:!1,type:b}:e.value<=t.value?e:{value:!1,type:b}});return!1===t.value?t:{value:!0,type:b}}}},{name:"true",binding:{type:b,value:!0}},{name:"false",binding:{type:b,value:!1}},{name:"null",binding:{type:w,value:null}},{name:"empty",binding:{type:w,value:null}}];function C(e){var t=/^[a-zA-Z+\-*\/?=><]+/,n=/^-?\d+/,a=/^#[tf]/,r=/^"[^"]*"/;if(n.test(e)){var u=e.match(n)[0],l=e.slice(u.length).trim();return{prog:{value:+u,type:g},rest:l}}if(t.test(e)){var c=e.match(t)[0],o=e.slice(c.length).trim();return{prog:{value:c,type:h},rest:o}}if(a.test(e)){var m=e.match(a)[0],s=e.slice(2).trim();return{prog:{value:"#t"===m,type:b},rest:s}}if(r.test(e)){var f=e.match(r);return{prog:{value:f[0],type:E},rest:e.slice(f[0].length).trim()}}if(/^\(/.test(e)){var p=C(e=e.slice(1).trim()),v=p.prog;e=p.rest;for(var y=[];")"!==e[0];){var x=C(e);y=[].concat(Object(i.a)(y),[x.prog]),e=x.rest}return{prog:{value:{funct:v,args:y},type:d},rest:e.slice(1).trim()}}if(/^'/.test(e))return function e(t){var n=/^'?[a-zA-Z+\-*\/?=><#"]+/;var a=/^'?\s*\(/;var r=/^'?-?\d+/;var u=/^#[tf]/;var l=/^"[^"]*"/;if(a.test(t)){t=t.slice(t.match(a)[0].length).trim();for(var c=[];")"!==t[0];){var o=e(t);c=[o.prog].concat(Object(i.a)(c)),t=o.rest}var m=t.slice(1).trim(),s=c.reduce(function(e,t){return{value:{a:t,d:e},type:w}},{value:null,type:w});return{prog:s,rest:m}}if(r.test(t)){var f=t.match(r),p=f[0],v=t.slice(p.length).trim(),h={value:+p,type:g};return{prog:h,rest:v}}if(u.test(t)){var d=t.match(u),y=d[0],x=t.slice(2).trim(),C={value:"#t"===y,type:b};return{prog:C,rest:x}}if(l.test(t)){var O=t.match(l),k={value:O[0],type:E},N=t.slice(O[0].length).trim();return{prog:k,rest:N}}if(n.test(t)){var V=t.match(n),F=V[0],S={value:F="'"===F[0]?F:"'"+F,type:j},_=t.slice(V[0].length).trim();return{prog:S,rest:_}}throw new SyntaxError('Invalid Syntax: "'+t+'"')}(e);throw new SyntaxError('Invalid Syntax: "'+e+'"')}function O(e,t){switch(e.type){case g:case b:case E:case w:case j:return e;case h:return function(e){var n=t.reduce(function(t,n){return void 0!==t?t:n.name===e?n.binding:void 0},void 0);if(void 0===n)throw new ReferenceError(e+" isn't defined");return n}(e.value);case y:return e;case d:var n=O(e.value.funct,t),a=e.value.args.map(function(e){return O(e,t)});return V(n,y),n.value(a);default:throw new TypeError("Unknown Type "+e.value)}}function k(e){switch(e.type){case g:return e.value;case b:return"#"+(e.value?"true":"false");case E:return e.value;case w:return null===e.value?"'()":"(cons ".concat(k(e.value.a)," ").concat(k(e.value.d),")");case j:case h:return e.value;case y:return"function";case d:return"(".concat(k(e.value.funct)," ").concat(e.value.args.map(k).join(" "),")");default:return"error or something"}}function N(e){var t=C(e);switch(t.rest){case"":break;default:throw new SyntaxError("Parsing Error")}return t.prog}function V(e,t){var n="";switch(t){case h:n="variable";break;case d:n="application";break;case y:n="function";break;case g:n="number";break;case b:n="boolean";break;case E:n="string";break;case w:n="list";break;case j:n="symbol";break;default:n="???"}if(e.type!==t)throw new TypeError(k(e)+" ain't a "+n)}function F(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return V(t,w),t.value.a}function S(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return V(t,w),t.value.d}function _(e){if(1!==e.length)throw new Error("arity mismatch");var t=e[0];return{value:null===t.value&&t.type===w,type:b}}var R={gray:"gray"},A={pink:"pink"},z={yellow:"yellow"};function I(e){return 0!==e.length&&e.every(function(e){return e.type===b||e===R})}function T(e){return I(e.outputs)||void 0!==e.thenChildren}function M(e){var t=P(e.name),n=e.params.map(function(e){return P(e.name)}).join(" "),a=e.formulas.map(Z).join("\n"),r=e.examples.map(function(e){return"(check-expect (".concat(t," ").concat(e.inputs.map(function(e){return P(e.prog)}).join(" "),") ").concat(P(e.want),")")}).join("\n");return"(define (".concat(t," ").concat(n,")\n").concat(a,")\n\n").concat(r)}function Z(e){return T(e)?"(cond [".concat(P(e.prog)," ").concat(e.thenChildren.map(Z).join(" "),"])"):P(e.prog)}function P(e){return e===z?"...":"string"===typeof e?e:k(e)}var W=function(e){return e.map(M).join("\n\n\n")},Y=(n(18),{yo:"don't actually change anything"}),$="./images/",B=0;function J(){return B++}function q(e){return void 0===e?B:B+e}function U(e,t){if(e.type!==t.type)return!1;if(e.type===w)return null===e.value||null===t.value?e.value===t.value:U(e.value.a,t.value.a)&&U(e.value.d,t.value.d);if(e.type===d){if(e.value.args.length!==t.value.args.length)return!1;var n=U(e.value.funct,t.value.funct),a=e.value.args.map(function(e,n){return U(e,t.value.args[n])}).every(function(e){return e});return n&&a}return e.value===t.value}function D(e){return r.a.createElement("div",{className:"cross_button"},r.a.createElement("input",{type:"image",style:e.style,src:"./images/smallCross.png",alt:"Remove",title:e.title,onClick:e.onClick}))}var G=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(f.a)(t).call(this,e))).state={text:""},n.textChange=n.textChange.bind(Object(p.a)(n)),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"textChange",value:function(e){var t=e.target.value;this.setState(function(e){return{text:t}}),this.props.isValid(t)?this.props.onValid(t):""!==t||this.props.dummy||this.props.onEmpty()}},{key:"render",value:function(){var e,t;return e=this.props.dummy?"dummy_input":this.props.isValid(this.state.text)?"valid_input":""===this.state.text?"empty_input":"invalid_input",t=0===this.state.text.length?this.props.placeholder.length:Math.max(this.state.text.length+2,4),r.a.createElement("input",{className:e,size:t,placeholder:this.props.placeholder,type:"text",value:this.state.text,onChange:this.textChange})}}]),t}(r.a.Component);function H(e){function t(t,n){var a;a=-1!==e.tables.indexOf(n)?e.tables.map(function(e){return e===n?t:e}):[].concat(Object(i.a)(e.tables),[t]),e.programChange(a)}function n(t,n){var a=e.tables.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=n.params.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(x),Object(i.a)(a),Object(i.a)(r));return/^[a-zA-Z+\-*\/?=><]+$/.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}var a=e.tables.map(function(a){return r.a.createElement("div",{key:a.key,className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!1,placeholder:"Table Name",isValid:function(e){return n(e,a)},onValid:function(e){return t(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return t(Object(c.a)({},a,{name:z}),a)}}),r.a.createElement(D,{onClick:function(){return function(t){var n=e.tables.filter(function(e){return e!==t});e.programChange(n)}(a)},title:"Remove this table"})),r.a.createElement(K,{table:a,tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,a)}}))}),u=r.a.createElement("div",{key:q(),className:"table_method"},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!0,placeholder:"Table Name",isValid:function(e){return n(e,{params:[]})},onValid:function(e){return t({name:e,examples:[],formulas:[],params:[],key:J()},{})}})),r.a.createElement(K,{table:{name:z,examples:[],formulas:[],params:[],key:q()},tableNames:e.tables.map(function(e){return e.name}),tableChange:function(e){return t(e,{})}}));return r.a.createElement("div",null,[].concat(Object(i.a)(a),[u]))}function K(e){function t(t){e.tableChange(Object(c.a)({},e.table,{formulas:t}))}return r.a.createElement("table",{className:"html_table"},r.a.createElement(L,{params:e.table.params,examples:e.table.examples,tableNames:e.tableNames,paramsExamplesChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{params:t,examples:n}))},formulas:e.table.formulas,formulasChange:t}),r.a.createElement(ee,{examples:e.table.examples,formulas:e.table.formulas,paramNames:e.table.params.map(function(e){return e.name}),examplesFormulasChange:function(t,n){e.tableChange(Object(c.a)({},e.table,{examples:t,formulas:n}))},formulasChange:t}))}function L(e){function t(e){var t=!0;try{N(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formulas.indexOf(n)?[].concat(Object(i.a)(e.formulas),[t]):e.formulas.map(function(e){return e===n?t:e}),e.formulasChange(a)}function a(e){return T(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}var u=e.formulas.reduce(function(e,t){return Math.max(e,function e(t,n){return T(t)?t.thenChildren.reduce(function(t,a){return Math.max(t,e(a,n+1))},n+1):n}(t,0))},0),l=e.params.length,o=e.formulas.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{placeholder:"Formula",dummy:!1,isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:N(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:z}),u)}}),r.a.createElement(D,{title:"Remove formula",onClick:function(){return function(t){var n=e.formulas.filter(function(e){return e!==t});e.formulasChange(n)}(u)}})))}),m=r.a.createElement("th",{key:q(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:N(t),outputs:e.examples.map(function(e){return z}),key:J()},{})}}))),s=function e(t){return 0===t?[]:1===t?[1]:[].concat(Object(i.a)(e(t-1)),[t])}(u).map(function(t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{colSpan:l+2}),e.formulas.map(function(a){return r.a.createElement(X,{key:a.key,formula:a,depth:t,numExamples:e.examples.length,formulaChange:function(e){return n(e,a)}})}))});return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement(Q,{params:e.params,examples:e.examples,tableNames:e.tableNames,paramsExamplesChange:e.paramsExamplesChange}),[].concat(Object(i.a)(o),[m])),s)}function Q(e){function t(t,n){var a=e.params.filter(function(e){return e!==n}).map(function(e){return{name:e.name,binding:null}}),r=e.tableNames.map(function(e){return{name:e,binding:null}}),u=[].concat(Object(i.a)(x),Object(i.a)(r),Object(i.a)(a));return/^[a-zA-Z+\-*\/?=><]+$/.test(t)&&!function(e,t){return t.reduce(function(t,n){return!!t||n.name===e},!1)}(t,u)}function n(t,n){var a,r;-1===e.params.indexOf(n)?(a=[].concat(Object(i.a)(e.params),[t]),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:[].concat(Object(i.a)(e.inputs),[{prog:z,key:J()}])})})):(a=e.params.map(function(e){return e===n?t:e}),r=e.examples),e.paramsExamplesChange(a,r)}var a=e.params.map(function(a){return r.a.createElement("th",{key:a.key},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!1,placeholder:"Parameter",isValid:function(e){return t(e,a)},onValid:function(e){return n(Object(c.a)({},a,{name:e}),a)},onEmpty:function(){return n(Object(c.a)({},a,{name:z}),a)}}),r.a.createElement(D,{title:"remove this parameter",onClick:function(){return function(t){var n=e.params.indexOf(t),a=e.params.filter(function(e){return e!==t}),r=e.examples.map(function(e){return Object(c.a)({},e,{inputs:e.inputs.filter(function(e,t){return t!==n})})});e.paramsExamplesChange(a,r)}(a)}})))}),u=r.a.createElement("th",{key:q()},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!0,placeholder:"Parameter",isValid:function(e){return t(e,{})},onValid:function(e){return n({name:e,key:J()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(a),[u])))}function X(e){function t(e){var t=!0;try{N(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=-1===e.formula.thenChildren.indexOf(n)?[].concat(Object(i.a)(e.formula.thenChildren),[t]):e.formula.thenChildren.map(function(e){return e===n?t:e}),e.formulaChange(Object(c.a)({},e.formula,{thenChildren:a}))}function a(e){return T(e)?e.thenChildren.reduce(function(e,t){return e+a(t)},2):1}if(e.depth>1)return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),T(e.formula)?r.a.createElement(r.a.Fragment,null,e.formula.thenChildren.map(function(t){return r.a.createElement(X,{key:t.key,formula:t,depth:e.depth-1,numExamples:e.numExamples,formulaChange:function(e){return n(e,t)}})}),r.a.createElement("th",null)):r.a.createElement("script",null));if(T(e.formula)){var u=e.formula.thenChildren.map(function(u){return r.a.createElement("th",{key:u.key,colSpan:a(u)},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!1,placeholder:"Formula",isValid:t,onValid:function(e){return n(Object(c.a)({},u,{prog:N(e)}),u)},onEmpty:function(){return n(Object(c.a)({},u,{prog:z}),u)}}),r.a.createElement(D,{title:"Remove formula",onClick:function(){return function(t){var n=e.formula.thenChildren.filter(function(e){return e!==t});e.formulaChange(Object(c.a)({},e.formula,{thenChildren:n}))}(u)}})))}),l=r.a.createElement("th",{key:q(),colSpan:1},r.a.createElement("div",{className:"full_cell"},r.a.createElement(G,{dummy:!0,placeholder:"Formula",isValid:t,onValid:function(t){return n({prog:N(t),outputs:Array(e.numExamples).fill(z),key:J()},{})}})));return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null),r.a.createElement(r.a.Fragment,null,[].concat(Object(i.a)(u),[l])))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("th",null))}function ee(e){function t(t,n){var a,r,u=-1!==e.examples.indexOf(n);if(t===Y)return u;return u?(a=e.examples.map(function(e){return e===n?t:e}),r=e.formulas):(a=[].concat(Object(i.a)(e.examples),[t]),r=e.formulas.map(function e(t){var n=[].concat(Object(i.a)(t.outputs),[z]);if(T(t)){var a=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:n,thenChildren:a})}return Object(c.a)({},t,{outputs:n})})),e.examplesFormulasChange(a,r),!0}var n=e.examples.map(function(n,a){return r.a.createElement("tr",{key:n.key},r.a.createElement("td",null,r.a.createElement(D,{onClick:function(){return function(t){var n=e.examples.indexOf(t),a=e.examples.filter(function(e){return e!==t}),r=e.formulas.map(function e(t){var a=t.outputs.filter(function(e,t){return t!==n});if(T(t)){var r=t.thenChildren.map(e);return Object(c.a)({},t,{outputs:a,thenChildren:r})}return Object(c.a)({},t,{outputs:a})});e.examplesFormulasChange(a,r)}(n)},title:"Remove this example"})),r.a.createElement(te,{dummy:!1,inputs:n.inputs,inputsChange:function(e){return t(Object(c.a)({},n,{inputs:e}),n)}}),r.a.createElement("td",null),r.a.createElement(ne,{dummy:!1,formulas:e.formulas,want:n.want,row:a}),r.a.createElement("td",null),r.a.createElement(re,{dummy:!1,wantChange:function(e){return t(Object(c.a)({},n,{want:e}),n)}}))}),a=r.a.createElement("tr",{key:q(e.paramNames.length)},r.a.createElement("td",null),r.a.createElement(te,{dummy:!0,inputs:e.paramNames.map(function(e,t){return{key:q(t)}}),inputsChange:function(e){return t({inputs:e,want:z,key:J()},{})}}),r.a.createElement("td",null),r.a.createElement(ne,{dummy:!0,formulas:e.formulas}),r.a.createElement("td",null),r.a.createElement(re,{dummy:!0,wantChange:function(n){return t({want:n,inputs:e.paramNames.map(function(e){return{prog:z,key:J()}}),key:J()},{})}}));return r.a.createElement("tbody",null,[].concat(Object(i.a)(n),[a]))}function te(e){function t(e){var t=!0;try{N(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t}function n(t,n){var a;a=e.dummy?e.inputs.map(function(e){return e===n?Object(c.a)({},t,{key:J()}):{prog:z,key:J()}}):e.inputs.map(function(e){return e===n?t:e}),e.inputsChange(a)}return r.a.createElement(r.a.Fragment,null,e.inputs.map(function(a,u){return r.a.createElement("td",{key:a.key},r.a.createElement(G,{dummy:e.dummy,placeholder:"Input",isValid:t,onValid:e.dummy?function(e){return n({prog:O(N(e),x)},a)}:function(e){return n(Object(c.a)({},a,{prog:O(N(e),x)}),a)},onEmpty:function(){return n(Object(c.a)({},a,{prog:z}),a)}}))}))}function ne(e){function t(e){return T(e)?e.thenChildren.reduce(function(e,n){return e+t(n)},2):1}return e.dummy?r.a.createElement(r.a.Fragment,null,e.formulas.map(function(e){return r.a.createElement("td",{key:e.key,colSpan:t(e)})})):r.a.createElement(r.a.Fragment,null,e.formulas.map(function(t){return r.a.createElement(r.a.Fragment,{key:t.key},r.a.createElement(ae,{output:t.outputs[e.row],want:e.want}),T(t)?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{formulas:t.thenChildren,want:e.want,row:e.row}),r.a.createElement("td",null)):r.a.createElement("script",null))}))}function ae(e){if(e.output===R)return r.a.createElement("td",{className:"gray"});if(e.output===A)return r.a.createElement("td",{className:"pink"});if(e.output===z)return r.a.createElement("td",{className:"yellow"});var t,n,a,u=e.output,l=z;if(e.want!==z)try{l=O(e.want,x)}catch(c){u=c}return u instanceof Error?(t=u.message,n=!0):(t=k(u),n=!1),a=n?r.a.createElement("img",{src:$+"frowneyface.png",alt:"Error!",style:{float:"right"},title:"Oh no! You got an error!"}):l===z?"":U(u,l)?r.a.createElement("img",{src:$+"smileyface.png",alt:"Yay!",style:{float:"right"},title:"Yay! It's right!"}):"",r.a.createElement("td",{className:"output"},t,a)}function re(e){return r.a.createElement("td",null,r.a.createElement(G,{dummy:e.dummy,placeholder:"Want",isValid:function(e){var t=!0;try{N(e)}catch(n){if(!(n instanceof SyntaxError))throw n;t=!1}return t},onValid:function(t){return e.wantChange(O(N(t),x))},onEmpty:function(){return e.wantChange(z)}}))}var ue=function(e){function t(e){var n;Object(o.a)(this,t),n=Object(s.a)(this,Object(f.a)(t).call(this,e));var a=[{examples:[{inputs:[{prog:z,key:J()}],want:z,key:J()}],formulas:[{prog:z,outputs:[z],key:J()}],params:[{name:z,key:J()}],name:z,key:J()}];return n.state={tables:a},n.programChange=n.programChange.bind(Object(p.a)(n)),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"calculate",value:function(e){function t(e){return function(t){if(t.length!==e.params.length)throw new Error("Arity Mismatch, expected "+e.params.length+" argument"+(1===e.params.length?"":"s"));var n=e.examples.reduce(function(n,a){if(void 0!==n)return n;if(a.inputs.reduce(function(e,n,a){return e&&U(n.prog,t[a])},!0)){if(a.want===z)throw new ReferenceError("(".concat(e.name," ").concat(t.map(k).join(" "),") doesn't have a want"));return a.want}},void 0);if(void 0===n)throw new ReferenceError(t.map(k).join()+" is not an example in "+e.name);return n}}var n=e.map(function(e){return{name:e.name,binding:{value:t(e),type:y}}}),a=[].concat(Object(i.a)(x),Object(i.a)(n));return e.map(function(e){function t(n,r){var u=r.map(function(t){if(t===R)return R;if(t===A)return A;if(!t.inputs.every(function(e){return e.prog!==z})||n.prog===z)return z;var r=e.params.map(function(e,n){return{name:e.name,binding:t.inputs[n].prog}}),u=[].concat(Object(i.a)(a),Object(i.a)(r));try{var l=O(n.prog,u)}catch(c){l=c}return l});if(I(u)||void 0!==n.thenChildren&&0!==n.thenChildren.length){if(void 0===n.thenChildren)var l=[];else{var o=r.map(function(e,t){return function(e,t){return e===R||!1===t.value?R:"boolean"!==typeof t.value?A:e}(e,u[t])});l=n.thenChildren.map(function(e){return t(e,o)})}return Object(c.a)({},n,{outputs:u,thenChildren:l})}var m=Object(c.a)({},n,{outputs:u});return delete m.thenChildren,m}if(e.name!==z&&e.params.every(function(e){return e.name!==z})){var n=e.formulas.map(function(n){return t(n,e.examples)});return Object(c.a)({},e,{formulas:n})}return e.formulas.map(function(t){return Object(c.a)({},t,{outputs:Array(e.examples.length).fill(z)})}),Object(c.a)({},e)})}},{key:"programChange",value:function(e){var t=this.calculate(e);console.log(t),this.setState(function(e){return{tables:t}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H,{tables:this.state.tables,programChange:this.programChange}),r.a.createElement("textarea",{rows:10,cols:50,className:"bsl_io",readOnly:!0,value:W(this.state.tables)}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.9740eb29.chunk.js.map
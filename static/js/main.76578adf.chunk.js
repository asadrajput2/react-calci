(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,_,a){e.exports=a(11)},11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),react_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),react_dom__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__),_container__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(9),_index_css__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),_index_css__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__),View=function(e){function _(){return Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,_),Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(_).apply(this,arguments))}return Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{class:"view"},this.props.value)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),Calculator=function(_React$Component2){function Calculator(e){var _;return Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,Calculator),(_=Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a)(this,Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator).call(this,e))).state={value:""},_.eventHandler=_.eventHandler.bind(Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_)),_.eval=_.eval.bind(Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_)),_.clear=_.clear.bind(Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.a)(_)),_}return Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_React$Component2),Object(_home_asad_Projects_React_react_calci_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,[{key:"eventHandler",value:function(e){e.persist(),this.setState(function(_,a){return{value:_.value.toString()+e.target.getAttribute("name").toString()}})}},{key:"eval",value:function _eval(e){e.persist(),this.setState(function(state,props){return{value:eval(state.value)}})}},{key:"clear",value:function(e){e.persist(),this.setState(function(e){return{value:e.value.toString().split("").reverse().splice(1).reverse().join("")}})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{class:"calc"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(View,{value:this.state.value}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_container__WEBPACK_IMPORTED_MODULE_8__.a,{clear:this.clear,eval:this.eval,eventHandler:this.eventHandler}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.render(react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Calculator,null),document.getElementById("root"))},17:function(e,_,a){},9:function(e,_,a){"use strict";var t=a(0),r=a.n(t),n=a(2),c=a(3),l=a(5),s=a(4),o=a(1),u=a(6),i=function(e){function _(e){var a;return Object(n.a)(this,_),(a=Object(l.a)(this,Object(s.a)(_).call(this,e))).state={value:""},a.handleClick=a.handleClick.bind(Object(o.a)(a)),a}return Object(u.a)(_,e),Object(c.a)(_,[{key:"handleClick",value:function(e){this.props.eventHandler(e)}},{key:"render",value:function(){var e=this.props.numop,_="";switch(this.props.numop){case"0":_="zero";break;case"+":_="plus";break;case"=":_="equals";break;case"X":_="numop clr";break;default:_="numop"}return"/"===e||"*"===e||"-"===e||"+"===e||"="===e?r.a.createElement("div",{class:_+" ops",onClick:this.handleClick,name:this.props.numop},this.props.numop):r.a.createElement("div",{class:_+"  nums",onClick:this.handleClick,name:this.props.numop},this.props.numop)}}]),_}(r.a.Component);function m(e){return r.a.createElement("div",{class:"num-cont"},r.a.createElement(i,{numop:"X",eventHandler:e.clear}),r.a.createElement(i,{numop:"/",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"*",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"-",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"+",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"=",eventHandler:e.eval}),r.a.createElement(i,{numop:"1",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"2",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"3",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"4",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"5",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"6",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"7",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"8",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"9",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:"0",eventHandler:e.eventHandler}),r.a.createElement(i,{numop:".",eventHandler:e.eventHandler}))}a.d(_,"a",function(){return m})}},[[10,1,2]]]);
//# sourceMappingURL=main.76578adf.chunk.js.map
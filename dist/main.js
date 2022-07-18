/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Variables */\\r\\n:root {\\r\\n  --business: #3a82ee;\\r\\n  --light: #eee;\\r\\n  --white: #fff;\\r\\n  --grey: #888;\\r\\n}\\r\\n\\r\\n/* Resets */\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  color: var(--grey);\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\ninput:not([type='radio']):not([type='checkbox']),\\r\\nbutton {\\r\\n  appearance: none;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  cursor: initial;\\r\\n}\\r\\n\\r\\n.header button {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  color: gray;\\r\\n  font-size: 1.9rem;\\r\\n  font-weight: 700;\\r\\n  cursor: pointer;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: var(--white);\\r\\n  color: var(--dark);\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  margin-top: 2rem;\\r\\n  padding-left: 0.8rem;\\r\\n  padding-right: 0.5rem;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  color: var(--dark);\\r\\n  font-size: 1rem;\\r\\n  font-weight: 400;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\nh4 {\\r\\n  color: var(--grey);\\r\\n  font-size: 0.875rem;\\r\\n  font-weight: 700;\\r\\n  margin-bottom: 0.5rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: block;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 9px;\\r\\n  background: var(--light);\\r\\n  width: 35rem;\\r\\n  margin: 5rem auto;\\r\\n}\\r\\n\\r\\n.float-left {\\r\\n  float: left;\\r\\n}\\r\\n\\r\\n.create-todo input[type='text'] {\\r\\n  width: 90%;\\r\\n  font-size: 1.125rem;\\r\\n  padding: 1rem 1.5rem;\\r\\n  color: var(--dark);\\r\\n  background-color: var(--white);\\r\\n  border-radius: 5px;\\r\\n  margin-bottom: 1.5rem;\\r\\n}\\r\\n\\r\\n.create-todo .options {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  grid-gap: 1rem;\\r\\n  margin-bottom: 1.5rem;\\r\\n}\\r\\n\\r\\n.todo-item label {\\r\\n  display: block;\\r\\n  margin-right: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.create-todo .options label {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  background-color: #fff;\\r\\n  padding: 1.5rem;\\r\\n  box-shadow: var(--shadow);\\r\\n  border-radius: 0.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type='radio'],\\r\\ninput[type='checkbox'] {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.bubble {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  border-radius: 999px;\\r\\n  border: 2px solid var(--business);\\r\\n  box-shadow: var(--business-glow);\\r\\n}\\r\\n\\r\\n.bubble::after {\\r\\n  content: '';\\r\\n  background-color: var(--business);\\r\\n  box-shadow: var(--business-glow);\\r\\n  border-radius: 999px;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\ninput:checked ~ .bubble::after {\\r\\n  width: 10px;\\r\\n  height: 10px;\\r\\n  opacity: 1;\\r\\n}\\r\\n\\r\\n.create-todo .options label div {\\r\\n  color: var(--dark);\\r\\n  font-size: 1.125rem;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.create-todo input[type='submit'] {\\r\\n  width: 3rem;\\r\\n  font-size: 1.8rem;\\r\\n  padding: 1rem 0.5rem;\\r\\n  color: var(--grey);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list .list {\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.todo-list .todo-item {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-radius: 0.5rem;\\r\\n}\\r\\n\\r\\n.todo-item label span {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.todo-item .todo-content {\\r\\n  flex: 1 1 0%;\\r\\n}\\r\\n\\r\\n.todo-item .todo-content input {\\r\\n  color: var(--dark);\\r\\n  font-size: 1.125rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.todo-item .actions {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-bottom: 1.4rem;\\r\\n}\\r\\n\\r\\n.todo-item .actions button {\\r\\n  display: block;\\r\\n  font-size: 1.5rem;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.25rem;\\r\\n  color: var(--grey);\\r\\n  cursor: pointer;\\r\\n  transition: 0.2s ease-in-out;\\r\\n}\\r\\n\\r\\n.todo-item .actions button:hover {\\r\\n  opacity: 0.75;\\r\\n}\\r\\n\\r\\n.todo-item .actions .edit {\\r\\n  margin-right: 0.5rem;\\r\\n}\\r\\n\\r\\n.todo-item.done .todo-content input {\\r\\n  text-decoration: line-through;\\r\\n  color: var(--light);\\r\\n  background: var(--grey);\\r\\n}\\r\\n\\r\\n.fa-trash{\\r\\n  pointer-events: none;\\r\\n}\\r\\n\\r\\n.clear-all {\\r\\n  border: none;\\r\\n  background: none;\\r\\n  text-decoration: underline;\\r\\n  cursor: pointer;\\r\\n  font-size: 1.3rem;\\r\\n  color: gray;\\r\\n  padding: 10px;\\r\\n  margin: auto;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://05---to-do-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://05---to-do-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://05---to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\nconst deleteTask = (taskId) => {\r\n  const data = JSON.parse(localStorage.getItem('todos'));\r\n  const arrClear = data.filter((elem) => elem.id == taskId);\r\n\r\n  arrClear.forEach((e) => {\r\n    const index = data.indexOf(e);\r\n    data.splice(index, 1);\r\n    localStorage.setItem('todos', JSON.stringify(data));\r\n  });\r\n};\r\n\r\nconst clearAll = () => {\r\n  document.querySelector('.clear-all').addEventListener('click', (e) => {\r\n    // todoList.innerHTML = '';\r\n    // localStorage.clear('todos');\r\n    // location.reload();\r\n    const data = JSON.parse(localStorage.getItem('todos'));\r\n    const arrClear = data.filter((elem) => elem.completed);\r\n\r\n    arrClear.forEach((e) => {\r\n      const index = data.indexOf(e);\r\n      data.splice(index, 1);\r\n    });\r\n\r\n    localStorage.setItem('todos', JSON.stringify(data));\r\n    document.location.reload();\r\n  });\r\n};\r\n\r\n// export function deleteTask(taskId) {\r\n//   todos = todos.filter(({task}) => (task.id) != taskId);\r\n//   localStorage.setItem('todos', JSON.stringify(todos));\r\n//   DisplayTodos();\r\n// }\r\n\n\n//# sourceURL=webpack://05---to-do-list/./src/action.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayTodos\": () => (/* binding */ DisplayTodos),\n/* harmony export */   \"todoList\": () => (/* binding */ todoList),\n/* harmony export */   \"todos\": () => (/* binding */ todos)\n/* harmony export */ });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action.js */ \"./src/action.js\");\n\r\n\r\n\r\nconst todos = JSON.parse(localStorage.getItem('todos')) || []; // localstorage with array\r\nconst todoList = document.querySelector('#todo-list');\r\nconst DisplayTodos = () => {\r\n  todoList.innerHTML = '';\r\n\r\n  todos.forEach((todo) => {\r\n    const todoItem = document.createElement('div');\r\n    todoItem.classList.add('todo-item');\r\n    todoItem.setAttribute('data-id', todo.id);\r\n\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n    const span = document.createElement('span');\r\n    const content = document.createElement('div');\r\n    const actions = document.createElement('div');\r\n    const edit = document.createElement('button');\r\n    const deleteButton = document.createElement('button');\r\n\r\n    input.type = 'checkbox';\r\n    input.checked = todo.completed;\r\n    span.classList.add('bubble');\r\n\r\n    content.classList.add('todo-content');\r\n    actions.classList.add('actions');\r\n    edit.classList.add('edit');\r\n    deleteButton.classList.add('delete');\r\n\r\n    content.innerHTML = `<input type=\"text\" value=\"${todo.description}\" readonly>`;\r\n    edit.innerHTML = '<i class=\"fas fa-edit\"></i>';\r\n    deleteButton.innerHTML = '<i class=\"fa fa-trash\"></i>';\r\n\r\n    label.appendChild(input);\r\n    label.appendChild(span);\r\n    actions.appendChild(edit);\r\n    actions.appendChild(deleteButton);\r\n    todoItem.appendChild(label);\r\n    todoItem.appendChild(content);\r\n    todoItem.appendChild(actions);\r\n\r\n    todoList.appendChild(todoItem);\r\n\r\n    if (todo.completed) {\r\n      todoItem.classList.add('done');\r\n    }\r\n\r\n    input.addEventListener('change', (e) => {\r\n      todo.completed = e.target.checked;\r\n      localStorage.setItem('todos', JSON.stringify(todos));\r\n\r\n      if (todo.completed) {\r\n        todoItem.classList.add('done');\r\n      } else {\r\n        todoItem.classList.remove('done');\r\n      }\r\n\r\n      DisplayTodos();\r\n    });\r\n\r\n    edit.addEventListener('click', (e) => {\r\n      const input = content.querySelector('input');\r\n      input.removeAttribute('readonly');\r\n      input.focus();\r\n      input.addEventListener('keypress', (e) => {\r\n        if (e.key === 'Enter') {\r\n          input.setAttribute('readonly', true);\r\n          todo.description = e.target.value;\r\n          localStorage.setItem('todos', JSON.stringify(todos));\r\n          DisplayTodos();\r\n        }\r\n      });\r\n    });\r\n\r\n    deleteButton.addEventListener('click', (e) => {\r\n      if (e.target.classList.contains('delete')) {\r\n        e.target.parentElement.parentElement.remove();\r\n        (0,_action_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(\r\n          e.target.parentElement.parentElement.getAttribute('data-id')\r\n        );\r\n        DisplayTodos();\r\n        document.getElementById('todo-list');\r\n        location.reload();\r\n      }\r\n      (0,_action_js__WEBPACK_IMPORTED_MODULE_1__.deleteTask)();\r\n    });\r\n\r\n    (0,_action_js__WEBPACK_IMPORTED_MODULE_1__.clearAll)();\r\n  });\r\n};\r\n\r\nconst newTodoForm = document.querySelector('#new-todo-form');\r\nconst submit = () => {\r\n  newTodoForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const todo = {\r\n      description: e.target.elements.content.value,\r\n      completed: false,\r\n      id: Date.now(),\r\n    };\r\n    todos.push(todo);\r\n\r\n    localStorage.setItem('todos', JSON.stringify(todos));\r\n\r\n    // Reset the form\r\n    e.target.reset();\r\n\r\n    DisplayTodos();\r\n  });\r\n};\r\n\r\nwindow.addEventListener('load', () => {\r\n  submit();\r\n  DisplayTodos();\r\n});\r\n\r\nconst reload = () => {\r\n  document.querySelector('#reload').addEventListener('click', () => {\r\n    location.reload(); // eslint-disable-line\r\n  });\r\n};\r\nreload();\r\n\n\n//# sourceURL=webpack://05---to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var _isPlainObject=require("./isPlainObject.js"),_isPlainObject2=_interopRequireDefault(_isPlainObject),_isMap=require("./isMap.js"),_isMap2=_interopRequireDefault(_isMap),_hasGeneratorInterface=require("./hasGeneratorInterface.js"),_hasGeneratorInterface2=_interopRequireDefault(_hasGeneratorInterface),_flattenWhenNode=require("./flattenWhenNode.js"),_flattenWhenNode2=_interopRequireDefault(_flattenWhenNode);exports.default=(0,_flattenWhenNode2.default)(function(e){return((0,_isPlainObject2.default)(e)||(0,_isMap2.default)(e))&&!(0,_hasGeneratorInterface2.default)(e)});
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var s=t[a](o),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxParse=require("./../utils/wxparse/wxParse.js"),_wxParse2=_interopRequireDefault(_wxParse),HTMLParser=function(e){function t(){for(var e,r,n,a,o=arguments.length,s=Array(o),i=0;i<o;i++)s[i]=arguments[i];return _classCallCheck(this,t),r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.props={parserName:{type:String,default:"htmlParserName"},parserContent:{type:String,default:"<p style='font-size: 32rpx; padding: 30rpx 0; text-align: center;'>没有任何内容</p>"},parserType:{type:String,default:"html"},parserPadding:{type:Number,default:0}},n.data={htmlParserTpl:{},bindData:{}},n.events={"htmlParser-broadcast":function(e){}},n.methods={htmlParserNotice:function(){this.htmlParse()}},a=r,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.htmlParse();case 1:case"end":return e.stop()}},e,this)}));return e}()},{key:"wxParseImgLoad",value:function(e){e.detail}},{key:"htmlParse",value:function(){try{var e=_wxParse2.default.wxParse(this.parserName,this.parserType,this.parserContent||this.props.parserContent.default,this,this.parserPadding);this.htmlParserTpl=e[this.parserName],this.$apply()}catch(e){console.warn("kinerHtmlParser:","没有任何内容需要转换",e)}}},{key:"wxParseImgTap",value:function(e){_wxParse2.default.wxParseImgTap(e,this.bindData)}}]),t}(_wepy2.default.component);exports.default=HTMLParser;
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,o){try{var a=t[i](o),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxRequest=require("./../../utils/wxRequest/index.js"),_wxRequest2=_interopRequireDefault(_wxRequest),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),StatementDetail=function(e){function t(){var e,n,r,i;_classCallCheck(this,t);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.config={navigationBarTitleText:"账单详情"},r.data={id:0,statement:{}},r.methods={edit:function(){_wepy2.default.navigateTo({url:"/pages/statements/edit?statement="+JSON.stringify(this.statement)})},del:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_tip2.default.confirm("是否删除该条账单？",{},"提示");case 2:return e.next=4,_wxRequest2.default.Destroy("consumeController/deleteConsume/"+this.id);case 4:t=e.sent,0===t.code?(_tip2.default.toast("删除成功"),_wepy2.default.navigateBack({delta:1})):_tip2.default.error(t.msg);case 6:case"end":return e.stop()}},e,this)}));return e}()},i=n,_possibleConstructorReturn(r,i)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e){this.id=e.id,this.statement=JSON.parse(e.statement),void 0==this.id&&_wepy2.default.navigateBack({delta:1})}},{key:"onShow",value:function(){}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(StatementDetail,"pages/statements/detail"));
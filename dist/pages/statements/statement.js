"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,s){function r(n,a){try{var i=e[n](a),o=i.value}catch(t){return void s(t)}if(!i.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}return r("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,s,r){return s&&t(e.prototype,s),r&&t(e,r),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_wxRequest=require("./../../utils/wxRequest/index.js"),_wxRequest2=_interopRequireDefault(_wxRequest),_host=require("./../../utils/host.js"),_session=require("./../../utils/session.js"),_session2=_interopRequireDefault(_session),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_qqmapWxJssdk=require("./../../utils/qqmap-wx-jssdk.js"),_qqmapWxJssdk2=_interopRequireDefault(_qqmapWxJssdk),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),NewStatement=function(t){function e(){var t,s,r,n;_classCallCheck(this,e);for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];return s=r=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),r.config={navigationBarTitleText:"记一笔"},r.data={method:"POST",statement_id:0,type:"expend",amount:"",category_id:0,category_name:"请选择分类",asset_id:0,asset_name:"请选择账户",description:"",date:"",address:"",assets_label:[],categories_label:[],asset_log_id:0,source:"请选择账户",target:"请选择账户",from:0,to:0,transferType:0,switchCheck:_session2.default.get("getLocationSwitch")||!1,qqmapSDK:null,nation:"",province:"",city:"",district:"",street:"",submiting:!1},r.computed={active:function(){return"expend"==this.type}},r.methods={formSubmit:function(){function t(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var s,r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(s=e.detail.value,s.type=this.type,0!=s.amount&&""!=s.amount){t.next=5;break}return _tip2.default.error("金额不能为零"),t.abrupt("return",!1);case 5:if(0!=s.category_id){t.next=8;break}return _tip2.default.error("未选择分类"),t.abrupt("return",!1);case 8:if(0!=s.asset_id){t.next=11;break}return _tip2.default.error("未选择账户"),t.abrupt("return",!1);case 11:if("transfer"!=this.type){t.next=24;break}if(0!=this.from&&0!=this.to){t.next=17;break}return _tip2.default.error("未选择转账分类"),t.abrupt("return",!1);case 17:if(this.from!=this.to){t.next=22;break}return _tip2.default.error("不能转去同一类型"),t.abrupt("return",!1);case 22:s.from=this.from,s.to=this.to;case 24:if(r=new Date,s.time=[r.getHours(),r.getMinutes(),r.getSeconds()].join(":"),s.asset_log_id=this.asset_log_id,n=null,this.submiting=!0,"POST"!=this.method){t.next=35;break}return t.next=32,_wxRequest2.default.Post("statements",{statement:s});case 32:n=t.sent,t.next=38;break;case 35:return t.next=37,_wxRequest2.default.Put("statements/"+this.statement_id,{statement:s});case 37:n=t.sent;case 38:200==n.status?(a=(0,_wepyRedux.getStore)(),a.dispatch("POST"==this.method?(0,_actions.addStatement)(n.data):(0,_actions.modifyStatement)(n.data)),_wepy2.default.navigateBack({delta:1})):_tip2.default.error(n.msg),this.submiting=!1;case 40:case"end":return t.stop()}},t,this)}));return t}(),dateChange:function(t){this.date=t.detail.value},choseTab:function(t){this.type!=t&&(this.category_id=0,this.category_name="请选择分类"),this.type=t,this.guessCategory(),this.guessAsset()},tabAsset:function(t){this.asset_id=t.id,this.asset_name=t.name},tabCategory:function(t){this.category_id=t.id,this.category_name=t.name},assetFrom:function(){this.transferType=1,wx.navigateTo({url:"/pages/statements/chose_asset"})},assetTo:function(){this.transferType=2,wx.navigateTo({url:"/pages/statements/chose_asset"})},exchangeAsset:function(){var t=this.source;this.source=this.target,this.target=t;var e=this.from;this.from=this.to,this.to=e},redirectChoseAsset:function(){wx.navigateTo({url:"/pages/statements/chose_asset"})},redirectChoseCategory:function(){wx.navigateTo({url:"/pages/statements/chose_category?type="+this.type})},getLocation:function(t){var e=t.detail.value;_session2.default.set("getLocationSwitch",e),e?this.setLocation():(this.address="",this.$apply())}},n=s,_possibleConstructorReturn(r,n)}return _inherits(e,t),_createClass(e,[{key:"onLoad",value:function(){function t(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var s,r,n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:s=new Date,r=s.getFullYear(),n=s.getMonth()+1,a=s.getDate(),n<10&&(n="0"+n),a<10&&(a="0"+a),this.date=[r,n,a].join("-"),void 0!=e.id?this.getStatement(e.id):this.getLastUsed(),this.switchCheck&&this.setLocation(),e.type&&(this.type=e.type,this.from=e.asset_id,this.source=e.source),this.guessCategory(),this.guessAsset();case 12:case"end":return t.stop()}},t,this)}));return t}()},{key:"getStatement",value:function(){function t(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_wxRequest2.default.Get("statements/"+e);case 2:s=t.sent,void 0!=s.status&&200!=s.status&&(_wepy2.default.navigateBack({delta:1}),_tip2.default.error("无效的账单")),"transfer"==s.type&&(this.from=s.asset_id,this.to=s.target_asset_id,this.source=s.asset_name,this.target=s.target_asset_name),this.method="PUT",this.statement_id=s.id,this.type=s.type,this.amount=s.amount,this.category_id=s.category_id,this.asset_id=s.asset_id,this.description=s.description,this.date=s.date,this.category_name=s.category_name,this.asset_name=s.asset_name,this.$apply();case 16:case"end":return t.stop()}},t,this)}));return t}()},{key:"getLastUsed",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_wxRequest2.default.Get("statements/frequent_used",{type:this.type});case 2:e=t.sent,this.category_id=e.category_id,this.asset_id=e.asset_id,this.category_name=e.category_name,this.asset_name=e.asset_name,this.$apply();case 8:case"end":return t.stop()}},t,this)}));return t}()},{key:"guessCategory",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_wxRequest2.default.Get("statements/category_frequent",{type:this.type});case 2:e=t.sent,this.categories_label=e,this.$apply();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"guessAsset",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_wxRequest2.default.Get("statements/asset_frequent",{type:this.type});case 2:e=t.sent,this.assets_label=e,this.$apply();case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"setLocation",value:function(){var t=this;this.qqmapSDK=new _qqmapWxJssdk2.default({key:_host.mapKey});try{console.log("start get location"),wx.getLocation({type:"gcj02",success:function(e){console.log("location: ",e),t.qqmapSDK.reverseGeocoder({location:{latitude:e.latitude,longitude:e.longitude},success:function(e){var s=e.result.address_component;console.log(s),t.nation=s.nation,t.province=s.province,t.city=s.city,t.district=s.district,t.street=s.street,t.address=e.result.address,t.$apply()}})}})}catch(t){console.log("errorMsg",t),_session2.default.set("getLocationSwitch",!1),this.switchCheck=!1,this.$apply()}}},{key:"setCategory",value:function(t){this.category_id=t.id,this.category_name=t.name}},{key:"setAsset",value:function(t){"transfer"!=this.type?(this.asset_id=t.id,this.asset_name=t.name):1==this.transferType?(this.source=t.name,this.from=t.id):(this.target=t.name,this.to=t.id)}}]),e}(_wepy2.default.page);exports.default=NewStatement;
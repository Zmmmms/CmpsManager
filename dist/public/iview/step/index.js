"use strict";Component({externalClasses:["i-class"],properties:{status:{type:String,value:""},title:{type:String,value:""},content:{type:String,value:""},icon:{type:String,value:""}},options:{multipleSlots:!0},relations:{"../steps/index":{type:"parent"}},data:{len:1,index:0,current:0,direction:"horizontal"},methods:{updateDataChange:function(t){this.setData({len:t.len,index:t.index,current:t.current,direction:t.direction})}}});
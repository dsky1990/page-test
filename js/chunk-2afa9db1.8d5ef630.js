(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2afa9db1"],{2619:function(t,e,s){},"28da":function(t,e,s){},"2a2c":function(t,e,s){"use strict";s("6769")},"331a":function(t,e,s){},6769:function(t,e,s){},8843:function(t,e,s){"use strict";s("331a")},"896e":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"h5TableTitle between"},[s("div",{staticClass:"item"},["Reward"!=t.kind?[s("span",[t._v(t._s(t.name))]),s("span",{staticClass:"line"},[t._v("/")])]:t._e(),s("h5sort",{staticClass:"numbers",attrs:{name:t.transaction,sortType:t.sortType,sortSide:t.sortSide,num:"4"},on:{sort:t.sort}}),"Reward"==t.kind?[s("span",{staticClass:"line"},[t._v("/")]),s("h5sort",{attrs:{name:t.reward,sortType:t.sortType,sortSide:t.sortSide,num:"1"},on:{sort:t.sort}})]:t._e()],2),s("div",{staticClass:"item right"},[s("h5sort",{attrs:{name:t.PersonalIncome,sortType:t.sortType,sortSide:t.sortSide,num:"5"},on:{sort:t.sort}}),"Reward"!=t.kind?[s("span",{staticClass:"line"},[t._v("/")]),s("h5sort",{attrs:{name:t.reward,sortType:t.sortType,sortSide:t.sortSide,num:"1"},on:{sort:t.sort}})]:t._e()],2),s("div",{staticClass:"item-end"},[s("h5sort",{staticClass:"numbers",attrs:{name:t.APY,sortType:t.sortType,sortSide:t.sortSide,num:"3"},on:{sort:t.sort}})],1)])},a=[],n=s("1d12"),r={name:"h5TableTitle",data:function(){return{isShow:!1,listAct:0,listItemAct:0,searchValue:"",listItem:[]}},components:{h5sort:n["a"]},props:{name:{type:String,default:"交易对"},transaction:{type:String,default:"TVL"},PersonalIncome:{type:String,default:"个人收益"},reward:{type:String,default:"日产量"},APY:{type:String,default:"APY"},sortType:{type:String,default:"3"},sortSide:{type:String,default:"1"},kind:{type:String,default:"liquidity"}},beforeMount:function(){},computed:{},methods:{sort:function(t,e,s){this.$emit("sort",t,e,s)}}},o=r,c=(s("e1d7"),s("2877")),p=Object(c["a"])(o,i,a,!1,null,"08cf3052",null);e["a"]=p.exports},"99ee":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-tooltip",{attrs:{effect:"dark",placement:"bottom","popper-class":"middle-topic"}},[s("img",{staticClass:"topic-pic",attrs:{src:t.topic,alt:""}}),s("div",{attrs:{slot:"content"},slot:"content"},["1"===t.type?s("div",[s("p",{staticClass:"mt-title"},[t._v(t._s(t.$t("ExtractExplain")))]),s("p",[t._v("APR："+t._s(t.getApr())+"%")]),s("p",[t._v("APY："+t._s(t.getApy())+"%")])]):t._e(),"2"===t.type&&Object.keys(t.kindIdList).length?s("div",[s("p",[t._v(t._s(t.kindIdList[t.kindId]["listName"])+t._s(t.$t("GainsWeight"))+" x"+t._s(t.lockInfo.weights[t.kindId]))]),s("p",[t._v(t._s(t.kindIdList[t.kindId]["listName"])+" APR："+t._s(t.getApr(t.lockInfo.weights[t.kindId]))+"%")]),s("p",[t._v(t._s(t.kindIdList[t.kindId]["listName"])+" APY："+t._s(t.getApy(t.lockInfo.weights[t.kindId]))+"%")]),s("p",[t._v(t._s(t.$t("LockApyRemark")))])]):t._e()])])},a=[],n=(s("b680"),s("a9e3"),{name:"LockupTopic",props:["type","kindId","kindIdList","lockInfo"],data:function(){return{topic:s("79e5")}},computed:{},methods:{getApr:function(t){var e=t?+t:1;return(Number(this.lockInfo["pool_apy"])*e).toFixed(2)},getApy:function(t){var e=t?+t:1;return Number(100*Math.pow(1+this.lockInfo["pool_apy"]*e/365/100,365)-100).toFixed(2)}}}),r=n,o=(s("2a2c"),s("2877")),c=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},a2e3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic_bar text"},["lockup"==t.kind?["3"===t.type?s("div",[t._l(t.rateList,(function(e,i){return s("div",{key:"rateList_"+i},[s("div",{staticClass:"title"},[s("span",[t._v(t._s(i))])]),t._l(e,(function(e,a){return s("div",{key:""+i+a,staticClass:"explain",class:0==a?"explain_h":"explain_m"},[s("div",[s("i"),s("span",[t._v(t._s(e["text"]))])]),s("strong",{staticClass:"numbers"},[t._v(t._s(e["val"])+"%")])])}))],2)})),s("p",[t._v(t._s(t.$t("LockApyRemark")))])],2):t._e(),"4"===t.type?s("div",t._l(t.tvlList,(function(e,i){return s("div",{key:"tvlList_"+i,staticClass:"title"},[s("span",[t._v(t._s(e.text)+":")]),s("strong",{staticClass:"numbers"},[t._v("$"+t._s(e.val))])])})),0):t._e()]:"liquidity"==t.kind?[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("LiquidityAPR"))+":")]),s("strong",{staticClass:"numbers"},[t._v(t._s(t.getLiqApr())+"%")])]),s("div",[s("div",{staticClass:"explain explain_h"},[s("div",[s("i"),s("span",[t._v(t._s(t.$t("LpDig")))])]),s("strong",{staticClass:"numbers"},[t._v(t._s((365*Number(t.item.pool_apy)).toFixed(2))+"%")])]),s("div",{staticClass:"explain explain_m"},[s("div",[s("i"),s("span",[t._v(t._s(t.$t("LpFee")))])]),s("strong",{staticClass:"numbers"},[t._v(t._s((365*Number(t.item.swap_apy)).toFixed(2))+"%")])])]),s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("LiquidityAPY"))+":")]),s("strong",{staticClass:"numbers"},[t._v(t._s(t.getApy(t.getLiqApr()))+"%")])]),s("p",[t._v(t._s(t.$t("LpFeaDes")))])]:[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("ApyTopic.apr"))+":")]),s("strong",{staticClass:"numbers"},[t._v(t._s(Number(this.apy).toFixed(2))+"%")])]),t.isDoubleBenefit?s("div",[s("div",{staticClass:"explain explain_h"},[s("div",[s("i"),s("span",[t._v(t._s(t.getplatformName(0)))])]),s("strong",{staticClass:"numbers"},[t._v(t._s(t.getApr("earn"))+"%")])]),s("div",{staticClass:"explain explain_m"},[s("div",[s("i"),s("span",[t._v(t._s(t.getplatformName(1)))])]),s("strong",{staticClass:"numbers"},[t._v(t._s(t.getApr("mdx"))+"%")])])]):t._e(),s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.$t("ApyTopic.apy"))+":")]),s("strong",[t._v(t._s(t.getApy(t.apy))+"%")])]),t.isDoubleBenefit?s("p",[t._v(t._s(t.$t("ApyTopic.IsDoubleReinvest")))]):s("div",[s("p",[t._v(t._s(t.$t("ApyTopic.reinvest")))]),s("p",[t._v(t._s(t.$t("ApyTopic.interest")))])])]],2)},a=[],n=(s("a9e3"),s("ac1f"),s("1276"),s("caad"),s("2532"),s("b64b"),s("b680"),s("32a9")),r=s("ae48"),o=s("901e"),c=s.n(o),p={name:"ApyTopic",props:{apy:{type:[String,Number],require:!0,default:0},item:{type:Object,default:function(){}},kind:{type:String,default:"none"},type:{type:String,default:"3"}},data:function(){return{test:0}},mounted:function(){},computed:{getNameArr:function(){return this.item.earnedToken.split("&")},isDoubleBenefit:function(){return"Reward"===this.kind&&this.item.earnedToken.includes("&")},rateList:function(){for(var t=this.item["weights"],e=[],s=0,i=Object.keys(t);s<i.length;s++){var a=i[s];0==a?e.push("".concat(this.$t("Current"))):e.push("".concat(this.$t("XDayLockup",{day:n["h"][a]["time"]})))}for(var r=[],o=0,c=Object.keys(t);o<c.length;o++){var p=c[o];r.push({text:"".concat(e[p]),val:this.getLockApy(t[p])})}return{APY:r}},tvlList:function(){for(var t=[],e=0,s=Object.keys(this.item.weights);e<s.length;e++){var i=s[e];0==i?t.push({text:"".concat(this.$t("Current")),val:Object(r["e"])(this.item.lock_tvl[i],2)}):t.push({text:"".concat(this.$t("XDayLockup",{day:n["h"][i]["time"]})),val:Object(r["e"])(this.item.lock_tvl[i],2)})}return t}},methods:{getApr:function(t){return Number(this.item["pool_".concat(this.getNameArr["earn"===t?0:1],"_apy")]).toFixed(2)},getApy:function(t){return Number(100*Math.pow(1+t/365/100,365)-100).toFixed(2)},getLockApr:function(t){var e=t?+t:1;return(Number(this.item["pool_apy"])*e).toFixed(2)},getLockApy:function(t){var e=t?+t:1;return Number(100*Math.pow(1+this.item["pool_apy"]*e/365/100,365)-100).toFixed(2)},getLiqApr:function(){return new c.a((365*this.item.pool_apy).toFixed(2)).plus((365*this.item.swap_apy).toFixed(2))},getplatformName:function(t){var e=n["f"][this.getNameArr[t]];return e||"MDEX(F)"}}},l=p,u=(s("8843"),s("2877")),d=Object(u["a"])(l,i,a,!1,null,"61dc23a5",null);e["a"]=d.exports},aa35:function(t,e,s){"use strict";s("2619")},e1d7:function(t,e,s){"use strict";s("28da")},fcd9:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"h5TableTitle between numbers",class:t.chainName,on:{click:t.onitem}},[s("div",{staticClass:"item"},["Reward"==t.kind?s("div",{staticClass:"dig-item"},[s("img",{attrs:{src:t.getDigPic(t.item.pool_type),alt:""}}),s("div",[s("p",{staticClass:"numbers SemiBold"},[t._v(t._s(t.name))]),s("p",[s("CountUp",{attrs:{endVal:t._transferNum(t.transaction,t.getLanguage)}}),t._v(" "+t._s(Number(t.transaction)>=(["zh-CN","zh-HK"].includes(t.getLanguage)?1e7:1e8)?t.$t("unitB"):Number(t.transaction)>=1e4?t.$t("unitM"):"")+"/ "+t._s(t.per)+t._s(t._transferNum(t.reward,t.getLanguage))+t._s(Number(t.reward)>=(["zh-CN","zh-HK"].includes(t.getLanguage)?1e7:1e8)?t.$t("unitB"):Number(t.reward)>=1e4?t.$t("unitM"):"")+t._s(t.after)+" ")],1)])]):[s("p",{staticClass:"numbers SemiBold"},[t._v(t._s(t.name))]),s("p",[s("CountUp",{attrs:{endVal:Number(t.transaction)}})],1),t.isInviteCoin(t.item.address)?s("a",{staticClass:"point",attrs:{href:t.getUrlList["Invite"],target:"_blank"},on:{click:function(t){return t.stopPropagation()}}},[s("span",[t._v(t._s(t.$t("Invite")))]),s("i",{staticClass:"el-icon-top-right"})]):t._e()]],2),t.isDoubleBenefit()?s("div",{staticClass:"item right"},[s("div",[t._v(" "+t._s(t.getformatFloat(this.PersonalIncome["earn"]))+" "),t.$route.path.includes("boardroom")?s("span",{staticClass:"span"},[t._v(t._s(t.item.earned_token))]):s("span",{staticClass:"span"},[t._v("MDX")])]),s("div",[t._v(" "+t._s(t.getformatFloat(this.PersonalIncome["mdx"]))+" "),t.$route.path.includes("boardroom")?s("span",{staticClass:"span"},[t._v(t._s(t.item.pool_name))]):s("span",{staticClass:"span"},[t._v("MDX")])])]):s("div",{staticClass:"item right"},[s("p",[t._v(" "+t._s(t.getformatFloat(this.PersonalIncome))+" "),t.$route.path.includes("boardroom")?s("span",{staticClass:"span"},[t._v(t._s(t.item.earnedToken))]):s("span",{staticClass:"span"},[t._v("MDX")])]),"Reward"!=t.kind?s("p",[t._v(t._s(t.per)),s("CountUp",{attrs:{endVal:Number(t.reward)}}),t._v(" "+t._s(t.after))],1):t._e()]),s("div",{staticClass:"item-end",on:{click:function(e){return e.stopPropagation(),t.topicShowHandle.apply(null,arguments)}}},[s("CountUp",{attrs:{endVal:t.needApy?Number(t.APY>0?t.getApy():0):t.APY>0?t.APY:0}}),t._v("% "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.topicShow,expression:"topicShow"}],staticClass:"topic_content"},[s("ApyTopic",{attrs:{apy:t.APY,item:t.item,kind:"Reward"==t.kind&&3==t.item.pool_type?"lockup":t.kind}})],1),t.APY>0?s("div",{staticClass:"topic"},[s("img",{attrs:{src:"Heco"==t.chainName?t.hecoTopic:t.bscTopic,alt:""}})]):t._e()],1)])},a=[],n=(s("a9e3"),s("b64b"),s("caad"),s("2532"),s("d3b7"),s("159b"),s("4de4"),s("2a5e")),r=s("a2e3"),o=s("99ee"),c=s("ae48"),p={name:"h5Table",data:function(){return{topicShow:!1,hoverIndex:-1,bscTopic:s("994b"),hecoTopic:s("c93a"),listAct:0,listItemAct:0,searchValue:"",listItem:[],per:"",after:"",earned:""}},props:{kind:{type:String,default:""},index:{type:Number,default:-1},item:{type:Object,default:function(){}},needApy:{type:Boolean,default:!1},name:{type:String,default:""},transaction:{type:String|Number,default:""},PersonalIncome:{type:String|Number,default:""},reward:{type:String|Number,default:""},APY:{type:String|Number,default:""},show:{type:Boolean,default:!1}},components:{ApyTopic:r["a"],LockupTopic:o["a"]},beforeMount:function(){},mounted:function(){this.unit()},computed:{invitePairData:function(){return this.$store.state.invitePairData},chainName:function(){return this.$store.state.chainName},isShow:function(){return!this.show||(this.isDoubleBenefit()?0!=this.item.__reward["earn"]&&0!=this.item.__reward["mdx"]:0!==this.PersonalIncome)}},methods:{getDigPic:function(t){var e={1:s("4f75"),2:s("54b1"),3:s("a23b")};return e[t]},getApy:function(){if(3==this.item.pool_type){var t=this.item["weights"],e=Object.keys(t).length;return 100*Math.pow(1+this.APY*t[e-1]/365/100,365)-100}return 100*Math.pow(1+this.APY/365/100,365)-100},isDoubleBenefit:function(){return"Reward"==this.kind&&this.item.earnedToken.includes("&")},getformatFloat:function(t){return Object(n["a"])(t,2)},onitem:function(){this.$emit("ontable")},unit:function(){this.$route.path.includes("boardroom")?(this.per="",this.after="",this.earned=this.item.earnedToken):(this.per="",this.after="MDX",this.earned="MDX")},topicShowHandle:function(){var t=this;this.$el.parentNode.querySelectorAll(".topic_content").forEach((function(e,s){t.index!=s?e.style.display="none":"none"==e.style.display?(e.style.display="",t.topicShow=!0):(e.style.display="",t.topicShow=!1)}))},isInviteCoin:function(t){if(this.invitePairData.length){var e=this.invitePairData.filter((function(e){return e["pair_token"]===t}));return e.length}return!1},_transferNum:c["g"]}},l=p,u=(s("aa35"),s("2877")),d=Object(u["a"])(l,i,a,!1,null,"6fd5ca96",null);e["a"]=d.exports}}]);
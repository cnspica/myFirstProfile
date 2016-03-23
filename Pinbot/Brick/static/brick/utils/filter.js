!function(){var r=angular.module("app.filter",[]);r.filter("as_html",["$sce",function(r){return function(n){if(!n)return"";var t=n.replace(/<script>/g,"").replace(/<script \/>/g,"").replace(/\r\n/g,"<br>").replace(/\n/g,"<br>");return r.trustAsHtml(t)}}]),r.filter("moneyFilter",function(){return function(r){return parseInt(r/1e3)}}),r.filter("formatMoney",function(){return function(r,n){var t="",e=1e6,i=function(r){return parseInt(r/1e3)};return t=0==r&&n==e||0==r&&0==n?"面议":r>0&&n==e?i(r)+"K以上":r>0&&e>n?i(r)+"K - "+i(n)+"K":0==r&&e>n?i(n)+"K以下":"面议"}}),r.filter("filterYear",function(){return function(r){var n="";return n=r?r+"年工作经验":"经验不限"}}),r.filter("filterDegree",function(){return function(r){var n={0:"不限",3:"大专",4:"本科",7:"硕士",10:"博士"};return n[r]}}),r.filter("textSendStatus",function(){return function(r){return{waiting:"等待企业反馈",download:"面试邀请中",no_reply:"企业无回复",unfit:"不合适"}[r]}}),r.filter("textCardStatus",function(){return function(r){return{waiting:"等待你的反馈",accept:"面试邀请中",reject:"已拒绝该企业",expire:"职位已过期",chat_expire:"会话已过期"}[r]}}),r.filter("formartJobCategory",function(){return function(r){for(var n=[],t=0,e=r.length;e>t;t++)n.push("#"+r[t]+"#");return n.join("  ")}}),r.filter("formatTaskDomain",function(){return function(r,n){var t=[],e=[],r=r||[],n=n||[];if(!n.length&&r.length)return r.join(",");for(var i=0,u=r.length;u>i;i++){for(var a=r[i],f=!1,o=0,c=n.length;c>o;o++){var l=n[o];if(l==a){f=!0;break}}f?t.push('<span class="task-area">'+a+"</span>"):e.push('<span class="task-area-default">'+a+"</span>")}return t.join()+(e.length&&t.length?"，":"")+e.join(",")}}),r.filter("mergeCity",function(){return function(r){for(var n=[],t=0,e=r.length;e>t;t++)n.push(r[t].name);return n.join(",")}}),r.filter("joinCity",function(){return function(r){return r.join(",")}}),r.filter("joinCat",function(){return function(r){if(!r||!r.length)return"";for(var n=[],t=0,e=r.length;e>t;t++)n.push(r[t].category);return n.join(",")}}),r.filter("mode_salary_range",["$sce",function(r){return function(r){if("string"!=typeof r&&(r=""),r.match(/([0-9]+),([0-9]+)/i)){var n=RegExp.$1,t=RegExp.$2;return parseInt(t)>=100?n+"K 以上":n+"~"+t+"K"}return""}}])}();
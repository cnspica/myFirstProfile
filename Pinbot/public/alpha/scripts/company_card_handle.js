var notHasCard=function(){var t=$("#JS_no_card").html();$.LayerOut({html:t,dialogCss:"width:540px;"})},markResume=function(){var t=$("#JS_to_mark").html();$.LayerOut({html:t,closeByShadow:!1,dialogCss:"height:250px;"})},isHasCompanyInfo=function(t){var e="/companycard/get/json/?"+Math.random();$.get(e,{},function(e){var a={8:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>恭喜，简历购买成功！</p>',9:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>您好！正在为您准备简历。请稍后在简历中心查收！</p>',1:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>请先购买简历套餐，便能购买您喜欢的简历了。</p>',2:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>您已购买过此简历，请到简历中心查查看！</p>',3:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>抱歉，您的点数不足！</p>',4:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>抱歉，操作失败了，请刷新重试一下？</p>'};if(e&&e.status){if(e.has_mark)return void markResume();window.infos=e,"function"==typeof t&&t()}else e&&e.data?(8==e.data&&($("#js-nav-meet").addClass("nav-red"),$("#js-nav-qusetion").removeClass("nav-blue"),$("#js-faq-click").addClass("faq-robot-meet").removeClass("faq-robot-qusetion").find("span").text("约面话术"),$("#js-meet-content").show(),$("#js-qusetion-content").hide()),$.alert(a[e.data])):$.alert("请求失败，请刷新重试！")},"json")},chooseCard=function(){var t=$("#JS_choose_cards").html(),e=infos.jobs||[],a=925;return e.length?(1==e.length&&(a=490),$.LayerOut({html:t,closeByShadow:!1,dialogCss:"width:"+a+"px; height:610px;"}),void $.intentionCard({list:e,allowSend:!0,contentDom:"#JS_jobs_ajax_content",callback:cardScroll})):void notHasCard()},directDownload=function(t){var e=$(t),a=$("body").attr("data-feed_id"),n=e.attr("data-resumeid"),i=e.attr("data-sendid"),s=e.attr("data-job_id"),o={feed_id:a,resume_id:n,sendid:i,job_id:s},c={8:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>恭喜，简历购买成功！</p>',9:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>您好！正在为您准备简历。请稍后在简历中心查收！</p>',1:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>请先购买简历套餐，便能购买您喜欢的简历了。</p>',2:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>您已购买过此简历，请到简历中心查查看！</p>',3:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>抱歉，您的点数不足，请先购买点数！</p>',4:'<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>抱歉，操作失败了，请刷新重试一下？</p>'};if(e.attr("disabled"))return!1;e.attr("disabled",!0);var l=$.get("/transaction/buy",o,function(t){e.attr("disabled",!1),payTimer&&clearTimeout(payTimer),t&&t.status?8==t.data?$.alert(c[t.data],function(){location.reload()}):9==t.data&&$.alert(c[t.data],function(){location.reload()}):/^[1234]$/.test(t.data)&&$.alert(c[t.data])}).fail(function(t){$.alert(c[4])});payTimer=setTimeout(function(){l.abort(),$.alert(c[4])},2e4)};$(function(){var t=function(t){var e=function(t,e,a,n,i){return'<div class="mission-success pay-mission-success"><h3 class="text-center"><i class="i-ms"></i>'+t+'</h3><p class="c607d8b f14 text-center pd-bottom-20">'+a+'</p><p class="mt20 text-center"><a class="btn btn-blue btn-click-ok" href="javascript:void(0);">'+n+"</a></p></div>"};$.LayerOut({html:e('<span class="pay-alert"></span><span class="pay-title">简历下载失败！您的聘点不足！</span>',"",'您的聘点数量：<span class="cf46c62">'+t+'</span>个，请升级成为聘宝会员，或者<a href="/payment/point_recharge/" class="c63c2ec">购买聘点</a>。<br><a href="javascript:void(0);"  id="JS_service_btn" class="c63c2ec">有疑问请联系我们</a>',"升级聘宝会员",null),afterClose:function(){}}),$(".modal").undelegate(".btn-click-ok").delegate(".btn-click-ok","click",function(t){$._LayerOut.close(),document.location.href="/vip/role_info/"}),$.Menu()};$(".buy-status-1 a").on("click",function(e){e.preventDefault(),$.ajax({type:"get",url:"/vip/get_user_info/",success:function(e){if(void 0!=e.status&&"ok"==e.status)if(parseInt(e.pinbot_point)<=0)t(e.pinbot_point);else{var a=function(){var t=$("#JS_has_card_html").html();$.LayerOut({html:t,dialogCss:"width:540px;"})};isHasCompanyInfo(a)}else t(e.pinbot_point)},error:function(){$.alert('<p class="alert-notice-center"><span>获取用户状态失败，请刷新再试！</span></p>')}})}),$(document).on("click","#JS_send_card_btn",chooseCard),$(".send-company-card .has-layer").on("click",function(){isHasCompanyInfo(chooseCard)}),$(document).on("click",".JS_buy_not_sendcard",function(){directDownload(this)}),$(".JS_buy_after_sendcard").on("click",function(){var t=this;return $.confirm('<p style="text-align:center;font-size:16px;"><i class="i-l-notice"></i>您已发送了企业名片进行意向确认，还要再直接下载该简历吗？</p><p style="text-align:center;font-size:16px;">提醒：确认下载会在已扣3个点的基础上再扣除您10个点数</p>',function(){directDownload(t)}),!1}),$(".fit-btn").on("click",function(){var t=$(this),e=t.attr("data-unfit_url");$.ajax({type:"get",url:e,success:function(t){t&&"ok"==t.status&&location.reload()}})})});
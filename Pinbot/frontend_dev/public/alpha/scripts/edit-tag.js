!function(){function a(a){return function(t){t&&"success"==t.status?a(t):alert("操作失败，请联系瑶哥!")}}var t=function(a){return function(t){return a||(a=document.createElement("style"),document.getElementsByTagName("head")[0].appendChild(a)),a.styleSheet?a.styleSheeet.cssText=t:a.innerHTML=t}}(),e=$("body").data("resumeid")||"",i={history:function(a){$.get("/resumes/all_tags",function(t){var e=t&&t.data||[];a(e)})},mapHistory:{},add:function(a,t){var i={tag:a,resume_id:e};$.post("/resumes/add_tag_resume",i,t)},del:function(a,t){var i={tag_id:a,resume_id:e};$.post("/resumes/del_tag_resume",i,t)}};$(function(){function e(t){var e=$('<a href="javascript:void(0);" class="del-tag">删除</a>'),o=$(t);o.attr("data-val",$.trim(o.html())),e.on("click",function(t){t.preventDefault();{var e=o.data("id")||"";o.data("val")}i.del(e,a(function(){o.remove(),delete i.mapHistory[$.trim(o.data("val")).toLowerCase()]}))}).appendTo(o)}var o=$(".profile-tags-field");o.length||(o=$('<li class="profile-tags-field"></li>'),$(".profile-tao-feed").length?o.insertBefore(".profile-tao-feed"):o.appendTo("#resume-summary .profile ul")),o.find("span").each(function(){i.mapHistory[$.trim($(this).html()).toLowerCase()]=$(this).data("id")||1,e($(this))}),i.history(function(a){$('<datalist id="tag-history"></datalist>').html($.map(a,function(a){return'<option value="'+a.tag+'">'}).join("")).appendTo("body")});var d=$(['<div class="add-tag-container">','<a href="javascript:void(0);" class="add-tag-hook">添加 +</a>','<div class="add-tag-box">','<input type="text" list="tag-history" class="add-tag-input"/>','<p><a href="javascript:void(0)" class="add-tag-btn">确定</a><a href="javascript:void(0);" class="add-tag-cancel">取消</a></p>',"</div>","</div>"].join("")).appendTo(o);t(['.profile-tags-field:after { content: "";display: block;clear: both; visibility: hidden; }',".profile-tags-field span { position: relative; float: left;margin-right: 5px; margin-bottom: 5px;}",".profile-tags-field span .del-tag { position: absolute; right: -10px; top: -10px; display: none;}",".profile-tags-field span:hover .del-tag { display: block; background: #e00;line-height: 1; font-size: 12px; color: #fff;}",".profile-tags-field .add-tag-container { float: left; padding: 4px 0;display: inline-block; position: relative;}",".profile-tags-field .add-tag-hook {margin-left: 5px; cursor: pointer; border: 1px dotted #aaa; color: #111; padding: 4px;}",".profile-tags-field .add-tag-box { position: absolute; display: none; top: -20px; padding: 5px; background: #fff; box-shadow: 0 0 8px 0px #aaa; top: -70px;left: 5px}",".profile-tags-field .add-tag-box input { padding: 3px; }",".profile-tags-field .add-tag-box p { text-align: right; margin-top: 5px;}",".profile-tags-field .add-tag-box p a { color: #111; margin-left: 5px; }",".profile-tags-field .add-tag-box p a.add-tag-btn { background:#bdded6; padding: 2px 5px; }"].join(""));{var n=$(".add-tag-box"),r=$(".add-tag-input");$(".add-tag-btn").on("click",function(t){t.preventDefault();var o=$.trim(r.val());return o?i.mapHistory[o]?(alert("标签已存在"),r.focus()):(n.hide(),i.add(o,a(function(a){var t=$("<span>"+o+"</span>");e(t),t.attr("data-id",a.tag_id),t.insertBefore(d),i.mapHistory[o.toLowerCase()]=a.tag_id||1,r.val("")})),void 0):r.val("").focus()}),$(".add-tag-cancel").on("click",function(a){a.preventDefault(),n.hide()})}$(".add-tag-hook").on("click",function(a){a.preventDefault(),n.toggle(),n.is(":hidden")||r.focus()})})}();
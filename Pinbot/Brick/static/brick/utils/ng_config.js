!function(){angular.module("app.config",[]).config(["$interpolateProvider",function(e){e.startSymbol("{-"),e.endSymbol("-}")}]).config(["$httpProvider",function(e){e.defaults.xsrfCookieName="csrftoken",e.defaults.xsrfHeaderName="X-CSRFToken",e.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",e.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",e.defaults.transformRequest=[function(e){var n=function(e){var t,o,r,a,f,i,s,u="";for(t in e)if(o=e[t],o instanceof Array)for(s=0;s<o.length;++s)f=o[s],r=t+"["+s+"]",i={},i[r]=f,u+=n(i)+"&";else if(o instanceof Object)for(a in o)f=o[a],r=t+"["+a+"]",i={},i[r]=f,u+=n(i)+"&";else void 0!==o&&null!==o&&(u+=encodeURIComponent(t)+"="+encodeURIComponent(o)+"&");return u.length?u.substr(0,u.length-1):u};return angular.isObject(e)&&"[object File]"!==String(e)?n(e):e}]}])}();
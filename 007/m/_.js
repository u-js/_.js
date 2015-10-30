//# sourceMappingURL=_.js.map
(function(){window._lastObj=null;window._modLoaded=[];window._eventStore=[];var g=function(a){return new k(a)},k=function(a){var c="undefined"===typeof a?[]:-1===a.indexOf(">")?document.querySelectorAll(a):[];this.length=c.length;this.param=a;this.version="0.0.7";this.revision="r151030-2";this.fullversion=this.version+this.revision;this.isBeta=this.version.match(/b/g);this.isAlpha=this.version.match(/a/g);this.isCompiled=!1;this.isStable=!this.isBeta&&!this.isAlpha;this.ScriptRX="<script[^>]*>([\\S\\s]*?)\x3c/script\\s*>";
this.JSONRX="/^/*-secure-([sS]*)*/s*$/";this.objectclass={"[object Boolean]":"boolean","[object Number":"number","[object String":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Object]":"object","[object Error]":"error"};a="Chrome"===navigator.userAgent.split(" ")[navigator.userAgent.split(" ").length-2].split("/")[0]?navigator.userAgent.split(" ")[navigator.userAgent.split(" ").length-2].split("/")[0]:navigator.userAgent.split(" ")[navigator.userAgent.split(" ").length-
1].split("/")[0];this.browser={ie:navigator.userAgent.indexOf("Trident"),firefox:"Firefox"===a,safari:"Safari"===a,opera:"OPR"===a,edge:"Edge"===a,chrome:"Chrome"===a,userAgent:navigator.userAgent,supportTouch:"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints};this.getBrowser=a;for(a=0;a<this.length;a++)this[a]=c[a],window._lastObj=c[a];return this};g.fn=k.prototype={_:function(a){return this[a]},emulatejQuery:function(){window.$=window._;window._$=window._;window.jQuery=
window._;return window._jQuery=window._},$:function(){window.alert("Hi");window.confirm("Did you know that i'm not jQuery?")?window.alert("Why did you even try this?"):window.alert("Nope, i'm not jQuery");window.alert("Thanks for using '_.js'!\n"+decodeURIComponent("%F0%9F%92%99"))},extend:function(){var a,c,b,d,e,f=arguments[0]||{},h=1,n=arguments.length,g=!1;"boolean"===typeof f&&(g=f,f=arguments[h]||{},h++);"object"===typeof f||this.isFunction(f)||(f={});h===n&&(f=this,h--);for(;h<n;h++)if(null!=
(e=arguments[h]))for(d in e)a=f[d],b=e[d],f!==b&&(g&&b&&(this.isPlainObject(b)||(c=this.isArray(b)))?(c?(c=!1,a=a&&this.isArray(a)?a:[]):a=a&&this.isPlainObject(a)?a:{},f[d]=this.extend(g,a,b)):void 0!==b&&(f[d]=b));return f},isArray:function(a){return a.isArray||"array"===this.type(a)},on:function(a,c){var b=this.length;if("function"===typeof c)for(;b--;)this[b].addEventListener(a,c),window._eventStore.push([window._eventStore.length+1,this[b],a,c]);else for(;b--;){var d=[],e;for(e in window._eventStore)e=
window._eventStore[e],this[b]===e[1]&&a===e[2]?e[1].removeEventListener(e[2],e[3]):d.push(e);window._eventStore=d}return null},noop:function(){},supportTouch:function(){return"ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints},appendTo:function(a){"body"===a?document.body.innerHTML+=this.param:"head"===a?document.head.innerHTML+=this.param:"."===a.substr(0,1)||"#"===a.substr(0,1)?g(a).html(this.param,!0):this._error("appendTo");return null},_error:function(a,c){"undefined"===
typeof c?console.error("_.js Error: Invalid usage of function"):console.error("_.js Error: "+c);this.startsWith(a,"#")?console.error("Please see: https://github.com/wesdegroot/_.js/wiki/module_"+a.substr(1)):this.isBeta?console.error("Please see: https://github.com/wesdegroot/_.js/wiki/flbeta_function_"+a):console.error("Please see: https://github.com/wesdegroot/_.js/wiki/function_"+a);return null},error:function(a){throw Error(a);},isFunction:function(a){return"function"===this.type(a)},type:function(a){return null==
a?a+"":"object"===typeof a||"function"===typeof a?this.objectclass[Object.prototype.toString.call(a)]||"object":typeof a},isPlainObject:function(a){var c,b={}.hasOwnProperty;if(!a||"object"!==this.type(a)||a.nodeType)return!1;try{if(a.constructor&&!b.call(a,"constructor")&&!b.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}if({}.ownLast)for(c in a)return b.call(a,c);for(c in a);return void 0===c||b.call(a,c)},require:function(a,c,b){"undefined"===typeof b&&(b=!1);if("object"===
typeof a)for(var d=a.length-1;0<=d;d--)if(-1===window._modLoaded.indexOf(a[d])){window._modLoaded.push(a[d]);a[d].match(/\.js/g)||(a[d]+=".js");this.startsWith(a[d],"_")&&!b&&(a[d]="https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+a[d].toLowerCase());var e=document.createElement("script");e.type="text/javascript";e.src=a[d];1===d&&(f.onreadystatechange="",f.onload=setTimeout(function(a){g._copy_js();a()},10,c));document.head.appendChild(e)}else g._copy_js(),c();else if("string"===
typeof a)if(-1===window._modLoaded.indexOf(a)){window._modLoaded.push(a);a.match(/\.js/g)||(a+=".js");this.startsWith(a,"_")&&!b&&(a="https://raw.githubusercontent.com/wesdegroot/_.js/master/latest/modules/"+a.toLowerCase());var f=document.createElement("script");f.type="text/javascript";f.src=a;f.onreadystatechange="";f.onload=setTimeout(function(a){g._copy_js();a()},10,c);document.head.appendChild(f)}else g._copy_js(),c();else console.error("Please use only a array, or a string.");return null},
format:function(){var a=arguments,c=1;return a[0].replace(/%((%)|s|d)/g,function(b){var d=null;if(b[2])d=b[2];else{d=a[c];switch(b){case "%d":d=parseFloat(d),isNaN(d)&&(d=0)}c++}return d})},hide:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].style.display="none";return this},html:function(a,c){for(var b=this.length;b--;){window._lastObj=this[b];if("undefined"===typeof a)return this[b].innerHTML;this[b].innerHTML="undefined"===typeof c?a:this[b].innerHTML+a}return this},show:function(){for(var a=
this.length;a--;)window._lastObj=this[a],this[a].style.display="block";return this},framebreak:function(){window.top.location!==window.location&&(window.top.location.href=document.location.href);return!1},ajaxPOST:function(a,c){for(var b=this.length;b--;){window._lastObj=this[b];var d,e=this[b];d=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");for(var f=a.elements,h=a.action,g="",k,l=0;l<f.length;l++)(k="select"===f[l].tagName.toLowerCase()?f[l].options[f[l].selectedIndex].value:
f[l].value)&&(g+=f[l].name+"="+encodeURIComponent(k)+"&");g+="AJAXby="+encodeURIComponent("_.js");d.open("POST",h,!0);d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.onreadystatechange=function(){if(4===d.readyState&&200===d.status){e.innerHTML=d.responseText;for(var a=e.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=e.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&a[b].setAttribute("onsubmit","event.preventDefault();_('."+
e.className+"').ajaxPOST(this);")}};d.send(g)}return!1},ajax:function(a,c){for(var b=this.length;b--;){window._lastObj=this[b];var d,e=this[b];d=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");d.onreadystatechange=function(){if(4===d.readyState&&200===d.status){e.innerHTML=d.responseText;for(var a=e.getElementsByTagName("script"),b=0,c=a.length;b<c;b++)eval(a[b].innerHTML);a=e.getElementsByTagName("form");b=0;for(c=a.length;b<c;b++)"post"===a[b].method.toLowerCase()&&
a[b].setAttribute("onsubmit","event.preventDefault();_('."+e.className+"').ajaxPOST(this);")}};d.open("GET",a,!0);d.send()}return!1},noConflict:function(){"object"===typeof p&&(window._=p);return g},isLocal:function(){return"file:"!==window.location.protocol?window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)?!0:!1:!0},requireSSL:function(){"https:"===window.location.protocol||"file:"===window.location.protocol||window.location.href.match(/(localhost|127\.0\.0\.1|::1)/g)||(window.location.href=
"https:"+window.location.href.substring(window.location.protocol.length))},loadExtension:function(a,c){console.error("Please do not use _().loadExtension(...) anymore");return this.require(a,c)},isUndefined:function(a){return"undefined"===typeof a},isEmpty:function(a){return""===a},isBlank:function(a){return/^\s*$/.test(a)},stripTags:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,"");return null},
stripScripts:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].innerHTML=this[a].innerHTML.replace(new RegExp(this.ScriptRX,"img"),"");return null},css:function(a,c){for(var b=this.length;b--;){window._lastObj=this[b];if(this.isUndefined(c))return window.getComputedStyle(this[b]).getPropertyValue(a);a.replace(/-/g,"");this[b].setAttribute("style",a+":"+c+";");return this}},escapeHTML:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},unescapeHTML:function(a){return a.replace(/&lt;/g,
"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")},toArray:function(a){if("string"===typeof a)return a.split("");var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(a[b]);return c},runTest:function(a,c){return"function"!==typeof a?String(a)===String(c):String(a())===String(c)},includes:function(a,c){return-1<a.indexOf(c)},startsWith:function(a,c){return 0===a.lastIndexOf(c,0)},endsWith:function(a,c){var b=a.length-c.length;return 0<=b&&a.indexOf(c,b)===b},capitalize:function(a){return a.charAt(0).toUpperCase()+
a.substring(1).toLowerCase()},camelize:function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},scrollToBottom:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].scrollTop=0;return!0},scrollToTop:function(){for(var a=this.length;a--;)window._lastObj=this[a],this[a].scrollTop=this[a].scrollHeight;return!0},map:function(a,c){for(var b=[],d=0;d<a.length;d++){var e=c(d,a[d]);"undefined"===typeof e&&g.error("ERROR WHILE MAPPING");if("string"===typeof e[0])for(var f=
0;f<e.length;f++)b.push(e[f]);else b.push(c(d,a[d]))}return b},each:function(a,c){var b=[],d=0,e;for(e in a)a.hasOwnProperty(e)&&(isNaN(e)?b.push(c(e,a[e])):(b.push(c(d,a[e])),d++));return b},merge:function(){for(var a={},c,b=0;b<arguments.length;b++)for(c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},truncate:function(a,c){for(var b=this.length;b--;)window._lastObj=this[b],a=a||30,c=this.isUndefined(c)?"...":c,this[b].innerHTML=this[b].innerHTML.length>a?this[b].innerHTML.substring(0,
a)+c:String(this[b].innerHTML);return!0},_copy_js:function(){var a=new k,c;for(c in a)eval("_."+c+" = tLib."+c+";");return null}};var q=new k,m;for(m in q)eval("_."+m+" = tLib."+m+";");if(window._)var p=window._;return window._=g})();var _JSLoaded=document.createEvent("CustomEvent");_JSLoaded.initEvent("_.jsLoaded",!0,!0,{});window.dispatchEvent(_JSLoaded);

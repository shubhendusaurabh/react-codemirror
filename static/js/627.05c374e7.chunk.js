(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[627],{706:function(t,e,r){!function(t){"use strict";t.registerHelper("wordChars","r",/[\w.]/),t.defineMode("r",(function(e){function r(t){for(var e={},r=0;r<t.length;++r)e[t[r]]=!0;return e}var n=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],i=["list","quote","bquote","eval","return","call","parse","deparse"],a=["if","else","repeat","while","function","for","in","next","break"];t.registerHelper("hintWords","r",n.concat(i,a));var o,c=r(n),l=r(i),u=r(a),f=r(["if","else","repeat","while","function","for"]),s=/[+\-*\/^<>=!&|~$:]/;function p(t,e){o=null;var r,n=t.next();if("#"==n)return t.skipToEnd(),"comment";if("0"==n&&t.eat("x"))return t.eatWhile(/[\da-f]/i),"number";if("."==n&&t.eat(/\d/))return t.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(n))return t.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==n||'"'==n)return e.tokenize=(r=n,function(t,e){if(t.eat("\\")){var n=t.next();return"x"==n?t.match(/^[a-f0-9]{2}/i):("u"==n||"U"==n)&&t.eat("{")&&t.skipTo("}")?t.next():"u"==n?t.match(/^[a-f0-9]{4}/i):"U"==n?t.match(/^[a-f0-9]{8}/i):/[0-7]/.test(n)&&t.match(/^[0-7]{1,2}/),"string-2"}for(var i;null!=(i=t.next());){if(i==r){e.tokenize=p;break}if("\\"==i){t.backUp(1);break}}return"string"}),"string";if("`"==n)return t.match(/[^`]+`/),"variable-3";if("."==n&&t.match(/.[.\d]+/))return"keyword";if(/[\w\.]/.test(n)&&"_"!=n){t.eatWhile(/[\w\.]/);var i=t.current();return c.propertyIsEnumerable(i)?"atom":u.propertyIsEnumerable(i)?(f.propertyIsEnumerable(i)&&!t.match(/\s*if(\s+|$)/,!1)&&(o="block"),"keyword"):l.propertyIsEnumerable(i)?"builtin":"variable"}return"%"==n?(t.skipTo("%")&&t.next(),"operator variable-2"):"<"==n&&t.eat("-")||"<"==n&&t.match("<-")||"-"==n&&t.match(/>>?/)?"operator arrow":"="==n&&e.ctx.argList?"arg-is":s.test(n)?"$"==n?"operator dollar":(t.eatWhile(s),"operator"):/[\(\){}\[\];]/.test(n)?(o=n,";"==n?"semi":null):null}function d(t,e,r){t.ctx={type:e,indent:t.indent,flags:0,column:r.column(),prev:t.ctx}}function m(t,e){var r=t.ctx;t.ctx={type:r.type,indent:r.indent,flags:r.flags|e,column:r.column,prev:r.prev}}function x(t){t.indent=t.ctx.indent,t.ctx=t.ctx.prev}return{startState:function(){return{tokenize:p,ctx:{type:"top",indent:-e.indentUnit,flags:2},indent:0,afterIdent:!1}},token:function(t,e){if(t.sol()&&(0==(3&e.ctx.flags)&&(e.ctx.flags|=2),4&e.ctx.flags&&x(e),e.indent=t.indentation()),t.eatSpace())return null;var r=e.tokenize(t,e);return"comment"!=r&&0==(2&e.ctx.flags)&&m(e,1),";"!=o&&"{"!=o&&"}"!=o||"block"!=e.ctx.type||x(e),"{"==o?d(e,"}",t):"("==o?(d(e,")",t),e.afterIdent&&(e.ctx.argList=!0)):"["==o?d(e,"]",t):"block"==o?d(e,"block",t):o==e.ctx.type?x(e):"block"==e.ctx.type&&"comment"!=r&&m(e,4),e.afterIdent="variable"==r||"keyword"==r,r},indent:function(t,r){if(t.tokenize!=p)return 0;var n=r&&r.charAt(0),i=t.ctx,a=n==i.type;return 4&i.flags&&(i=i.prev),"block"==i.type?i.indent+("{"==n?0:e.indentUnit):1&i.flags?i.column+(a?0:1):i.indent+(a?0:e.indentUnit)},lineComment:"#"}})),t.defineMIME("text/x-rsrc","r")}(r(9))}}]);
//# sourceMappingURL=627.05c374e7.chunk.js.map
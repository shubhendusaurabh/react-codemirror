(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[600],{677:function(r,t,n){!function(r){"use strict";r.defineMode("http",(function(){function r(r,t){return r.skipToEnd(),t.cur=o,"error"}function t(t,e){return t.match(/^HTTP\/\d\.\d/)?(e.cur=n,"keyword"):t.match(/^[A-Z]+/)&&/[ \t]/.test(t.peek())?(e.cur=i,"keyword"):r(t,e)}function n(t,n){var i=t.match(/^\d+/);if(!i)return r(t,n);n.cur=e;var u=Number(i[0]);return u>=100&&u<200?"positive informational":u>=200&&u<300?"positive success":u>=300&&u<400?"positive redirect":u>=400&&u<500?"negative client-error":u>=500&&u<600?"negative server-error":"error"}function e(r,t){return r.skipToEnd(),t.cur=o,null}function i(r,t){return r.eatWhile(/\S/),t.cur=u,"string-2"}function u(t,n){return t.match(/^HTTP\/\d\.\d$/)?(n.cur=o,"keyword"):r(t,n)}function o(r){return r.sol()&&!r.eat(/[ \t]/)?r.match(/^.*?:/)?"atom":(r.skipToEnd(),"error"):(r.skipToEnd(),"string")}function c(r){return r.skipToEnd(),null}return{token:function(r,t){var n=t.cur;return n!=o&&n!=c&&r.eatSpace()?null:n(r,t)},blankLine:function(r){r.cur=c},startState:function(){return{cur:t}}}})),r.defineMIME("message/http","http")}(n(9))}}]);
//# sourceMappingURL=600.19569e20.chunk.js.map
(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[323],{366:function(e,a){!function(e){var a={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,n=/\\[wsd]|\.|\\p{[^{}]+}/i,i="(?:[^\\\\-]|"+r.source+")",s=RegExp(i+"-"+i),t={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"},c=[/\\(?![123][0-7]{2})[1-9]/,{pattern:/\\k<[^<>']+>/,inside:{"group-name":t}}];e.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0},"charset-punctuation":/^\[|\]$/,range:{pattern:s,inside:{escape:r,"range-punctuation":/-/}},"special-escape":a,charclass:n,backreference:c,escape:r}},"special-escape":a,charclass:n,backreference:c,anchor:/[$^]|\\[ABbGZz]/,escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,inside:{"group-name":t}},/\)/],quantifier:/[+*?]|\{(?:\d+,?\d*)\}/,alternation:/\|/},["actionscript","coffescript","flow","javascript","typescript","vala"].forEach((function(a){var r=e.languages[a];r&&(r.regex.inside={"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/,"language-regex":{pattern:/[\s\S]+/,inside:e.languages.regex}})}))}(Prism)}}]);
//# sourceMappingURL=323.28d9adb6.chunk.js.map
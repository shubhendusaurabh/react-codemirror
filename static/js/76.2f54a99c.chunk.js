(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[76],{119:function(e,s){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,(function(e,r){return"(?:"+s[+r]+")"}))}function r(e,r,n){return RegExp(s(e,r),n||"")}function n(e,s){for(var r=0;r<s;r++)e=e.replace(/<<self>>/g,(function(){return"(?:"+e+")"}));return e.replace(/<<self>>/g,"[^\\s\\S]")}var a="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",t="class enum interface struct",i="add alias ascending async await by descending from get global group into join let nameof notnull on orderby partial remove select set unmanaged value when where where",o="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function c(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var u=c(t),l=RegExp(c(a+" "+t+" "+i+" "+o)),d=c(t+" "+i+" "+o),p=c(a+" "+t+" "+o),g=n(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),b=n(/\((?:[^()]|<<self>>)*\)/.source,2),h=/@?\b[A-Za-z_]\w*\b/.source,f=s(/<<0>>(?:\s*<<1>>)?/.source,[h,g]),m=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[d,f]),k=/\[\s*(?:,\s*)*\]/.source,y=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[g,b,k]),w=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[y]),v=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[w,m,k]),x={keyword:l,punctuation:/[<>()?,.:[\]]/},$=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,_=/"(?:\\.|[^\\"\r\n])*"/.source,B=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:r(/(^|[^$\\])<<0>>/.source,[B]),lookbehind:!0,greedy:!0},{pattern:r(/(^|[^@$\\])<<0>>/.source,[_]),lookbehind:!0,greedy:!0},{pattern:RegExp($),greedy:!0,alias:"character"}],"class-name":[{pattern:r(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[m]),lookbehind:!0,inside:x},{pattern:r(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[h,v]),lookbehind:!0,inside:x},{pattern:r(/(\busing\s+)<<0>>(?=\s*=)/.source,[h]),lookbehind:!0},{pattern:r(/(\b<<0>>\s+)<<1>>/.source,[u,f]),lookbehind:!0,inside:x},{pattern:r(/(\bcatch\s*\(\s*)<<0>>/.source,[m]),lookbehind:!0,inside:x},{pattern:r(/(\bwhere\s+)<<0>>/.source,[h]),lookbehind:!0},{pattern:r(/(\b(?:is|as)\s+)<<0>>/.source,[v]),lookbehind:!0,inside:x},{pattern:r(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+in))/.source,[v,p,h]),inside:x}],keyword:l,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:r(/([(,]\s*)<<0>>(?=\s*:)/.source,[h]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:r(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[h]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:r(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source,[b]),lookbehind:!0,alias:"class-name",inside:x},"return-type":{pattern:r(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[v,m]),inside:x,alias:"class-name"},"constructor-invocation":{pattern:r(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[v]),lookbehind:!0,inside:x,alias:"class-name"},"generic-method":{pattern:r(/<<0>>\s*<<1>>(?=\s*\()/.source,[h,g]),inside:{function:r(/^<<0>>/.source,[h]),generic:{pattern:RegExp(g),alias:"class-name",inside:x}}},"type-list":{pattern:r(/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[u,f,h,v,l.source]),lookbehind:!0,inside:{keyword:l,"class-name":{pattern:RegExp(v),greedy:!0,inside:x},punctuation:/,/}},preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var E=_+"|"+$,R=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*[\s\S]*?\*\/|<<0>>/.source,[E]),S=n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[R]),2),P=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,z=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[m,S]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:r(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[P,z]),lookbehind:!0,greedy:!0,inside:{target:{pattern:r(/^<<0>>(?=\s*:)/.source,[P]),alias:"keyword"},"attribute-arguments":{pattern:r(/\(<<0>>*\)/.source,[S]),inside:e.languages.csharp},"class-name":{pattern:RegExp(m),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var j=/:[^}\r\n]+/.source,A=n(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[R]),2),J=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[A,j]),F=n(s(/[^"'/()]|\/(?!\*)|\/\*.*?\*\/|<<0>>|\(<<self>>*\)/.source,[E]),2),U=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[F,j]);function Z(s,n){return{interpolation:{pattern:r(/([^{](?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:r(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[n,j]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:r(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[J]),lookbehind:!0,greedy:!0,inside:Z(J,A)},{pattern:r(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[U]),lookbehind:!0,greedy:!0,inside:Z(U,F)}]})}(Prism),Prism.languages.dotnet=Prism.languages.cs=Prism.languages.csharp}}]);
//# sourceMappingURL=76.2f54a99c.chunk.js.map
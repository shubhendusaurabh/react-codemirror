(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[542],{839:function(n,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;o.default='/* Stylus mode */\n\n#id,\n.class,\narticle\n  font-family Arial, sans-serif\n\n#id,\n.class,\narticle {\n  font-family: Arial, sans-serif;\n}\n\n// Variables\nfont-size-base = 16px\nline-height-base = 1.5\nfont-family-base = "Helvetica Neue", Helvetica, Arial, sans-serif\ntext-color = lighten(#000, 20%)\n\nbody\n  font font-size-base/line-height-base font-family-base\n  color text-color\n\nbody {\n  font: 400 16px/1.5 "Helvetica Neue", Helvetica, Arial, sans-serif;\n  color: #333;\n}\n\n// Variables\nlink-color = darken(#428bca, 6.5%)\nlink-hover-color = darken(link-color, 15%)\nlink-decoration = none\nlink-hover-decoration = false\n\n// Mixin\ntab-focus()\n  outline thin dotted\n  outline 5px auto -webkit-focus-ring-color\n  outline-offset -2px\n\na\n  color link-color\n  if link-decoration\n    text-decoration link-decoration\n  &:hover\n  &:focus\n    color link-hover-color\n    if link-hover-decoration\n      text-decoration link-hover-decoration\n  &:focus\n    tab-focus()\n\na {\n  color: #3782c4;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #2f6ea7;\n}\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n'}}]);
//# sourceMappingURL=542.54ddd2d0.chunk.js.map
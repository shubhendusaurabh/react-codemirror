(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[543],{840:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="//\n//  TipCalculatorModel.swift\n//  TipCalculator\n//\n//  Created by Main Account on 12/18/14.\n//  Copyright (c) 2014 Razeware LLC. All rights reserved.\n//\n\nimport Foundation\n\nclass TipCalculatorModel {\n\n  var total: Double\n  var taxPct: Double\n  var subtotal: Double {\n    get {\n      return total / (taxPct + 1)\n    }\n  }\n\n  init(total: Double, taxPct: Double) {\n    self.total = total\n    self.taxPct = taxPct\n  }\n\n  func calcTipWithTipPct(tipPct: Double) -> Double {\n    return subtotal * tipPct\n  }\n\n  func returnPossibleTips() -> [Int: Double] {\n\n    let possibleTipsInferred = [0.15, 0.18, 0.20]\n    let possibleTipsExplicit:[Double] = [0.15, 0.18, 0.20]\n\n    var retval = [Int: Double]()\n    for possibleTip in possibleTipsInferred {\n      let intPct = Int(possibleTip*100)\n      retval[intPct] = calcTipWithTipPct(possibleTip)\n    }\n    return retval\n\n  }\n\n}\n\n"}}]);
//# sourceMappingURL=543.9e7d352e.chunk.js.map
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A3_T5;
 * @section: 12.13;
 * @assertion: 1. Evaluate Expression;
 * @description: Evaluating equation expression;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A3_T5",

path: "12.13",

description: "Evaluating equation expression",

test: function testcase() {
   // CHECK#1
var a=true;
var b=false;
try{
  throw ((a&&(!b))?"exception":" #1");
}
catch(e){
  if (e!=="exception") $ERROR('#1: Exception ==="exception"(operaton ? , ). Actual:  Exception ==='+e  );
}

 }
});


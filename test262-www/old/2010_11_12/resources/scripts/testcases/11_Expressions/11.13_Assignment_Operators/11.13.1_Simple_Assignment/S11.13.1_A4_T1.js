// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.1_A4_T1;
 * @section: 11.13.1;
 * @assertion: AssignmentExpression : LeftHandSideExpression = AssignmentExpression;
 * @description: Syntax check;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.1_A4_T1",

path: "11.13.1",

description: "Syntax check",

test: function testcase() {
   //CHECK#1
x = x = 1;
if (x !== 1) {
  $ERROR('#1: The expression x = x = 1 is the same x = (x = 1), not (x = x) = 1. Actual: ' + (x));
}



 }
});


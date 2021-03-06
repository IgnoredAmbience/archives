// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A4_T1;
* @section: 12.6.2, 12.8;
* @assertion: "break" within a "while" Statement is allowed and performed as described in 12.8;
* @description: "break" within a "while" Statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A4_T1",

path: "12.6.2, 12.8",

description: "\"break\" within a \"while\" Statement",

test: function testcase() {
   while(1===1){
    __in__do__before__break="reached"; 
    break;
     __in__do__after__break="where am i";
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do__before__break !== "reached") {
	$ERROR('#1: __in__do__before__break === "reached". Actual:  __in__do__before__break ==='+ __in__do__before__break  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __in__do__after__break !== "undefined") {
	$ERROR('#2: typeof __in__do__after__break === "undefined". Actual:  typeof __in__do__after__break ==='+ typeof __in__do__after__break  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});


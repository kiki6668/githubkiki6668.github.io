for (var i = 1, u = 7; i <= 7, u >= 0; i++, u--) {
    if (i % 2 === 0) {
        continue;
    }
    for (var k = 0, ff = ""; k < u / 2; k++) {
        ff += " "
    }
    for (var j = 1; j <= i; j++) {
        ff += "*"
    }

    console.log(ff)
}
/* 
*
*** 
*****
*******

 *
***

  *
 ***
*****

   *
  ***
 *****
*******

*/
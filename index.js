/* ELSE IF statement is added after the IF statement with similer syntax.

if (condition1) { block of code is executed if condition1   is TRUE }

else if (condition2) { block of code is exectued if condition1 is FALSE, but      condition 2 is TRUE }

else { block of code executed if condition1 and condition2 are both FALSE }

*/

if (2>1)  {
  console.log("if statement was executed");
  
} else if (2>1) {
  console.log("else if statement was executed");

}else {
  console.log("else statement was executed");

};

/* since 2 is greater than 1 , condition is evaluted to TRUE, this Boolean means that the block code under the IF condition was executed, the interpreter did not go to the ELSE IF nor to the ELSE condition */


if (2>5)  {
  console.log("if statement was executed");

} else if (2>1) {
  console.log("else statement was executed");

} else {
  console.log("else statement was executed");
}

/* IF conditionwas FALSE, so it went to the next line ELSE IF, this condition was TRUE, so it stopped there, and didnt read the ELSE statement */


if (2>5) {
  console.log("if statement was executed");


} else if (2>8) {
  console.log ("ELSE IF statement was executed");


} else if (2>100) {
  console.log("second ELSE IF statement was executed");

} else if (2>10)  {
  console.log("third ELSE IF statement was executed");

} else {
  console.log("else statement was executed");

}

/* js just moves on to the ELSE IF statement if it isnt TRUE, you can have a smany ELSE IF statement, otherwise it will move onto ELSE statement */

/* loops are a great way for us to repeat a set of steps.
If you have something you want to do multiple times in a row,
 or until something happens, loops are an ideal solution

 Two types of loops
 -While loops
 -For loops

 While loops:
 while(condition) {
    // code goes here
 }

 code will repeat as long as the condition is true.

 ex:  */
 let i = 0;
 while (i<3){
    console.log(i);
    i++; // shorthand for i += 1, a shorthand for i=i+1
 }

 /* a single time through a loop is called an iteration.
 while loops will continue until their condition become falsy
 Remember, 0 is falsy */

 // i is already 3 because of the prior loop

 while(i) {
    console.log("banana")
    i--
   }
   /* there is a second version of while called a do . . . while loop
   main dif is that a do . . . while loop will always execute at least once.

   Do . . . While:

   do { 
   // code goes here
   }  while (condition)
     */ 

   let a = 0
   do{
      a += 1
   } while (a<-1)

/* other kind is for, js fancy while loops, more commonly used
Structure
for(begin;condtion;step) {
   //Code goes here
}
ex: */ 
for (let j = 0; j < 5; j++){
   console.log(`j = ${j}`);
}
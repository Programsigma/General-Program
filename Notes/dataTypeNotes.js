//These will be notes on data types

//There are 8 datatypes in javaScript
/*
1. numbers (both integers and floating point)
        - In adition to traditional numbers, the number 
        data type includes Infinity and NaN (Not a Number)

        2. BigInt 
        a datatype for very large numbers javaScript starts to approximate the value
        We can override this with a BigIngt, which we form by adding a lowercase 'n' to the end of the number

        3. String
        Letters, words, charachters, numbers, symbols, that are treated like text.
        */
       console.log (2+3);
       console.log ("2"+"3");
       // + with strings produces "concatenation": connecting 2 symbols 1 after the other
       /* Strings are generally formed by encapsulating symbols in quotation marks. In JavaScript
       there are 3 types of quotation marks you can use. 

       1. Double quotation mark
       "Hello"
       2. Single Quotation Mark
       'Hello'
       3. Backticks
       `Hello`
       */
      console.log ("Hello, world!");
      console.log ('Hello, world!');
      console.log ("This is Mr. Smith's output");
      console.log ('"Nevermore", qouth the Raven');

      // If your string contains an apostrophe, use double quotes
      // If your string contains a quotation, use single quotes
      // Backticks allow you to embed variables into a string
      let myName = "Steve";
      console.log(`Hello, ${myName}`);
      // you can also do math or other operations inside of curley brackets
      console.log(`2 + 3 = ${2+3}`);

//Many languages have a 'char' datatype, representing a single character, javaScript does not.

/* Boolean
Boolean is named for George Boole, who did a lot of work with formal logic
Namely ways to make decisions using true and false statements. The boolean datatype can hold only 2 values: true OR false

/* Null
This is a special datatype. It contains only one value: null.
"null" in javaScript means nothing, empty, or value unknown

/* Undefined
Another special datatype. It contains only 1 value: Undefined. It means that the value hasn't been assigned.

Last 2 datatypes would be Objects and Symbols, which are related, and are likely beyond the scope of this class.
If you need to know the type of a variable, you can use the typeof() fxn. */

console.log(typeof("Word"))
console.log(typeof(365))
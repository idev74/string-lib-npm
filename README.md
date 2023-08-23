# string-it-on Node Module
[![npm version](https://img.shields.io/npm/v/string-it-on.svg)](https://www.npmjs.com/package/string-it-on)
[![npm downloads](https://img.shields.io/npm/dt/string-it-on.svg)](https://www.npmjs.com/package/string-it-on)

#### A simple node module that performs string manipulation! This includes:
- Capitalizing sentences
- All caps
- Capitalizing each word
- Capitalizing titles
- Removing extra spaces
- Transforming into kebab-case, snake_case, camelCase, and PascalCase
- Turning a sentence into hashtags
- Testing if a string is empty!

### Output
```
capitalizeSentence('hello'); // "Hello"
allCaps('hello'); // "HELLO"
capitalizeWords('hello world'); // "Hello World"
capitalizeHeadline('the hello in for the world'); // "The Hello in for the World"
removeExtraSpaces('   Hello   World   '); // "Hello World"
kebabCase('Hello World'); // "hello-world"
snakeCase('Hello World'); // "hello_world"
camelCase('Hello World'); // "helloWorld"
pascalCase('Hello World'); // "HelloWorld"
shift('Hello World'); // "ello WorldH"
makeHashTag('Amazing bongo drums for sale'); // "#amazing #bongo #drums"
isEmpty(''); // true
isEmpty('Hello'); // false
isEmpty('   '); // true
isEmpty(`\n 
    \t 
 \r   `); // true
```

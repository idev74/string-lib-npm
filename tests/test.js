const strFunc = require('../index');

test('capitalizeSentence capitalizes a sentence', () => {
    expect(strFunc.capitalizeSentence('hello, how are you?')).toBe('Hello, how are you?');
  });

test('allCaps capitalizes a string', () => {
    expect(strFunc.allCaps('hello')).toBe('HELLO');
});

test('capitalizeWords capitalizes each word in a string', () => {
    expect(strFunc.capitalizeWords('hello world')).toBe('Hello World');
});

test('capitalizeHeadline capitalizes words in a string like a title', () => {
    expect(strFunc.capitalizeHeadline('the brown fox in the woods')).toBe('The Brown Fox in the Woods');
});

test('removeExtraSpaces removes all spaces from a string', () => {
    expect(strFunc.removeExtraSpaces('   hello   world   ')).toBe('hello world');
});

test('kebabCase replaces spaces with hyphens and makes all letters lowercase', () => {
    expect(strFunc.kebabCase('hello world')).toBe('hello-world');
});

test('snakeCase replaces spaces with underscores and makes all letters lowercase', () => {
    expect(strFunc.snakeCase('hello world')).toBe('hello_world');
});

test('camelCase removes spaces and capitalizes all words except for the first', () => {
    expect(strFunc.camelCase('hello world')).toBe('helloWorld');
});

test('pascalCase removes spaces and capitalizes all words', () => {
    expect(strFunc.pascalCase('hello world')).toBe('HelloWorld');
});

test('shift moves the first character of a string to the end', () => {
    expect(strFunc.shift('hello')).toBe('elloh');
});

test('makeHashTag returns the longest three words in a string as hashtags', () => {
    expect(strFunc.makeHashTag('a set of aquarium plants and snails for sale')).toBe('#aquarium #plants #snails');
});
function capitalizeSentence(str) {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

function allCaps(str) {
    return str.toUpperCase();
}

function capitalizeWords(str) {
    let words = str.split(' ');
    let capitalized = words.map((word) => {
        return capitalizeSentence(word);
    });
    return capitalized.join(' ');
}

function capitalizeHeadline(str) {
    let words = str.split(' ');
    const nonCapitalized = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'and', 'as', 'at', 'of', 'for', 'by'];
    for (word in words) {
        if (nonCapitalized.includes(words[word]) && word != 0) {
            words[word] = words[word].toLowerCase();
        } else {
            words[word] = capitalizeSentence(words[word]);
        }
    }
    return words.join(' ');
}

function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}

function kebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}

function snakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}

function camelCase(str) {
    let words = str.split(' ');
    let camel = words.map((word, index) => {
        if (index == 0) {
            return word.toLowerCase();
        } else {
            return capitalizeSentence(word);
        }
    });
    return camel.join('');
}

function pascalCase(str) {
    let words = str.split(' ');
    let pascal = words.map((word) => {
        return capitalizeSentence(word);
    });
    return pascal.join('');
}

function shift(str) {
    return str.slice(1) + str.charAt(0);
}

function makeHashTag(str) {
    let words = str.split(' ');
    let longest = words.sort((a, b) => {
        return b.length - a.length;
    }
    ).slice(0, 3);
    let hashTags = longest.map((word) => {
        word = word.toLowerCase();
        return `#${word}`;
    });
    return hashTags.join(' ');
}

function isEmpty(str) {
    breaks = ['\n', '\r', '\t'];
    const trimmed = breaks.includes(str) ? str.replace(/\n/g, '').trim() : str.trim();
    return trimmed.length == 0;
}


console.log(capitalizeSentence('hello')); // "Hello"
console.log(allCaps('hello')); // "HELLO"
console.log(capitalizeWords('hello world')); // "Hello World"
console.log(capitalizeHeadline('the hello in for the world')); // "The Hello in for the World"
console.log(removeExtraSpaces('   Hello   World   ')); // "Hello World"
console.log(kebabCase('Hello World')); // "hello-world"
console.log(snakeCase('Hello World')); // "hello_world"
console.log(camelCase('Hello World')); // "helloWorld"
console.log(pascalCase('Hello World')); // "HelloWorld"
console.log(shift('Hello World')); // "ello WorldH"
console.log(makeHashTag('Amazing bongo drums for sale')); // "#amazing #bongo #drums"
console.log(isEmpty('')); // true
console.log(isEmpty('Hello')); // false
console.log(isEmpty('   ')); // true
console.log(isEmpty(`\n 
    \t 
 \r   `)); // true

 module.exports = {
    capitalizeSentence,
    allCaps,
    capitalizeWords,
    capitalizeHeadline,
    removeExtraSpaces,
    kebabCase,
    snakeCase,
    camelCase,
    pascalCase,
    shift,
    makeHashTag,
    isEmpty
}

function capitalizeSentence(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}

function allCaps(str) {
  return str.toUpperCase();
}

function capitalizeWords(str) {
  const words = str.split(' ');
  const capitalized = words.map((word) => capitalizeSentence(word));
  return capitalized.join(' ');
}

function capitalizeHeadline(str) {
  const words = str.split(' ');
  const nonCapitalized = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'and', 'as', 'at', 'of', 'for', 'by'];

  words.forEach((word, index) => {
    if (nonCapitalized.includes(word) && index !== 0) {
      words[index] = word.toLowerCase();
    } else {
      words[index] = capitalizeSentence(word);
    }
  });

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
  const words = str.split(' ');
  const camel = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    }
    return capitalizeSentence(word);
  });
  return camel.join('');
}

function pascalCase(str) {
  const words = str.split(' ');
  const pascal = words.map((word) => capitalizeSentence(word));
  return pascal.join('');
}

function shift(str) {
  return str.slice(1) + str.charAt(0);
}

function makeHashTag(str) {
  const words = str.split(' ');
  const longest = words.sort((a, b) => b.length - a.length).slice(0, 3);
  const hashTags = longest.map((word) => `#${word.toLowerCase()}`);
  return hashTags.join(' ');
}

function isEmpty(str) {
  const breaks = ['\n', '\r', '\t'];
  const trimmed = breaks.includes(str) ? str.replace(/\n/g, '').trim() : str.trim();
  return trimmed.length === 0;
}

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
  isEmpty,
};

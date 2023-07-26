const palindromes = function (startWord) {
    startWord = startWord
        .replace(/[^A-Za-z0-9]/gi, '')
        .toLowerCase();

    const endWord = startWord
        .split('')
        .reverse()
        .join('')
        .replace(/[^A-Za-z0-9]/gi, '')
        .toLowerCase();

    if (startWord === endWord) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

return words.reduce((acc, word) => {
    let res = [];
    for (let i = 0; i < acc.length; i++) {
      if (word.indexOf(acc[i]) !== -1) {
        res.push(acc[i]);
        word = word.replace(acc[i], "");
      }
    }
    return res;
  }, words[0].split(""));
};

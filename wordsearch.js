const wordSearch = (letters, word) => {
  if (letters === undefined || letters === typeof Number) { 
    return false;
  }  
  const horizontalJoin = letters.map(ls => ls.join(''))
    for (const l of horizontalJoin) {
        if (l.includes(word))
            return true;
    }
    const lettersTransposed = transpose(letters);
    const horizontalJoin1 = lettersTransposed.map(ls => ls.join(''))
    for (const l of horizontalJoin1) {
        if (l.includes(word))
            return true;
    }
    return false;
};

const transpose = function(matrix) {
    let newArray = [];
    for (let i = 0; i < matrix[0].length; i++) {
      newArray.push([]);
    }
    for (let j = 0; j < matrix.length; j++) {
      for (let c = 0; c < matrix[j].length; c++) {
        newArray[c][j] = matrix[j][c];
      }
    }
    return newArray;
  };

module.exports = wordSearch
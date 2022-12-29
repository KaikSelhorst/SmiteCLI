const helpers = {
  toCaptalize(string, dash) {
    let newString;
    if (dash === true)
      newString = string
        .toLowerCase()
        .trim()
        .split(/[\s-]/)
        .map((word) => captalize(word));
    else
      newString = string
        .toLowerCase()
        .trim()
        .split(" ")
        .map((word) => captalize(word));

    function captalize(word) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return newString.join(" ");
  },
  inColumns(array, Columns, ColumnWidth) {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].padEnd(ColumnWidth, " ") + "\t";
    }
    while (array.length > 0) {
      newArr.push(...array.splice(0, Columns), "\n");
    }
    return newArr.join("");
  },
};
module.exports = helpers;

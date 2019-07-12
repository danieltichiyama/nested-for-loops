/**
 * Returns a string representation of a 2-dimensional data structure
 * @param {number} depth
 * @param {number} [width=depth]
 * @returns {string}
 */
function nestedForLoops(depth, width = depth) {
  let result = "\n";
  // Write code here

  for (let i = 0; i < depth; i++) {
    for (let j = 0; j < width; j++) {
      if (j + 1 === width) {
        result = result.concat("{x:" + j + ", y:" + i + "}");
      } else {
        result = result.concat("{x:" + j + ", y:" + i + "}, ");
      }
    }

    result = result.concat("\n");
  }

  return result;
}

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));

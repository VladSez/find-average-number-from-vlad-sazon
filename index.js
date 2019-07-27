export function findAverageNumber(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not not an array");
  }
  if (arr.length < 1) {
    throw new Error("Empty array");
  }

  let sum = 0;
  for (let el of arr) {
    if (typeof el !== "number") {
      throw new Error(
        `Array must be consisted from numbers. For example: [1,2,3]`
      );
    }
    sum += el;
  }
  return sum / arr.length;
}

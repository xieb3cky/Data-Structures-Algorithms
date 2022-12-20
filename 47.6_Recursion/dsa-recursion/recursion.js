/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1
  return nums[idx] * product(nums, idx + 1);
}


/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, length = 0) {
  if (idx === words.length) return length;
  length = Math.max(words[idx].length, length);
  return longest(words, idx + 1, length);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherWord = "") {
  if (idx >= str.length) return everyOtherWord;
  everyOtherWord += str[idx];
  return everyOther(str, idx + 2, everyOtherWord);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) return true;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, left + 1, right - 1)
}



/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, reversedString = "") {
  if (reversedString.length === str.length) return reversedString;
  reversedString += str[str.length - 1 - idx];
  return revString(str, idx + 1, reversedString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = []
  for (key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key])
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]))
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val, left = 0, right = arr.length - 1) {
//   if (right >= left) {
//     let mid = l + Math.floor((right - left) / 2);
//     if (arr[mid] === val) return mid;
//     if (arr[mid] > val) {
//       return binarySearch(arr, val, left, mid - 1);
//     }
//     return binarySearch(arr, val, mid + 1, right);
//   }
//   return -1;
// }

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let md = Math.floor((right + left) / 2);

  if (arr[md] === val) {
    return md;
  }
  if (arr[md] > val) {
    return binarySearch(arr, val, left, md - 1);
  }
  return binarySearch(arr, val, md + 1, right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

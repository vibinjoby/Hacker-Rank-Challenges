//Sales by Match
//https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

/**
 *
 * ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
 * n = 9
 * Output --> 3
 */

function sockMerchant() {
  let ar = [1, 2, 1, 2, 1, 3, 2];
  let n = 7;
  let pairs = 0;
  let pos = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (ar[j] === ar[i] && !pos.includes(i) && !pos.includes(j)) {
        pos = [...pos, i, j];
        pairs += 1;
        break;
      }
    }
  }
  return pairs;
}

//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen
/**
 * 8
 * UDDDUDUU
 * Output --> 1
 */

const countingValley = (steps = 12, path = "DDUUDDUDUUUD") => {
  const pathArr = path.split("");
  let count = 0;
  let valley = 0;
  for (let i = 0; i < steps; i++) {
    if (count === -1 && pathArr[i] === "U") {
      valley += 1;
    }

    if (pathArr[i] === "U") {
      count += 1;
    } else {
      count -= 1;
    }
  }
  return valley;
};

//Jumping on the Clouds
//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen

/**
 * 7
 * 0 0 1 0 0 1 0
 * Output --> 4
 */
function jumpingOnClouds(c = [0, 0, 1, 0, 0, 1, 0]) {
  let jump = 0,
    count = 0;
  while (count < c.length) {
    if (count + 2 <= c.length - 1 && c[count + 2] !== 1) {
      jump++;
      count += 2;
      continue;
    } else if (count + 1 <= c.length - 1 && c[count + 1] !== 1) {
      jump++;
    }
    count++;
  }
  return jump;
}

//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
//Repeated String
/**
 * s='aba'
 * n=10
 * output --> 7
 */
function repeatedString(s = "aba", n = 100_000_000_0) {
  let fracNumber = Math.trunc(n / s.length);
  let reminder = n % s.length;
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }
  counter = counter * fracNumber;
  for (let index = 0; index < reminder; index++) {
    if (s[index] === "a") {
      counter++;
    }
  }
  return counter;
}

//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
//2D Array - DS

/**
 *
 * Input -->
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 2 4 4 0
 * 0 0 0 2 0 0
 * 0 0 1 2 4 0
 *
 * output --> 19
 */

//3 X 3
const formatHourGlassArr = (arr) => {
  let formatedArr = [];

  //k,m
  for (let k = 0; k < 6; k++) {
    for (let m = 0; m < 6; m++) {
      if (k + 3 <= 6 && m + 3 <= 6) {
        //for 3 X 3
        let blocks = [];
        for (let i = k; i < k + 3; i++) {
          let row = [];
          for (let j = m; j < m + 3; j++) {
            row.push(arr[i][j]);
          }
          blocks.push(row);
        }
        formatedArr.push(blocks);
      }
    }
  }
  return formatedArr;
};
const calculateSumOfArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((i === 1 && j === 0) || (i === 1 && j === 2)) continue;
      sum += arr[i][j];
    }
  }
  return sum;
};

const hourglassSum = (
  arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]
) => {
  const formatedArr = formatHourGlassArr(arr);
  let sumArr = [];

  for (let i = 0; i < formatedArr.length; i++) {
    let sum = calculateSumOfArr(formatedArr[i]);
    sumArr.push(sum);
  }
  //find the max number in the array
  return sumArr.reduce((p, v) => (p > v ? p : v));
};

//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen
//Arrays: Left Rotation

/**
 * 5 4
 * 1 2 3 4 5
 *
 * output --> 5 1 2 3 4
 */
// Complete the rotLeft function below.
function rotLeft(a = [1, 2, 3, 4, 5], d = 4) {
  let tempArr = [...a];
  for (let i = 0; i < d; i++) {
    tempArr.push(tempArr[0]);
    tempArr.shift();
  }
  return tempArr;
}

//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
//New Year chaos

// Complete the minimumBribes function below.
function minimumBribes(q = [1, 2, 5, 3, 7, 8, 6, 4]) {
  let initialState = Array.from({ length: q.length }, (_, i) => i + 1);
  let duplicateInitial = [...initialState];

  let totalOperations = 0;

  for (let i = initialState.length - 1; i >= 0; i--) {
    let actualIdx = duplicateInitial.indexOf(initialState[i]);
    let expectedIdx = q.indexOf(initialState[i]);

    if (actualIdx === expectedIdx) {
      continue;
    } else {
      let count = 0;
      console.log("new iteration ---> ", initialState[i]);
      //loop through to move the items until it matches the input
      while (actualIdx !== expectedIdx) {
        const item = initialState[i];
        if (actualIdx - 1 === -1) break;
        count++;
        duplicateInitial.splice(actualIdx, 1);
        duplicateInitial.splice(actualIdx - 1, 0, item);

        console.log("duplicate initial", duplicateInitial);
        console.log("item is ==>", item);

        actualIdx = duplicateInitial.indexOf(item);
        console.log("actual idx==>", actualIdx, "item==>", item);
        console.log("expIdx==>", expectedIdx, "items==>", item);

        console.log("==========");
        if (actualIdx === expectedIdx) break;
      }
      if (count === 2) {
        totalOperations = -1;
        break;
      } else {
        totalOperations += count;
      }
    }
  }

  if (totalOperations === -1) {
    console.log("Too chaotic");
  } else {
    console.log(totalOperations);
    return totalOperations;
  }
}

//https://www.hackerrank.com/challenges/equality-in-a-array/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//Equalize the Array

/**
 * Input 5
 * 3 3 2 1 3
 *
 * Output --> 2
 */
// Complete the equalizeArray function below.
const getOccurence = (arr, number) => {
  return arr.filter((val) => number === val).length;
};
function equalizeArray(arr = [1, 2, 3, 1, 2, 3, 3, 3]) {
  const result = arr.reduce((a, b) => {
    return getOccurence(arr, b) < getOccurence(arr, a) ? a : b;
  });

  return arr.filter((val) => val !== result).length;
}

//https://www.hackerrank.com/challenges/kaprekar-numbers/problem
//Modified Kaprekar Numbers

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p = 1, q = 100) {
  const kaprekarNum = [];
  for (let i = p; i <= q; i++) {
    //square the number
    const number = (i * i).toString();
    const size = Math.ceil(number.length / 2);

    const first = parseInt(
      number.slice(0, number.length % 2 === 0 ? size : size - 1)
    );
    const last = parseInt(
      number.slice(number.length % 2 === 0 ? size : size - 1, number.length)
    );
    const sum = first + last;
    if (sum === i || i === 1) {
      kaprekarNum.push(i);
    }
  }
  const result = kaprekarNum.join(" ");

  console.log(result.length > 0 ? result : "INVALID RANGE");
}

//https://www.hackerrank.com/challenges/beautiful-triplets/problem
//Beautiful Triplets

// Complete the beautifulTriplets function below.
function beautifulTriplets(d = 3, arr = [1, 2, 4, 5, 7, 8, 10]) {
  let totalCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let expected = arr[i] + d;

    let j = arr.indexOf(expected);

    expected = arr[j] + d;

    let k = arr.indexOf(expected);

    let result1 = arr[j] - arr[i];
    let result2 = arr[k] - arr[j];

    if (result1 === result2) {
      totalCount++;
    }
  }
  return totalCount;
}

//https://www.hackerrank.com/challenges/minimum-distances/
//Minimum Distances

// Complete the minimumDistances function below.
function minimumDistances(a = [7, 1, 3, 4, 1, 7]) {
  let totalArr = [];
  for (let i = 0; i < a.length; i++) {
    let idx = a.lastIndexOf(a[i]);
    if (idx > i) {
      totalArr.push(idx - i);
    }
  }

  totalArr.sort((a, b) => a - b);

  console.log(totalArr.length === 0 ? -1 : totalArr[0]);
  return totalArr.length === 0 ? -1 : totalArr[0];
}

//https://www.hackerrank.com/challenges/halloween-sale/
//Halloween Sale

// Complete the howManyGames function below.
function howManyGames(p = 20, d = 3, m = 6, s = 70) {
  // Return the number of games you can buy
  let total = p;
  let totalCount = 0;
  let prevNum = p;
  while (total <= s) {
    prevNum -= d;
    if (prevNum < m) prevNum = m;
    console.log(prevNum);
    total += prevNum;
    totalCount++;
  }
  console.log("totalCount ==>", totalCount);
  return totalCount;
}

//https://www.hackerrank.com/challenges/the-time-in-words/problem
//The Time in Words

// Complete the timeInWords function below.
//At minutes=0, use o' clock. For 1<= minutes<=30 , use past, and for 30<minutes  use to

const getSingleNumInWords = (num) => {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 10:
      return "ten";
    default:
      return;
  }
};

const getTwoNumInWords = (num) => {
  switch (num) {
    case 11:
      return "eleven";
    case 12:
      return "twelve";
    case 13:
      return "thirteen";
    case 14:
      return "fourteen";
    case 15:
      return "fifteen";
    case 16:
      return "sixteen";
    case 17:
      return "seventeen";
    case 18:
      return "eighteen";
    case 19:
      return "nineteen";
    case 20:
      return "twenty";
    default:
      return;
  }
};

const getTensInWords = (num) => {
  switch (num) {
    case 20:
      return "twenty";
    case 30:
      return "thirty";
    case 40:
      return "fourty";
    case 50:
      return "fifty";
    case 60:
      return "sixty";
    default:
      break;
  }
};
//At minutes=0, use o' clock. For 1<= minutes<=30 , use past, and for 30<minutes  use to
const getHoursInWords = (num) => {
  if (num <= 10) {
    return getSingleNumInWords(num);
  }
  return getTwoNumInWords(num);
};
const getMinutesInWords = (num) => {
  if (num <= 10) {
    return getSingleNumInWords(num) + `${num === 1 ? " minute" : " minutes"}`;
  } else if (num % 15 === 0) {
    if (num === 30) {
      return "half";
    }
    return "quarter";
  } else if (num % 10 === 0) {
    return getTensInWords(num) + " minutes";
  } else if (num > 10 && num <= 20) {
    return getTwoNumInWords(num) + " minutes";
  }
  //split the number into two
  let firstNum = "",
    secondNum = "";
  const mins = num.toString().split("");
  firstNum = getTensInWords(parseInt(mins[0] + "0"));
  secondNum = getSingleNumInWords(parseInt(mins[1])) + " minutes";
  return firstNum + " " + secondNum;
};
function timeInWords(h = 10, m = 57) {
  let hour = "",
    minutes = "";
  if (m === 0) {
    hour = getSingleNumInWords(h);
    minutes = " o' clock";
    return hour + minutes;
  } else {
    if (m > 30) {
      //to
      h += 1;
      m = 60 - m;
      hour = getHoursInWords(h);
      minutes = getMinutesInWords(m);
      return minutes + " to " + hour;
    } else {
      //past
      hour = getHoursInWords(h);
      minutes = getMinutesInWords(m);
      return minutes + " past " + hour;
    }
  }
}

//https://www.hackerrank.com/challenges/chocolate-feast
//Chocolate Feast

// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {}

chocolateFeast();

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
/**
 *
 * Example
 * n = 15 Bobby's initial amount of money
 * c = 3 the cost of a chocolate bar
 * m = 2 the number of wrappers he can turn in for a free bar
 */

// Complete the chocolateFeast function below.
function chocolateFeast(n = 15, c = 3, m = 2) {
  let totalAmt = n,
    barCost = c,
    wrapperPerChocs = m;
  let totalChocs = totalAmt / barCost;
  let remainingChocs;
  let chocsPerWrapper;
  do {
    console.log("totalChocs", totalChocs);

    remainingChocs = totalChocs % wrapperPerChocs;

    console.log("remaining chocs==>", remainingChocs);

    chocsPerWrapper = Math.floor(totalChocs / wrapperPerChocs);

    console.log(
      "chocs per wrapper ==>",
      totalChocs / wrapperPerChocs,
      chocsPerWrapper
    );

    totalChocs += chocsPerWrapper;

    if (remainingChocs + chocsPerWrapper < wrapperPerChocs) break;

    totalChocs += remainingChocs;

    console.log("===================");
  } while (
    (remainingChocs + chocsPerWrapper) / wrapperPerChocs >
    wrapperPerChocs
  );
  console.log("remaining chocs==>", remainingChocs);
  console.log(Math.floor(totalChocs));
  return Math.floor(totalChocs);
}

//https://www.hackerrank.com/challenges/service-lane
//Service Lane

// Complete the serviceLane function below.
function serviceLane(
  n = 8,
  cases = [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ],
  width = [2, 3, 1, 2, 3, 2, 3, 3]
) {
  const result = [];
  for (let i = 0; i < cases.length; i++) {
    let entry = cases[i][0];
    let exit = cases[i][1];

    const slicedArr = width.slice(entry, exit + 1);
    result.push(slicedArr.sort((a, b) => a - b)[0]);
  }
  return result;
}

//https://www.hackerrank.com/challenges/lisa-workbook
//Lisa's Workbook
// Complete the workbook function below.
function workbook(n = 5, k = 3, arr = [4, 2, 6, 1, 10]) {
  let splPageCount = 0;
  let page = 0;
  for (let i = 0; i < n; i++) {
    const totalArr = Array.from({ length: arr[i] }, (_, i) => i + 1);
    let result = totalArr.reduce((resultArr, item, index) => {
      const chunkIndex = Math.floor(index / k);

      if (!resultArr[chunkIndex]) {
        resultArr[chunkIndex] = []; // start a new chunk
      }
      resultArr[chunkIndex].push(item);
      return resultArr;
    }, []);

    result.map((val) => {
      page++;
      if (val.includes(page)) {
        splPageCount++;
      }
    });
  }
  return splPageCount;
}

//https://www.hackerrank.com/challenges/flatland-space-stations/problem
//Flatland Space Stations

// Complete the flatlandSpaceStations function below.
/**
 *
 * n --> total cities
 * c --> total space stations
 * m --> space station array index
 * 99999
 * 9068,51274,31156,83320,61341,96205,33776,31861,9629,1559,34961,85916,69395,667,47589,5441,24811,42347,69014,80599,16556,10927,56141,1223,25974,62267,28935,84899,58549,66412,23219,62494,12564,49252,40692,68782,40336,74469,644,44842,76028,35606,30759,40301,31150,78348,40619,55961,20696,9635,31438,37252,15439,87579,33352,41413,44725,62287,26314,98151,28701,44410,60646,36142,93662,1339,4926,28876,70685,5570,73718,46715,36053,4478,81893,67203,77703,22514,18043,93276,27026,49481,25406,42465,31939,58759,78755,76664,21047,5070,74816,44625,49480,30340,80768,38021,26556,85694,66897,97242,86141,40617,38835,22196,39972,15606,89399,17677,32997,2320,10954,60023,51802,31238,97365,78618,89997,76122,50160,11045,76069,24977,50548,25551,50194,31317,58449,76750,11889,20224,68870,98030,60841,2583,15104,95691,18190,99381,13369,51187,1702,19200,6089,48381,50438,3455,21877,35313,74454,72037,46359,50525,91891,91784,70953,42086,23102,24280,13715,29868,44504,82585,22776,224,85169,37881,95915,98236,37263,4162,49424,33842,23362,50390,82224,68678,48723,4102,3992,18055,76140,45228,68580,62909,37013,34411,4997,54992,58691,13589,79737,98073,91051,2515,98297,71098,35273,94213,69335,72536,98375,13638,6379,16615,64028,83480,80170,7629,82460,79040,25685,53478,19146,89142,16388,51037,23555,16262,907,77123,29851,80645,70074,20904,83160,68372,92002,18434,57463,56216,85847,50716,69854,87103,62209,28760,65462,42380,36390,47923,16298,62075,1402,30322,46095,12667,81359,64527,28930,82266,36529,58781,57789,6604,74562,40950,66566,54261,27318,17660,34986,78035,87514,22091,40245,16275,82430,77502,47542,30354,88678,4495,26633,19001,50591,39300,95237,15119,68230,77504,46525,21890,30172,53130,91329,65999,22985,52773,20262,45180,70433,50125,23216,57948,67093,58338,69101,49524,30719,16644,79878,19398,21140,1389,33276,66608,40690,28514,76604,3798,896,23131,20565,31068,71138,11896,97068,94123,64669,12208,39304,29981,62333,57398,87929,24305,10614,57031,73829,36210,68553,48586,50485,84570,44852,83761,51179,85542,7153,22661,84218,2927,45792,4784,33995,16931,11557,25941,5932,71104,33026,40114,1086,90237,92389,83892,14543,97880,35802,83249,34092,4356,26713,84577,83803,71566,63217,34983,57109,65247,52521,36205,68174,98314,35867,97047,10123,42301,22989,10933,13406,50893,51047,14492,41131,43437,93262,55674,41318,29065,33801,70287,33421,60515,54866,17225,32082,12961,47085,84068,78208,99606,20275,46384,92798,51019,43432,97799,93320,61298,8733,6728,12192,59780,16097,48200,98094,9360,3875,39413,38425,37677,9702,66723,98192,59445,83948,25152,72406,25911,9221,45492,20396,24373,91876,13195,75392,30186,10995,68714,86362,19728,70319,93431,74385,81293,41633,72480,90654,40385,6772,23957,72939,11351,90681,66009,70796,69507,91161,38080,90296,384,78449,10693,19634,70327,18765,95027,95390,29761,58619,76630,44366,28939,70063,13630,5110,6574,86110,90641,46959,87759,14600,19900,99110,159,85909,64784,64543,71949,97741,54840,72333,76192,60410,86844,41397,79176,81872,31665,3815,35369,3174,48181,59185,73237,56688,64296,74688,54938,16525,25437,69538,36425,19426,64574,17213,79087,29119,89162,71707,78836,56373,47900,39248,43218,84174,18425,19969,10717,22240,55338,13891,65298,14525,82005,21988,73698,56694,54542,28637,73220,79979,93053,4523,94282,57628,16613,73371,81624,5776,45079,60462,57026,87856,94587,246,66908,13013,15092,77625,30130,70430,91517,95428,79832,68400,12294,53531,25096,66836,77046,93193,41694,70100,97716,35977,22606,14331,4226,4232,14984,44182,59571,72011,32039,54159,67134,93824,67172,77103,71451,97302,42411,57846,87608,22245,26247,99903,70653,46220,66740,47700,39414,8435,17801,32009,39290,40408,41217,43516,39517,51078,87699,99088,17967,14616,53248,79978,8442,15298,57082,74770,7478,99494,32617,95086,16617,53741,94990,87270,99962,56609,34972,34254,59921,47650,61140,99211,82935,2358,37606,22453,48314,25306,16419,66281,39922,69667,46261,43241,79842,3344,18012,87320,97715,45506,82408,14333,99248,72276,1605,94088,23763,31454,28343,83685,73981,84361,77774,56918,86719,15381,74248,35034,35564,90668,96193,70364,55213,42455,13606,35057,40676,26496,22378,33270,72002,99663,47603,66128,66818,44085,60217,90581,75539,83438,69144,49522,67800,41797,1318,49397,52055,75566,84432,87620,61112,75503,52862,11204,12836,66468,53512,87841,63516,86782,59845,58058,29264,24877,73349,81069,15459,48890,64508,79481,93289,32309,21279,89484,81706,73334,59928,61016,55832,21042,36520,8695,27123,44233,70041,73384,92623,57883,31778,79406,12606,89836,3548,38581,9591,76898,19651,19928,20666,79036,99409,8833,11346,20689,98317,88900,58246,48947,44734,74165,80344,53429,1289,19456,23471,69550,12080,76232,96206,86363,88838,80920,89912,27420,90512,66811,41948,10441,82354,20985,4728,91187,27208,20294,89505,15139,9195,42629,58963,53929,11673,34185,2237,7839,53641,25708,72267,65721,96817,68474,52086,85657,49395,41999,7955,39908,3688,49904,45226,86042,65766,49954,77230,92975,70248,61613,8115,74321,99119,61955,23128,5670,96140,25365,13510,44660,45951,85777,10382,42769,49129,57345,28427,98524,94221,36383,33311,97909,81164,78537,78829,46931,23370,50937,39907,88495,7428,42899,62817,6549,99731,85946,7096,95873,11312,20606,35411,57263,1261,40670,94910,98016,23338,48916,87115,59721,82227,79903,40886,55642,58733,82695,79012,4549,22603,67509,11977,60380,25204,13403,60112,11151,20500,50863,17341,35983,86274,69481,37245,26946,64392,82512,19840,87731,26306,1833,42330,3411,81736,78094,59054,35348,60790,32944,39897,78270,454,51874,38651,20536,60155,98764,31687,80655,49628,43905,16639,30781,13388,48761,52604,77780,31275,67321,60389,57581,69154,2721,60993,50892,75692,20048,81117,36483,52992,21015,14754,48324,67766,53406,68860,27922,47048,95424,8578,91553,39331,20095,17212,52719,68856,69816,25377,132,32015,85767,57714,1171,83365,18708,46940,53935,33633,28058,90418,81502,49073,50,29827,11717,48333,93564,39640,95381,88990,43095,81813,28322,63190,99025,75918,26925,63720,96172,27057,95735,76817,79648,96906,60183,93233,38724,14119
 */
function flatlandSpaceStations(
  n = 99998,
  c = [28000, 58701, 43043, 24909, 28572]
) {
  c.sort((a, b) => a - b);

  const result = c.map((item, index) => {
    if (index === c.length - 1) return 0;
    return Math.floor(Math.abs(c[index + 1] - item) / 2);
  });
  const before = Math.abs(c[0] - 0);
  const after = Math.abs(n - c[c.length - 1]) - 1;
  const output = Math.max(...result, before, after);
  console.log(output);

  return result;
}
flatlandSpaceStations();

// ========================== 11 dars ===========================

// String type ga oid masalalar.



// ========================== 1-misol ===========================


// function getLastChar(str) {
//     if (str.length === 0) {
//         return null;
//     }
//     return str[str.length - 1]; 
// }
// console.log(getLastChar("hello"));


// ========================== 2-misol ===========================


// function getMiddleChars(str) {
//     let res;
//     if (str.length % 2 == 1) {
//     let middleIndex = Math.trunc(str.length / 2);
//     res = str.substring(middleIndex, middleIndex + 1)
//     } else {
//     let middleIndex = Math.trunc(str.length / 2) - 1;
//     res = str.substring(middleIndex, middleIndex + 2)
//     }
//     return res;
//     }
//     console.log(getMiddleChars("salomi"));


// ========================== 3-misol ===========================



// function getFirstCharCode(str) {
//     if (str.length === 0) {
//       return null; 
//     }
//     return str.charCodeAt(0); 
//   }
//   console.log(getFirstCharCode("hello"));



// ========================== 4 -misol ===========================


// function getStringLengthDescription(str) {
//     const length = str.length;
//     if (length > 10) {
//       return "Uzoq string";
//     } else {
//       return "Qisqa string";
//     }
//   }
//   console.log(getStringLengthDescription("hello"));




// ========================== 5 -misol ===========================


// function getCharCodes(str) {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//       arr.push(str.charCodeAt(i));
//     }
//     return arr;
//   }
//   console.log(getCharCodes("hello"));


 
// Stringlarda `slice`, `substring`, va `substr`  oid masalalar


// ========================== 1 -misol ===========================

// function getFirstThreeChars(str) {
//     return str.slice(0, 3);
//   }
//   console.log(getFirstThreeChars("hello"));



// ========================== 2 -misol ===========================


// function getLastFiveChars(str) {
//     return str.slice(-5);
// }
//   console.log(getLastFiveChars("hello"));


// ========================== 3 -misol ===========================




// function getMiddleChars(str) {
//     const length = str.length;
//     if (length === 0) {
//       return ""; 
//     }
//     const middle = Math.floor(length / 2);
//     if (length % 2 === 0) {
//       return str.substring(middle - 1, middle + 1); 
//       return str.substring(middle, middle + 1);
//     }
//   }
//   console.log(getMiddleChars("hello"));



// ========================== 4 -misol ===========================


// function getThreeCharsFromFifthIndex(str) {
//     return str.substr(5, 3);
// }
// const result = getThreeCharsFromFifthIndex("hellobyegood");
// console.log(result);  


// ========================== 5 -misol ===========================



// Berilgan stringning boshidan 10-chi indeksgacha bo'lgan
//  qismini qaytaradigan `getFirstTenChars(str)` funksiyasini yozing (`substring` metodidan foydalaning

// function getFirstTenChars(str) {
//     return str.substr(0, 10);

// }
// const result = getFirstTenChars("najot, ta'limga bugun 25 ta bola keldi");
// console.log(result);


// ========================== 6 -misol ===========================


// Berilgan stringning oxirgi uchta belgisini qaytaradigan `getLastThreeChars(str)` 
// funksiyasini yozing (`slice` metodidan foydalaning).



// function getLastThreeChars(str) {
//     return str.slice(-3)
// }
// const result = getLastThreeChars("salom-dunyo");
// console.log(result);


// ========================== 7 -misol ===========================


// function getSubstringFromSecondIndex(str) {
//     return str.substring(2);
// }
// const res = getSubstringFromSecondIndex(",,salom dunyo");
// console.log(res);





// Stringlarda `toUpperCase`, `toLowerCase`, `concat`, `trim`, `padStart`, `trimEnd`, va `padEnd` metodlar


// ========================== 1 -misol ===========================


// function convertToUpperCase(str) {
//     return str.toUpperCase();
// }


// const result = convertToUpperCase("wold");
// console.log(result);



// ========================== 2 -misol ===========================



// function convertToLowerCase(str) {
//     return str.toLowerCase();
// }
// const res = convertToLowerCase("WORLD");

// console.log(res);


// ========================== 3 -misol ===========================



// function concatStrings(str1, str2) {
//     return str1.concat(str2);
// }

// let result = concatStrings("hi" ,"bye");
// console.log(result);


// ========================== 4 -misol ===========================


// function trimString(str) {
//     return str.trim();
// }
// const res = trimString("                                              salom                      ");

// console.log(res);


// ========================== 5 -misol ===========================


// Berilgan stringning boshiga ma'lum miqdorda belgi qo'shib uzunligini ma'lum qiymatga yetkazadigan 

// `padStringStart(str, maxLength, padChar)` funksiyasini yozing (`padStart` metodidan foydalaning).


// function padStringStart(str, maxLength, padChar) {
//     return str.padStart(maxLength, padChar);
// }

// let result = padStringStart("123", 6, "0");
// console.log(result);



// ========================== 6 -misol ===========================


// function padStringEnd(str, maxLength, padChar) {
//     return str.padEnd(maxLength, padChar);
// }

// let result = padStringEnd("123", 6, "0");
// console.log(result);


// ========================== 7 -misol ===========================



// Massiv va stringlarni birlashtirib ishlatiladigan va funksiyalar yordamida yechiladigan



// ========================== 1 -misol ===========================



// function processString(str) {
//     let wordsArray = str.split(' ');

//     let upperCaseArray = wordsArray.map(word => word.toUpperCase());

//     let resultString = upperCaseArray.join(',');

//     return resultString;
// }

// let result = processString("hello world");
// console.log(result); 


// ========================== 2 -misol ===========================




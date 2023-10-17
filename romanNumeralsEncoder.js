// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter 
// and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with 
// the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
// 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.




function solution(number){
    let ones = [
          "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
        ],
        tens = [
          "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"
        ],
        hundreds = [
          "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"
        ],
        thousands = [
          "", "M", "MM", "MMM"
        ];
      
    return thousands[Math.floor(number / 1000)] +
           hundreds[Math.floor((number % 1000) / 100)] +
           tens[Math.floor((number % 100) / 10)] +
           ones[number % 10];
  }  
  
  
    
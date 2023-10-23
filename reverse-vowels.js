function reverseVowels(str) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'u', 'U', 'o', 'O'];
    
    const strArr = str.split("");
    const strVowels = []; 
  
    // Getting vowels that are in the string
    strArr.forEach(element => {
      if (vowels.includes(element)){
          strVowels.push(element)
      }
    })
    
    // Switch the vowels accordingly
    strArr.map((letter, index) => {
      if(vowels.includes(letter)){
        let replacement = strVowels.pop()
        strArr.splice(index, 1, replacement)
      }
    })
    
    return strArr.join("")
  }
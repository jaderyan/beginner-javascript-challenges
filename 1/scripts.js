function strength(password) {
  
    // Less than 4 characters
    if (password.length < 4) {
      return 1;
    }
    
    // Less than 9 characters
    if (password.length < 9) {
      return 2;
    }
    
    // Get count of letters, numbers and special characters
    let letters = 0;
    let numbers = 0;
    let specialCharactersCount = 0;
    const specialCharactersList = ['!', '@', '£', '#', '$', '%', '^', '&', '*'];
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < password.length; i++) {
      // Check if letter
      const letter = password[i].toLowerCase();
      
      if (alphabet.includes(letter)) {
        letters++;
        continue;
      }
      
      // Check if number 
      const number = parseInt(password[i]);
      if (isNaN(number) === false) {
        numbers++;
        continue;
      } 
      
      // Check is special character
      const character = password[i];
      if(specialCharactersList.includes(character)) {
        specialCharactersCount++;
      }
    } 
    
    if (letters === password.length ) {
      return 3;
    }
    
    if (password.length < 12 && numbers >= 1 && specialCharactersCount === 0 ){
      return 4;
  }
  
    if (password.length < 12 && numbers >= 1 && specialCharactersCount >= 1) {
      return 5;
    }
    
   if (password.length > 12 && numbers >= 1 && specialCharactersCount < 1) {
     return 6;
   }
    
    if (numbers >= 1 && specialCharactersCount >= 1) {
      return 7;
    }
  }
  
  console.log(strength('bob'));
  console.log(strength('bobbybob'));
  console.log(strength('bobbobbob'));
  console.log(strength('bobbobbob1'));
  console.log(strength('bobbob1#2$'));
  console.log(strength('bobbobbobbob123'));
  console.log(strength('bobbobbob1!2@3#'));
  
  
    
  
  
  
  



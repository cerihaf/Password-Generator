var possibleCharacters=[]
var special=["!","@","#","$","&","*","~","?"]
var numeric=["1","2","3","4","5","6","7","8","9","0"]
var uppercase="QWERTYUIOPASDFGHJKLZXCVBNM"
var lowercase="qwertyuiopasdfghjklzxcvbnm"
var length=0
var newPassword=""

var createPassword=function() {
  for(var i = 0; i < length; i++) {
    var index=Math.random(0, possibleCharacters.length -1)
    newPassword+possibleCharacters[index]
  }
}


function generatePassword() {
  var criteria=prompt("Which criteria would you like to include? \nType criteria separated by a comma, possible criteria includes: \nLength \nCharacters \n ")
  var options=criteria.split(",")
  console.log(options)
    for(var i = 0; i < options.length; i++) {
      var option=options[i].toLowerCase().trim()
      switch(option) {
        case "length":
          var pwLength=prompt("Choose password length; must be between 8 and 128 characters.")
          if(pwLength < 8 || pwLength > 128) {
          
            window.alert("Password length did not meet criteria.")
            return generatePassword();
          }
          else {
            length=pwLength
          }
          break;
        case "characters":
            var characters=prompt("Choose Character types to include, separated by a comma. \nSpecial, Numeric, Uppercase, and/or Lowercase. \nAt least one option must be selected.")
            if(characters.length) {
              //moving possible characters to an array
              var types=characters.split(",")
                //looping possible character types
              for(var i=0; i < types.length; i++) {
                //setting each character type to lowercase so we can evaluate it
                var type=types[i].toLowerCase().trim()
                switch(type) {
                case "special":
                  possibleCharacters.push(...special)
                break;

                case "numeric":
                  possibleCharacters.push(...numeric)
                break;

                case "uppercase":
                  possibleCharacters.push(...uppercase.split(""))
                  break;

                  case "lowercase":
                    possibleCharacters.push(...lowercase.split(""))
                    break;
                }
              }
              
            } else {
              window.alert("At least one character type must be selected.")
              return generatePassword();

            }
            break;
      }
    }
    console.log(options)
    console.log("if")
    if(possibleCharacters.length && length) {createPassword()}
    else if(!possibleCharacters.length && length){
      possibleCharacters=[...special,...lowercase.split(""),...uppercase.split(""),...numeric]
      createPassword()
    }
    else if(possibleCharacters.length && !length){
      length=Math.random(8, 128)
      createPassword()
    }
    else {
      window.alert("At least one criteria must be defined.")
      return generatePassword();
    }
    return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

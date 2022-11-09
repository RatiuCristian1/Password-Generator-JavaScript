const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15


// let passwordBox1 = document.getElementById("password1")
let passwordBox2 = document.getElementById("password2")
let passwordBox3 = document.getElementById("password3")
// newPassword = passwordBox2 + passwordBox3
// console.log(passwordBox1)

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]

}
console.log( getRandomCharacter() )


function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()  
        passwordBox2.textContent = randomPassword  
        passwordBox3.textContent = randomPassword     
    }
    return randomPassword
    
}  
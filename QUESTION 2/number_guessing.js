randomNum = Math.floor(Math.random()*100);
function guessNumber(){
    if (user_input== randomNum){
        alert('Congratulation, You guessed it!');
    }else if(user_input>randomNum){
        alert('To high, Try again');
    }else{
        alert("To low, Try again");
    }
}

while (true){
    user_input = prompt("Guess a numver between 1 to 100:\n 101:to exit ");
    guessNumber()
}
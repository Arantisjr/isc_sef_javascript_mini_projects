let choice1="rock";
let choice2="scissors";
const choice3="paper";
 let randomNum = Math.floor(Math.random()*3);
 console.log(randomNum);
 let computer_move ='';

//a function that generates a random choice for the computer
function computerPlay(){
    if (randomNum ==1){
    computer_move=choice1;      

    }
    else if(randomNum ==2){
        computer_move=choice2;
    }
    else{
        computer_move=choice3;
    }  
 }


 while (true) {
     let user_input = prompt("Enter your choice: \n1. rock\n2. scissors\n3. pape\n4. exit");

 if (user_input=='1'){
    user_input=choice1;
    alert("You chose : rock");
 }else if(user_input=='2'){
    user_input=choice2;
    alert("You chose:  scissors");
 }
 else if(user_input=='3'){
    user_input=choice3;
    alert("You chose: paper");
 }
 else{
    break;
 }

    computerPlay();


    

    if (user_input==computer_move){
        alert("It's a tie");
    }
    else if(user_input==choice1 && computer_move==choice2){
        alert(' You:rock Computer:scissors   You win!');
    }else if(user_input == choice2 && computer_move == choice3){
        alert( 'you:scissors Computer:paper You win!');
    }else if(user_input == choice3 && computer_move == choice1){
       
        alert('  you:paper Computer:rock You win!');
    }
    else{
        alert('You lose!');
    }
}
 


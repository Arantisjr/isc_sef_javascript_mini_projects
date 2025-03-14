let user_acc ={
    name:'Arantis',
    balance:0  //initial balanace
}
// function to display the menu using the prompt function
function showMenu(){
    return prompt(
        "Choose an option:\n" +
        "1.check balance\n"  +
        "2.Deposit \n"    +
        "3.withdrawal \n"
      + "4. Exit"  

    );
}
//function to check balance
function check_balance(){
    alert("Your current balance is: $ " + user_acc.balance);
}
//function to Deposit
function Deposit(){
   let  user_depo = parseFloat(prompt("enter amt to be deposited: "));
    user_acc.balance += user_depo;
    alert("Deposit succesfull, new balance $" + user_acc.balance);
}
//funtion to innitiate withdrwal
function withdrawal(){
    let  user_depo = parseFloat(prompt("enter amt to be deposited: "));
    if (user_acc.balance>=user_depo){
        user_acc.balance -=user_depo;
        alert("Succesfull widrawal, New balanace: $"+ user_acc.balance);
    }else{
        alert("Account balance insufficient");
    }
}
//main function 
function bamk_system(){
   
    while(true){
        let choice = showMenu();
        if (choice=='1'){
            check_balance();
        }else if( choice=='2'){
            Deposit();
    }else if( choice=='3'){
        withdrawal();
    }
    else if ( choice=="4") {
        alert("thank you for using the paltfom");
        break;
    }else{
        alert("invalide choice");
    }
        
    }
}

bamk_system();
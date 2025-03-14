//A palindrome is a word or phrase which when reversed still read thesame 
function palindrom(input){
    //removing spacing and convert all xters to lower case 
    let char_lower = input.replace(" ",'').toLowerCase();
    console.log(char_lower);
    
    //reversing the char_lower
    let char_reversed = char_lower.split('').reverse().join('');

    if(char_lower===char_reversed){
        return true;
    }else{
        return false;
    }
}

 let word =prompt("Enter a word or phrase: ");
 if (palindrom(word)){
    alert("its a palindrome");
 }else {
    alert('its not a palindrome');
 }
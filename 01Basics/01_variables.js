const accountId = 14453
let accountEmail = "adarsh@gmail.com"
var accountPassword = "3003"
accountCity = "Mathura"

let accountState;

//accountId = 4;  // not allowed 

/*
        prefer not to use var
        because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity , accountState])



'use strict';

//alert("Hi everyone and Welcome to my web page");
// alert('my name is Naziha Qawasmeh');

// let yourName = prompt('What is your name?');
// alert('Welcome  ' + yourName);
// alert('I want to ask you some questions to know how do you see me.we will do that by a game');
// alert('let\'s play Guessing game');


// let userGender = prompt("what is my gender?male\ female");
// switch (userGender.toLowerCase()) {
//     case "female":
//         /*console.log("gender=".userGender);?*/

//         alert("right answer");
//         break;
//     default:
//         /*console.log("gender=",userGender);*/
//         alert("wrong answer");
//         break
// }
//  let userAge = Number(prompt('what is my age?'));
// /if (userAge == 34) {
//     alert('WOW you know it!!!!!');
//     /*console.log("age=",userAge);*/
//  } else if (userAge < 34) {
//    alert('mmmmmm too young');
//    /*console.log("age=",userAge);*/
// } else {
//   alert("tooooo old!!!!!!!!!!!");
//     /*console.log("age=",userAge);*/
//  }



let userCountry = prompt('am i come from Jordan? yes or no');
if (userCountry.toLowerCase() == "yes") {
    alert('right answer!!!');
    /*console.log('i am from america',userCountry);*/
} else {
    alert('wrong answer');
    /*console.log('i am from america',userCountry);*/
}

let userReligin = prompt('am i muslim? yes or no');
if (userReligin.toLowerCase() == "yes") {
    alert('right answer!!!');
    /*console.log('i am  muslim',userReligin);*/
} else {
    alert('wrong answer');
    /*console.log('i am  muslim',userReligin);*/
}



//  let userStatus = prompt('am i married? yes or no');
//  if (userStatus.toLowerCase() == "yes") {
//      alert('right answer!!!');
//      /*console.log('i am married',userStatus);*/
//  } else {
//      alert('wrong answer');
//      /*console.log('i am married',userStatus);*/
//  }

// let userFood = prompt('is Shawerma my favorite food ? yes or no');
//  if (userStatus.toLowerCase() == "yes") {
//      alert('right answer!!!');
//      /*console.log('favorite food is shawerma',userFood);*/
//  } else {
//      alert('wrong answer');
//      /*console.log('favorite food is shawerma',userFood);*/
//  }

//  let userBook = prompt('is one hundrer years of solitude my favorite book ? yes or no');
//  if (userStatus.toLowerCase() == "yes") {
//      alert('right answer!!!');
//      /*console.log('favorite food is shawerma',userBook);*/
//  } else {
//      alert('wrong answer');
//     /*console.log('one hundrer years of solitude is my favorite book',userBook);*/
//  }

//  alert('Welcome again  ' + yourName);





 let luckyNumber = prompt('guess what is my luckey number?');
 luckyNumber = Number(luckyNumber);
 for (let i = 0; i <= 2; i++) {
    if (luckyNumber === 14) {
         alert("it is right");
    } else if (luckyNumber > 14) {
         alert('too high');
         luckyNumber = prompt('guess what is my luckey number?');
        luckyNumber = Number(luckyNumber);
     } else {
         alert('too low');
        luckyNumber = prompt('guess what is my luckey number?');
        luckyNumber = Number(luckyNumber);
    }
 }



let drinks = ['cola', 'coffee', 'tea', 'water'];
let drinkType = prompt('guess what are my fav drink?');
for (let i = 0; i <= drinks.length; i++) {
    if (drinkType === drinks[0] || drinkType === drinks[1] || drinkType === drinks[2] || drinkType === drinks[3]) {
        alert('right answer');
        break;
    } else {
        alert('guess again');
        drinkType = prompt("guess what are my fav drink");


    }

// }
// alert("by the way, my favorite drink is:'cola', 'coffee', 'tea', 'water'");





// let score = 0
//     if(userCountry === yes && userReligin === yes && userFood === yes && userStatus === yes &&userBook===yes) {
//         alert('score =', score +5, '/5');
// } else if (userCountry === no && userReligin === no && userFood === no && userStatus === no &&userBook===no){
//     alert('score =', score, '/5');
// }else if(userCountry === yes && userReligin ===yes && userFood === no && userStatus === no &&userBook===no

// )
//     alert('score=', score[1], '/1')
// }
// if (userReligin === "yes") {
//     alert('score=', score[3], "/2");
// } else {
//     alert('score=', score[1], '/2')
// }
// }
// if()
// }

// if {userReligin==="yes"&& userFood==="yes"&&userStatus==="yes"&&userBook==="yes")
//     {
//     alert(score=score);
// }

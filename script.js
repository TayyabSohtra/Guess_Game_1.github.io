'use strict';
/*

console.log(document.querySelector(".Between").textContent);
const message = document.querySelector('.message').textContent;
console.log(message);
console.log('hello gamers');

document.querySelector('.number').textContent  = 23;
document.querySelector('.guess').value = 14;*/

const secretNumber = Math.trunc(Math.random() * 20) +1; // random number between 1 and 20
let score = 20; 
let highscore = 0;
const dismessage = function(message){
    document.querySelector('.message').textContent=message;
}

console.log(secretNumber);
document.querySelector(".btn1").addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value); 
        console.log(guess, typeof guess);
        if (!guess){
            // console.log(document.querySelector('.message').textContent='❌No number entered!') ;  
            //after refactor
            dismessage("❌ No Number Entered!");

        }
        else if (guess === secretNumber) {
            // console.log(document.querySelector('.message').textContent='  🎉Correct Number') ;
            // after refactoring
            dismessage( "🎉 Correct Number!");

            document.querySelector('.number').textContent = secretNumber;
            document.querySelector("body").style.backgroundColor=" #3bab24";
            if (score > highscore) {
                highscore=score;
                document.querySelector('.H_score').textContent =highscore;
            }
        }
        // Below code is refactored by Mr.Tayyab Of If greater and smaller than statement
        else if (guess !== secretNumber) {
            if (score > 1){
                // console.log(document.querySelector('.message').textContent=guess>secretNumber ? ' 📈too high!' :' 📉too low') ;
                //after refactoring
                dismessage(guess>secretNumber ? ' 📈too high!' :' 📉too low');

                score--; 
                console.log(document.querySelector('.score').textContent=score ) ;
            }else{
                // console.log(document.querySelector('.message').textContent=' 💥You lost a game') ;
                //after refactoring
                dismessage( "💥 You Lost the Game");

                console.log(document.querySelector('.score').textContent=0 ) ;
            }
        }
        // Below  is the original code that was written by Mr.Tayyab
        
//         else if (guess > secretNumber) {
//             if (score > 1){
//                 console.log(document.querySelector('.message').textContent=' 📈too high!') ;
//                 score--; 
//                 console.log(document.querySelector('.score').textContent=score ) ;
//             }else{
//                 console.log(document.querySelector('.message').textContent=' 💥You lost a game') ;
//                 console.log(document.querySelector('.score').textContent=0 ) ;
//             }

//         }
//         else if (guess < secretNumber) {
//             if (score > 1){
//                 console.log(document.querySelector('.message').textContent=' 📉too low') ;
//                 score--; 
//                 console.log(document.querySelector('.score').textContent=score ) ;
//             }else{
//                 console.log(document.querySelector('.message').textContent=' 💥You lost a game') ;
//                 console.log(document.querySelector('.score').textContent=0 ) ;
//             }
//         }
})
document.querySelector('.btn').addEventListener('click', function () {
    // window.location.reload();
    //OR
    document.querySelector('body').style.backgroundColor="#222";
    // document.querySelector('.message').textContent='Start guessing...';
    //after refactoring
    dismessage( 'Start Guessing...');

    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value='';
});

const prompt = require('prompt-sync')();

let option = Number(prompt("Enter [1] for color construction. Enter [2] for color deconsstruction: "));

if (option === 1){
    const colorchoice1 = Number (prompt ("Enter first primary color: [1]-red [2]-blue [3]-yellow "));
    const colorchoice2 = Number (prompt ("Enter second primary color: [1]-red [2]-blue [3]-yellow "));
    const choicesum = colorchoice1 + colorchoice2;
        if (choicesum === 3 ) {
            console.log( "These two colors make purple!" );
            }else if (choicesum === 4){
                console.log( "These two colors make orange!" );
            }else if (choicesum === 5){
                console.log( "These two colors make green!" );
            }else if (choicesum > 5 || choicesum < 1) {
                console.log ("error!");
            }
        
} else if (option === 2) {
    const colchoice = Number (prompt ("Enter secondary color: [3]-purple [4]-orange [5]-green "));
    
        if (colchoice === 3) {
            console.log ("This color deconstructed is red and blue." );
            }else if (colchoice === 4){
                console.log ("This color deconstructed is red and yellow.");
            }else if (colchoice === 5){
                console.log ("This color deconstructed is blue and yellow");
            }else if (colchoice > 5 || colchoice < 1) {
                console.log ("error!");
        }
}
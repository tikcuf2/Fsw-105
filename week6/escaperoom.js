

// variables

var readlineSync = require('readline-sync');
var playerName = readlineSync.question('Who are you ? ')
var escapeRoom = `${playerName}, How does it feel to be stuck ,  Lets see if you can get out alive !:`;

console.log (escapeRoom);

menuId = readlineSync.keyIn('Please press a number key to begin: ', {limit: '$<1-9>'});

var keyN = true;
var keyY= false;



// game statments

while(keyN == true){

const mainMenu = readlineSync.keyIn('Enter 1 to put hand in hole\n enter 2 to find the key \n enter 3 to open the door ', {limit: '$<1-5>'});
console.log(mainMenu);



if (mainMenu== 1){

    console.log(`{playerName}, That was a BLACK HOLE ! Now your Dead !`);
    keyN = false;
}

else if (mainMenu == 2 && keyY== false){
    console.log(`${playerName}, Sweet ! You found the key... Open that spooky door`);
        keyY = true;
}
else if (mainMenu == 2 && keyY== true){
    console.log(`${playerName} You have the key already !...Open that door !`);

}

else if (mainMenu == 3 && keyY== false){
    console.log(`${playerName} Door is locked ! Find the key first !`);
}


else if (mainMenu == 3 && keyY== true){
    console.log(`${playerName} Peace be with you, You have escaped the room...`);
}


else if (mainMenu >= 4 && keyY == false){
    console.log(`${playerName} THATS A WRONG CHOICE! ! ! You died a peaceful death due to your ignorance. You only have 3 options. 1...2...3`);
}

}
var Enemies=["Lex","Batman","Darkseid","Brainiac","General Zod","Doomsday"];

funtion, WhoWins(is-there-kryptonite,enemy_name)
{
if (!is-there-kryptonite)
{
    return "Superman beats " +enemyName+ ", of course";
}

else{
    return "Depends on how quick Superman can get rid of the Kryptonite. "+ enemyname +" could possibly win this one.";
}
    }


function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Mat.random()*10)+1);
}

consol.log( HowAttractedIsLoisLaneToMe ()) ;

var clarkKent =true;
var superman =false;

while (clarkKent){
    console.log("I'm just a nerdy columnist");
    var phoneBoothQuickChange =Math.random();
    if (phoneBoothQuickChange>= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");}}
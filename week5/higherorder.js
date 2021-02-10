

//----- SECTION A-----
//--1) Given an array of numbers, return a new array that has only the numbers that are greater than 5.


function fiveAndGreaterOnly(Jared){
    var question1 = Jared.filter(function (greateronly){
        if (greateronly > 5){
            return true
        }

    });
    return question1 
}
//console.log(fiveAndGreaterOnly([3,6,8,2,5,9]));





//--2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(em){
    var question1 = em.filter(function (even){
        if (even %2 === 0){
            return true
        }
    });
    return question1

}
//console.log(evensOnly([3,6,8,2,5,4]));








// ----------SECTION B ---------------------------

//--1)Make an array of numbers that are doubles of the first array
function doubleNumbers(tt){
    var question1 = tt.map(function (even){
            return even *2
        
    });
    return question1

}

//console.log(doubleNumbers([3,6,8,2,5,4]));




//--2) Take an array of numbers and make them strings
function stringItUp(arr1){
    const result = arr1.map(function(num){
        return num.toString();
    });
    return result;
}


//console.log(stringItUp([2, 5, 100]));



//--3)Capitalize each of an array of names

function capitalizeNames(arr1){
    const result = arr1.map(function(capitalizeNames){
        return capitalizeNames.toUpperCase();
    });
    return result;
}

//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//--------------------SECTION C -----------------------------

//--1) Turn an array of numbers into a total of all the numbers

function total(splang)
{
    const result = splang.reduce(function(num,dittle){
    dittle = dittle + num; 
        return dittle;
    });
    return result;

    }

 //console.log(total([1, 2, 3]));

//--  2) Turn an array of numbers into a long string of all those numbers.

    function stringConcat(arr){

    const result = arr.reduce(function(){
        return arr.join(""); 

    });
        
        return result;
    }


   //  console.log(stringConcat([1, 2, 3]));



//-- 3) Turn an array of voter objects into a count of how many people voted

     function totalVoters(arr) {
        return arr.reduce(function(x, y){

         return x + y.voted } , 0);
        }





        var voters = [
            {name:'Bob', age:30, voted : true},
            {name:'Jake', age:32, voted : true},
            {name:'Kate', age:25, voted : false},
            {name:'Sam', age:20, voted : false},
            {name:'Phil', age:21, voted : true},
            {name:'Ed', age:55, voted : true},
            {name:'Tami', age:54, voted : true},
            {name:'Mary', age:31, voted : false},
            {name:'Becky', age:43, voted : false},
            {name:'Joey', age:41, voted : true},
            {name:'Jeff', age:30, voted : true},
            {name:'Zach', age:19, voted : false},
        ];

            //console.log(totalVoters(voters))


//----------SECTION D (sort)------------------------------

//--1) Sort an array from smallest number to largest

    function leastToGreatest(arr) {
                return arr.sort((num1,num2) => {
                    console.log(num1, num2 )
                    return (num1 - num2)
                })
            }
            
            //console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));





//--2) Sort an array from largest number to smallest--

function greatestToLeast(arr) {
    return arr.sort((num1,num2) => {
        //console.log(num1, num2 )
        return (num2 - num1)
    })
}

//console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));



//-- 3) Sort an array from shortest string to longest--
function lengthSort(arr){

    return arr.sort((str1 ,str2) => {
      
        return (str1.length - str2.length)})

}

//console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));



    
function fiveAndGreaterOnly(Jared){
    var question1 = Jared.filter(function (greateronly){
        if (greateronly > 5){
            return true
        }

    });
    return question1 
}

//console.log(fiveAndGreaterOnly([3,6,8,2,5,9]));

function evensOnly(em){
    var question1 = em.filter(function (even){
        if (even %2 === 0){
            return true
        }
    });
    return question1

}
//console.log(evensOnly([3,6,8,2,5,4]));

function doubleNumbers(tt){
    var question1 = tt.map(function (even){
            return even *2
        
    });
    return question1

}

//console.log(doubleNumbers([3,6,8,2,5,4]));





function stringItUp(arr1){
    const result = arr1.map(function(num){
        return num.toString();
    });
    return result;
}


function capitalizeNames(arr1){
    const result = arr1.map(function(capitalizeNames){
        return capitalizeNames.toUpperCase();
    });
    return result;
}

//console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));



function total(splang)
{
    const result = splang.reduce(function(num,dittle){
    dittle = dittle + num; 
        return dittle;
    });
    return result;

    }

 //console.log(total([1, 2, 3]));



    function stringConcat(arr){

    const result = arr.reduce(function(){
        return arr.join(""); 

    });
        
        return result;
    }


    // console.log(stringConcat([1, 2, 3]));




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

            function leastToGreatest(arr) {
                return arr.sort((num1,num2) => {
                    console.log(num1, num2 )
                    return (num1 - num2)
                })
            }
            
            console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));






function greatestToLeast(arr) {
    return arr.sort((num1,num2) => {
        //console.log(num1, num2 )
        return (num2 - num1)
    })
}

//console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));



function lengthSort(arr){

    return arr.sort((str1 ,str2) => {
      
        return (str1.length - str2.length)})

}

//console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));



    
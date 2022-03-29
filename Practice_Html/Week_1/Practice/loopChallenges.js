const loopChallenges =[];
const multi = [];
const add =[];
const seq = [4, 2.5, 1, -0.5, -2, -3.5];
var temp = 0;
var temp2 = 1;
for(var i=1; i<= 100; i++){
    loopChallenges.push([i]);
    console.log("Current# "+i);
    if(i > 0 && i < 20){
            if(i%2==0){
                console.log("Loop of 20: "+i);
            }
    }

 if(i < 100 && i > 3){
    if(i %3 ==0){
        console.log("Multiple of 3 "+i);
    }
    }
    if(i <5){
    console.log("From Sequence "+seq[i]);

        }

    temp = temp +i;


    
 if(i > 0 && i <= 12){

    temp2 = temp2 *i;
    }
}
console.log("Fist Number Sigma: "+temp);
console.log("Second Number Factorial: "+temp2);
/*
for
while
if/else
odds of 1-20
100-3 
print loop
print 0-100 +
print -100 *

*/

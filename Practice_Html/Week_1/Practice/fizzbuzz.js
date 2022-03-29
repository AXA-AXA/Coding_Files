
console.log("Hello");


const fizzBuzz = [];
for(var i=0; i< 100; i++){
fizzBuzz.push([i]);
	if(i%3==0){
	fizzBuzz[i] = "fizz";
	}
	if(i%5==0){
		fizzBuzz[i] = "buzz";
    }
    fizzBuzz.push();
    console.log(fizzBuzz[i]);
}
    	

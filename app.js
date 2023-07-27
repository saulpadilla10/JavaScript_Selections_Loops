console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let i = 1; i < 100; i++){
    if(i % 2 == 0){
        continue;
    } else {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ" + i);
    } else if(i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ")
    }
}

let i = 1;

while (i <= 100) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}

i =1;

do{
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 == 0){
    console.log("FIZZ");
  }else if (i % 5 == 0){
    console.log("BUZZ")
  }
  i++;
}while (i <= 100);

let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for(let i = 0; i <= n; i++){
    if(i === value){
        found = true;
        break;
    }
}
if(found === true){
    console.log("Found Value!💎")
} else {
    console.log("Did not find value💩")
}

for(let i = 1; i < 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ" + i);
    } else if(i % 3 == 0){
        console.log("FIZZ");
    } else if (i % 5 == 0){
        console.log("BUZZ")
    }
}
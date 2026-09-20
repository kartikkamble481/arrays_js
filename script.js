//  Arrays in js 


console.log("Arrays in js");

let heroes = ["spiderman", "ironman", "thor", "hulk"];
let villen = [, "thenos", "kalki","elian"];

let mix = heroes + villen ;
console.log(mix);
console.log(heroes);
console.log(heroes.length);
for(hero of heroes){
    console.log(hero);
}


// Arrays indices in arrays 

console.log("arrays indices")
;
let marks = [ 90, 95, 80, 85, 70, 75];

marks[0]= 99, marks[1]= 98, marks[2]= 97, marks[3]= 96, marks[4]= 95, marks[5]= 94, marks[6]= 93, marks[7]= 92, marks[8]= 91;


console.log(marks);

// for (let i = 0; i < heroes.length; i++){
//     console.log(i);
//  }

for(let mark of marks){
    console.log(mark);
}



let citys = ["mumbai", "pune", "sangli", "kolhapur", "delhi", "goa"];

citys [1]= "newari";


for(city of citys){
    console.log ("city =", city.length, city);
}


let names = ["kartik", "nikhil", "tanmay", "ankush\n", "shubham", "abhi", "swapnil\n" ];

// console.log(names.length);

for(Name of names){
    console.log(Name, Name.length);
}


let students = ["a", "b", "c", "d", "e"];

for(student of students){
    console.log("studenet name of ", student);
}

let result = names + students;

console.log(result);


let cities = ["mumbai", "pune", "goa"];

for (let city of cities){
    console.log(city.toUpperCase());
}


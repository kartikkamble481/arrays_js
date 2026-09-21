// // //  Arrays in js 


// // console.log("Arrays in js");

// // let heroes = ["spiderman", "ironman", "thor", "hulk"];
// // let villen = [, "thenos", "kalki","elian"];

// // let mix = heroes + villen ;
// // console.log(mix);
// // console.log(heroes);
// // console.log(heroes.length);
// // for(hero of heroes){
// //     console.log(hero);
// // }


// // // Arrays indices in arrays 

// // console.log("arrays indices")
// // ;
// // let marks = [ 90, 95, 80, 85, 70, 75];

// // marks[0]= 99, marks[1]= 98, marks[2]= 97, marks[3]= 96, marks[4]= 95, marks[5]= 94, marks[6]= 93, marks[7]= 92, marks[8]= 91;


// // console.log(marks);

// // // for (let i = 0; i < heroes.length; i++){
// // //     console.log(i);
// // //  }

// // for(let mark of marks){
// //     console.log(mark);
// // }



// // let citys = ["mumbai", "pune", "sangli", "kolhapur", "delhi", "goa"];

// // citys [1]= "newari";


// // for(city of citys){
// //     console.log ("city =", city.length, city);
// // }


// // let names = ["kartik", "nikhil", "tanmay", "ankush\n", "shubham", "abhi", "swapnil\n" ];

// // // console.log(names.length);

// // for(Name of names){
// //     console.log(Name, Name.length);
// // }


// // let students = ["a", "b", "c", "d", "e"];

// // for(student of students){
// //     console.log("studenet name of ", student);
// // }

// // let result = names + students;

// // console.log(result);


// // let cities = ["mumbai", "pune", "goa"];

// // for (let city of cities){
// //     console.log(city.toUpperCase());
// // }


// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let val of marks){
//     sum += val;

// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);



// let points = [87, 56 ,56, 89, 89, 67, 99, 23, 23 ,12, 1, 56];

// let Sum = 0;

// for(let val of points){
//     Sum  += val;
// }

// let ave = sum / points.length;
// console.log(`ave points of the student = ${avg}`);


// let names = ["kartik", "oviiixii", "vaiduu", "kritii", "kamble"];

// for(let name of names ){
//     console.log(` ${name.toUpperCase()}`);
// }


// practice set 2 in arrays in js 

console.log("practice set 2 arrays in js ");

let items = [250, 645, 300, 900, 50];

// let i = 0;

// for (let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;

// }

for(let i = 0; i < items.length; i++ ) {
    let offer = items[i] / 10;
    items[i] -= offer;
}

console.log(items);


// push arrays in js & pop arrays in js 

let fooditems = ["apple", "potato", "orange", "litchi",];

 fooditems.push("chips", "kurkure", "peru", "chiku");
 console.log(fooditems);
 console.log(fooditems.toString())

 let deleteditem = fooditems.pop();

console.log(fooditems);
console.log(fooditems.toString());
console.log("deleted = " , deleteditem);
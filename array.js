// // методы массива

// // pop
// const array = [5, 12, 8, 130, 44];
// console.log(array)

// let pop = array.pop() // delete 44

// console.log(pop)


// // push

// const array1 = ['футбол', 'бейсбол'];
// console.log(array1)

// let push = array1.push("волейбол", "баскетбол")
// console.log(array1) // добавление новых значений в массив

// const array2 = ['футбол', 'бейсбол'];
// const array3 = ["нога", "рука"];

// let newArr = array2.push.apply(array2, array3) // соединение двух массивов
// console.log(newArr)
// console.log(array2)


// function randInt(min, max) {
//     return Math.floor(min + Math.random()*(max-min+1))
// }


// let arr = []; // создаем пустой массив

// let d = randInt(10, 20) // генерируем числа в диапозоне от одного до 20
// for(let i = 0; i < d; i++){ // далее делаем цикл, который будет все числа и добавлять в массив с помощью 

//     arr.push(randInt(1, 100))
    
// }
// console.log(arr)



// // shift 

// let myFish = ['ангел', 'клоун', 'мандарин', 'хирург'];

// let delLast = myFish.shift() // удлаение по нулевому элементу, то есть удалится "Клоун"

// console.log(delLast)
// console.log(myFish)



// // unshift 

// let myFish2 = ['ангел', 'клоун', 'мандарин', 'хирург'];

// let addfirst = myFish2.unshift("First", "second") // добавление двух новых значений в массив
// let addd = myFish2.unshift(["zero"])
// console.log(addfirst)

// console.log(myFish2)


// // map 

// const array4 = [5, 12, 8, 130, 44];

// const ar = array4.map(n => n + 100)
// console.log(ar)


// const obj = [

//     {name:"sasha1" ,id: "1"},
//     {name:"sasha2" ,id: "2"},
//     {name:"sasha3" ,id: "3"}
// ]

// const newAr = obj.map(item => item.id)
// console.log(newAr)


// //filter

// const arrya = [-1, 2, -45, 3, 56 , 67, -2, 0, -29];

// const positiveNum = arrya.filter(num => num > 0)
// console.log(arrya)
// console.log(positiveNum)

// const obj2 = [

//     {name:"sasha1" ,id: "1"},
//     {name:"sasha2" ,id: "2"},
//     {name:"sasha3" ,id: "3"}
// ]

// const delet = obj2.filter(del => del.name !== "sasha1");
// console.log(delet)






// // function solution(str){
// //     let str1 = str.split('').reverse().join('');
// //     return String(str1)
// // }
// console.log(solution("world"))


// function addLength(str) {

    
//     function addLength(str) {
//         return str.split(' ').map(n => n + " "+ n.length)
//        }

// }

// console.log(addLength("apple ban"))



// function booleanToString(b){
//     let v = b
//     console.log(v)
//     v = String(v)
//     console.log(v)
// }

// booleanToString(true)



// function findMultiples(integer, limit) {
//     let a = integer
//     let b = limit 
//     let arr = [];
//     for(i = a; i<= b; i++){
//         if(i % a == 0 && i % a != 1){
//             arr.push(i)
//         }

//   }
//   console.log(arr)
// }
// findMultiples(4, 27)


// function mystery() {
//     let results = {sanity: 'Hello'};
    
//     return results;
//   }

// // mystery()

// function reverseWords(str){
//     var reverse = [];
//     var words = str.split(" ");
//     for(let i=words.length-1; i>=0; i--){
//       reverse.push(words[i]);
      
//     }
//     return reverse.join(" ")
//   }

//   console.log(reverseWords('adfaf asdada adgadg' ))


// function mango(quantity, price){

//       return (quantity - Math.floor(quantity / 3)) * price
// }   

// console.log(mango(9,5))
// console.log(Math.floor(13 / 2))

// function removeExclamationMarks(s) {
//     let str = s.split('')  
//         for(let i = 0; i < str.length; i++){
//             if(str[i] == "!"){
//             str[i] = '';
            
//         } 
//     }
    
//     return str.join('');
// }
// console.log(removeExclamationMarks("Hello World!"))


// function invert(array) {
//     for(i = 0; i < array.length; i++){
//         if(array[i] >= 0){
//              array[i] = -Math.abs(array[i]);
//         }
//         else if (array[i] <= 0){
//             array[i] = Math.abs(array[i]);
//         }
//         else{
//             return [];
//         }
//     }
//     return array;
//  }

// console.log(invert([0]))

// function repeatStr (n, s) {
//     let str = '';
//     for(i = 0; i <= n; i++){
//         str += s
//     }

//     return str;
//   }

// console.log(repeatStr(3, "e"))


// let n = 1;
// let s = "e";

// for(i = n; i <= s; i++){
//     console.log(s)
// }
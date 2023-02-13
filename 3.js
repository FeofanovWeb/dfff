const login = document.querySelector('#login');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel')

const button = document.querySelector('.btn')
const t = document.querySelector('#tbody')
const img = document.querySelector('#formFile')
const del = document.querySelector('#del')


let arr = [];
form.addEventListener('submit', function(event){
    event.preventDefault();
    
    
    arr.push({'login':login.value, 'email':email.value, 'tel': tel.value, 'img': img.value });
    console.log(arr);
    refresh();
})    

function refresh(){
    t.innerHTML = "";
    arr.forEach(function(tek, index){
        let d = t.insertAdjacentHTML('beforeend', '<tr><th>'+ ++index +'</td><td>' +tek.login + '</td><td>' + tek.email + '</td><td>' + tek.tel +'</td></td>' + '</td><td>' + '<img style="width: 50px;" src="https://avatars.githubusercontent.com/u/117527824?v=4' + '" alt="???">' + "<th>" + "<button data-action='edit' class='btn btn-dark' style='margin-right: 20px;'>Edit</button><button data-action='delete' class='btn btn-danger'>delete</button>" + "</th>")});
    }
    refresh();
    
    t.addEventListener('click', function(event){
        console.log(event.target.tagName)
        if(event.target.tagName == "BUTTON"){
            if(event.target.dataset.action == "delete") {
               let a =  event.target.closest("tr")
                a.remove("tr")
                
                
            }
        }
    })
    
    

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
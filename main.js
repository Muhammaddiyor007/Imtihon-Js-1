// Imtihon 1
// function getSum(n){
//     let natija = 0;
//     for (let i=1; i <= n; i++ ){
//         natija += i * (n - i + 1);
//     }
//     return natija;
// }
 
// let n = 4
// console.log(getSum(n));

// Imtihon 2
// function getLongestWord(arr) {
//     let engUzunSoz = "";
//     for  (let i = 0; i < arr.length; i++ ){
//         if (arr[i].length > engUzunSoz.length){
//             engUzunSoz = arr [i];
//         }
//     }
//     return engUzunSoz
// }

// let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];
// console.log( getLongestWord(arr));


// Imtihon 3
// function  getDividers(arr, n) {
//     let YangiMassiv = [];

//     for ( let i = 0; i < arr.length; i++ ){
//         if (arr[i] % n == 0){
//             YangiMassiv.push (arr[i]);
//         } 
//     }
//     return YangiMassiv
// }

// console.log(getDividers( [2, 5, 7, 10, 0, 18, 15], 5
// ));

// Imtihon 4
// function  checkWordCapitalize(str) {
//     const sozlar = str.split (" ");

//     const kattaHarf = sozlar.every ((soz) =>
//     soz[0] === soz [0].toUpperCase());

//     return kattaHarf;
// }

// let str = "Abdulaziz Programmer Is FullStack Developer"
// console.log(checkWordCapitalize(str)
// );

// Imtihon 5
// function getCharCountObj(str) {
//     return str
//     .split (" ")
//     .reduce ((acc, char) => {
//         if (!acc.some((item) => item.char === char))
//         {
//             acc.push ({char , count: 1});

//         }
//         else{
//             acc.find ((item) => item.char === char).count ++;

//         }
//         return acc;
//     }, [])
    
//     .reduce ((result, item) => {
//         result[item.char] = item.count;
//         return result 
//     } , {});
// }
// let str = "Abdulaziz Programmer"
// console.log(getCharCountObj(str));

// Imtihon 6
// function changeObjToString(obj) {
//     const ObyektQiymatlari = Object.entries(obj);
//     let natija = []

//     for (let i = 0; i < ObyektQiymatlari.length; i++){
//         natija = natija.concat(ObyektQiymatlari[i]);
//     }

//     const stringNatija = natija.join ("");

//     return stringNatija
// }

// let obj = {a: 1, b: 2, c: 3}
// console.log(changeObjToString(obj));

// Imtihon 7
// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function  deleteProducts(){
//     const OchiriladiganId = Array.from (arguments);

//     for (let i = products.length - 1; i >= 0; i --)
//     {
//         if (
//             OchiriladiganId.includes(products[i].id)
//         )
//         {
//             products.splice (i, 1);
//         }
//     }
// return products;

// }
// console.log(deleteProducts(4, 6, 9));

// Imtihon 8

// const products = [
//   { id: 1, name: 'Bike', price: 100 },
//   { id: 2, name: 'TV', price: 400 },
//   { id: 3, name: 'Album', price: 800 },
//   { id: 4, name: 'Book', price: 600 },
//   { id: 5, name: 'Phone', price: 500 },
//   { id: 6, name: 'Computer', price: 1000 },
//   { id: 7, name: 'Skate', price: 300 },
//   { id: 8, name: 'Keyboard', price: 200 },
//   { id: 9, name: 'Bottle', price: 700 },
// ];

// function increaseProductPrice(products, id, n) {
//     for (let i = 0; i < products.length; i ++){
//         if (products[i].id === id) {
//             products[i].price += (products[i].price * n) / 100;
             
//         }
//     }
//     return products ;
// }
// console.log(increaseProductPrice(products, 6, 20)
// );


// Imtihon 9

// function count(str, char) {
//     let count = 0;

//     for (let i = 0; i <str.length; i ++) {
//         if (str[i] === char ){
//             count ++;
//         }
//     }
//     return count;
// }
// let str = "Abdulaziz Programmer"
// let char = "a"
// console.log(count(str, char));

// Imtihon 10
// let obj = {
// 	a: 10,
// 	b: 5,
// 	c: 15
// };
// function getInverse(obj){
//     const yangiObyekt = {};

//     for ( const key in obj){
//         const natija = obj[key];
//         yangiObyekt[natija] = key;
//     }
//     return yangiObyekt;

// }

// console.log(getInverse(obj));
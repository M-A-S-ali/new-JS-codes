// let stocks = {
//     fruits: ['strawberry', 'banana', 'orange', 'blueberry'],
//     holder: ['cone', 'cup', 'plate'],
//     liquid: ['water', 'syrup'],
//     toppings: ['choco chips', 'sprinkles']
// };

// function order(fruitName, call_production) {
//     setTimeout(() => {
//         console.log(`The ${fruitName} is selected, please start the production!`);
//         //call production
//         production();
//     }, 2000);
// }
// // function production() {
// //     setTimeout(
// //         () => {
// //             console.log('the production has been started');
// //             setTimeout(
// //                 () => {
// //                     console.log('The fruits has been chopped!');
// //                     setTimeout(
// //                         () => {
// //                             console.log('The water and ice added!');
// //                             setTimeout(
// //                                 () => {
// //                                     console.log('The machine has been started');
// //                                     setTimeout(
// //                                         () => {
// //                                             console.log(`The ${stocks.holder[1]} has been choosen!`);
// //                                             setTimeout(
// //                                                 () => {
// //                                                     console.log(`The ${stocks.toppings[1]} has been selected`);
// //                                                     setTimeout(
// //                                                         () => {
// //                                                             console.log(`Your ${stocks.fruits[0]} flavoured Ice cream ${stocks.holder[1]} and ${stocks.toppings[1]} topping is ready!`);

// //                                                         }, 2000
// //                                                     )

// //                                                 }, 3000
// //                                             )
// //                                         }, 2000
// //                                     )

// //                                 }, 1000
// //                             )

// //                         }, 1000
// //                     )

// //                 }, 2000
// //             )
// //         }, 0
// //     )

// // };


// // Trigger
// order(stocks.fruits[0], production

console.log('hello mamma');


function f1(name) {
    return name;
}
function f2(f1) {
    return console.log(`hello ${f1}!`);
}

f2("jamal");

setTimeout(() => { console.log('i will print after 2 sec') }, 2000);

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) resolve("I am resolved.jamal1")
    else { reject("I got rejected!.jamal1") }

})
prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);

})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) resolve("I am resolved.jamal2")
    else { reject("I got rejected!.jamal2") }

})
prom2.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);

})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) resolve("I am resolved.jamal3")
    else { reject("I got rejected!.jamal3") }

})
prom3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);

})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) resolve("I am resolved.jamal4")
    else { reject("I got rejected!.jamal4") }

})
prom4.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);

})
let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) resolve("I am resolved.jamal5")
    else { reject("I got rejected!.jamal5") }

})
prom5.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);

})



console.log('hello papa');
let prom6 = Promise.resolve([prom1, prom2,prom3,prom4])
prom6.then((a)=>{
    console.log(a);
}).catch(err=>{
    console.log(err);
    
})




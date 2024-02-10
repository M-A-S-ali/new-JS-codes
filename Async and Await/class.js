async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('jamal') }, 3500)
    })
}
async function main(){
console.log('initialize process');

console.log('load process');

console.log('load data');

let data = await getData();
console.log(data);

// data.then((v) => {
//     console.log('process data');

//     console.log('proceed task2');
// });


    console.log('process data');

    console.log('proceed task2');

}
main();



// // function createCard(title, cName, views, monthsOld, duration, thumbnail){
// //     // Finish this function
// // }


// // // createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
// let thumbnail;
// let caption;
// let channelName;
// let button1 = document.getElementById('button1');
// button1.addEventListener('click', getdata1);
// function getdata1(c){
//     let data = button1.previousElementSibling.value;
//     let newImg = document.createElement('img');
//     newImg.src = data;
//     let parentE = getElementById('image');
//     parentE.appendChild(newImg);
//     }
function getViews(views) {
    if (views < 1000) {
        return views += ' views';
    }
    else if (views >= 1000 && views < 1000000) {
        return Math.floor((views / 1000)) + 'K views';
    }
    else if (views >= 1000000 && views < 1000000000) {
        return Math.floor((views / 1000000)) + 'M views';
    }
    else (views >= 1000000000)
    return Math.floor((views / 1000000000)) + 'B views';

}
function monthsOld(day, month, year) {
    let date = new Date();
    let Tday = date.getDate();
    let Tmonth = date.getMonth();
    let Tyear = date.getFullYear();
    console.log(`${Tday}-${Tmonth}-${Tyear}`);
    day -= Tday;
    if (day < 0) {
        day *= -1;
    }
    month = Tmonth-month;
    console.log(month)
    if (month < 0) {
        month *= -1;
    }
    year -= Tyear;
    if (year < 0) {
        year *= -1;
    }
    if (year != 0 && month != 0 && day != 0) {
        return `${year}.${month} year's ago`;
    }
    else if (year != 0 && month == 0) {
        return `${year} year's ago`;
    }
    else if (year == 0 && month!=0) {
        return `${month}.${day} month's ago`;
    }
    else if (year == 0 && month == 0 && day !=0) {
        return `${day} day's ago`;
    }
    else return 'just uploaded!';
}
console.log(monthsOld(11,1,2024));








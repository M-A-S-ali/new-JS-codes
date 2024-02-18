let arr = [
    'Initializing Hacking',
    'Reading your Files',
    'Password Files Detected',
    'Sending all passwords and personal files to server',
    'Cleaning up'
];

function randomDelay() {
    return new Promise((resolve) => {
        let delay = Math.floor(Math.random() * 6 + 1);
        setTimeout(() => {
            resolve();
        }, delay * 1000);
    });
}

async function main() {
    let intervalId;

    function blink(lastH1) {
        // Clear previous interval if any
        if (intervalId) {
            clearInterval(intervalId);
        }

        intervalId = setInterval(() => {
            if (lastH1.innerHTML.endsWith('...')) {
                lastH1.innerHTML = lastH1.innerHTML.slice(0, -3);
            } else {
                lastH1.innerHTML += '.';
            }
        }, 200);
    }

    for (const item of arr) {
        let h1 = document.createElement('h1');
        await randomDelay();
        // if(h1.hasAttribute()){
        //     h1.removeAttribute();
        // }
        h1.innerHTML = item;
        document.body.appendChild(h1);
        blink(h1); // Call blink with the current h1
    }
    clearInterval(intervalId);
    h1.remove();
}

main();



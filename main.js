// Create a funtion that uses Affirmations.dev api to randomly generate affirmations and logs them to the console
async function getAffirmation() {
    let info = await fetch('https://www.affirmations.dev/');
    info = await info.json();
    const affirmation = info.affirmation;
    console.log(affirmation)
}

// Create a funtion that collect the current time and logs it to the console
const getTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(`It's ${time} and...`)
}

// Use an array and iteration to log three messages to the console
const logAffirmation = () =>{
    const outputList = [getTime, getAffirmation, getAffirmation];
    for (let item in outputList) {
        outputList[item]();
    }
}

logAffirmation();



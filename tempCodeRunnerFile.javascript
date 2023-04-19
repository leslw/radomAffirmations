async function getAffirmation() {
  const response = await fetch('https://www.affirmations.dev/');
  const data = await response.json();
  return data.affirmation;
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

async function logAffirmations(num) {
  for (let i = 0; i < num; i++) {
    const affirmation = await getAffirmation();
    const time = getCurrentTime();
    console.log(`${time} ${affirmation}`);
  }
}

logAffirmations(3);

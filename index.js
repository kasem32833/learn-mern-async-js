// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('Hello friends.');


// sync Callback Function
const syncCallbackFunction = (index, start) => {
  const numIsPrime = isPrime(index);
  console.log('Prime: ', index, numIsPrime, start, new Date().getSeconds());
};


const sleepWithCallback = (num, callback) =>{
  const start = Date.now();
  const sleep = num * 1000
  while (true){
    if (Date.now() - start > num) break;
  }
  callback(num, new Date(start));
}


//sync with callback Function

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++){
    console.log('sleeping: ', index , new Date());
    sleepWithCallback(index , syncCallbackFunction);

  }
}


syncWithCallback();

console.log('all done')





const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Learn Mern Like a pro</h1>`;
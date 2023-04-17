import { createInterface} from 'readline';

const readLine = createInterface({
    input: process.stdin,
    output: process.stdout
});

function readLineAsync ( msg) {
    return new Promise(resolve=>{
      readLine.question(msg, userEntry=>{
        resolve(userEntry);
      })
    })
}


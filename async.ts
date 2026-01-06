import fs from 'fs';

// food.  3rd param is our async callback that returns an error or the file's contents
fs.readFile('food.txt', 'utf8', (err: NodeJS.ErrnoException, fileContents: string) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
        console.log('We ate this');
    }
});


// drinks.  3rd param is our async callback that returns an error or the file's contents
fs.readFile('drinks.txt', 'utf8', (err: NodeJS.ErrnoException, fileContents: string) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(fileContents);
    }
});
console.log('We drank this');
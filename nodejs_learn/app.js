const fs = require('fs')

fs.writeFile('ron.txt', "thifffff", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Succesful!!!')
        fs.readFile('ron.txt', 'utf8', (err, file) => {
            if (err) {
                console.log(err);
            } else {
                console.log(file);
            }
        });
    }
});


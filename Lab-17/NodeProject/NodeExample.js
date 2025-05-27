
// 2

let path = require('path');

//isAbsoltute : return true if path is absolute 
console.log(path.isAbsolute('../html'));

//normalize : it will return normalize path means in given example .. represent parent folder so it will return path foo
console.log(path.normalize('foo/abc/..'));

//join : it will join two or more path
console.log(path.join('abc//','cdf','adlajd'));

//resolve : it will join 2 or more than 2 path into one absolute path
console.log(path.resolve('C:\\DU-PROGRAMS\\WEB TECHNOLOGY\\JAVASCRIPT','C:\\DU-PROGRAMS\\WEB TECHNOLOGY\\JAVASCRIPT\\Lab-1'));

//relative : it will give relative path from 2 or more path
console.log(path.relative('foo/abc','foo/xya'));

//dirname : returns diractory name
console.log(path.dirname('foo/abc/xyz'));

//basename : returns filename
console.log(path.basename('foo/abc.txt'));

//extname : return file extension 
console.log(path.extname('foo/abc.txt'));

// 3

let fs = require('fs');
const { log } = require('console');

//exists : check if given path is exists or not 
fs.exists('C:\\DU-PROGRAMS\\WEB TECHNOLOGY\\JAVASCRIPT',(exists)=>{
    // console.log(exists ? 'found' : 'Not found');
})

//
fs.stat('C:\\DU-PROGRAMS\\WEB TECHNOLOGY\\Node JS\\Lab-17\\NodeProject\\package.json',(err,data)=>{
    // console.log(data);
    //err is error
})

// const data = fs.readFileSync('./hello.txt');
// console.log(data.toString());

// fs.readFile('hello.txt',(err,data)=>{
//     // console.log(data.toString());
// })

//unlink : delete file 
// fs.unlink('hello.txt',(err)=>{
//     if (err) {
//         throw err;
//     }
//     console.log('File Deleted');
// })

//write in file
fs.writeFile('hello.txt','Hello World',(err)=>{
    if (err) {
        console.log(err);
    }
})

//append in file
fs.appendFile('hello.txt',' Hola World',(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("append in file successfully");
})

//copy content from one file to another
fs.readFile('hello.txt',(err,data)=>{
    console.log(data.toString());
    fs.writeFile('helloCopy.txt',data,(err)=>{
        if (err) {
            console.log(err);
        }
        console.log("copy file successfully");
    })
})

//rename file
// fs.rename('helloCopy.txt','OfficialCopy.txt',(err)=>{
//     console.log('rename file successfully..');
// })

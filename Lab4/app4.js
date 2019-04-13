const fs=require('fs');
const _dirname="/home/student/WebstormProjects/Lab4";
const fileName=_dirname+ '/test.txt';

const data=fs.readFileSync(fileName);
console.log(data.toString());
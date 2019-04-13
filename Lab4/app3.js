
const fs=require('fs');
const _dirname="/home/student/WebstormProjects/Lab4";
const fileName=_dirname+ '/test.txt';

fs.readFile(fileName, (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    console.log(data);
});
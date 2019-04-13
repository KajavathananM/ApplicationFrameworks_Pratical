const fs=require('fs');

const _dirname="/home/student/WebstormProjects/Lab4";
const fileName=_dirname +'/test.txt';
const outFileName=_dirname +'/test-copy.txt';

const readStream=fs.createReadStream(fileName);
const writeStream=fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

//prints value of readStream(test.txt)
readStream.on('data',data => {
    console.log(data.toString())
});
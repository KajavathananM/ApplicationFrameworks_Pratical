const os=require('os');
console.log("Architecture: "+os.arch());
console.log("CPUs: "+os.cpus().length);
console.log("OS: "+ os.platform());
console.log("Host name: "+ os.hostname());
console.log("Total memory: "+os.totalmem());
console.log("Free memory: "+os.freemem());
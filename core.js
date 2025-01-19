const os = require("os")      // importing the os module in  the application and getting information about os
const countCore = os.cpus().length;     // giving the all cores which are present in the CPU or OS
console.log(os.platform());  // it will give the platform of the os
console.log(os.arch());     // it will give the architecture of the computer  x64bit
console.log(countCore);  // 8


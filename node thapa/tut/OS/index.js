const os = require('os');
// architecture
console.log(os.arch());
// memory
const memory = os.freemem()
console.log(`${memory/1024/1024/1024} GB`)
const totalMemory = os.totalmem()
console.log(`${totalMemory/1024/1024/1024} GB`)
// hostname
console.log(os.hostname())
// platform
console.log(os.platform())
// tmp
console.log(os.tmpdir())